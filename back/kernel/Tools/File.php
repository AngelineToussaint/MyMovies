<?php
namespace Kernel\Tools;

class File
{
    private $_fileName;
    private $_fileSize;
    private $_fileTmp;
    private $_fileDim;
    private $_fileError;
    private $_fileExtension;
    private $_extensions;
    private $_size;
    private $_dim;
    private $_dir;

    /**
     * File constructor.
     * @param $file
     * @param $size
     * @param $extensions
     * @param $dim
     * @param $dir
     */
    public function __construct($file, $size, $extensions, $dim, $dir)
    {
        $this->_fileExtension = '.' . strtolower(substr(strrchr($file['name'], '.'),1));
        $this->_fileName      = $this->_getFileName($file['name']);
        $this->_fileSize      = $file['size'];
        $this->_fileTmp       = $file['tmp_name'];
        $this->_fileDim       = getimagesize($file['tmp_name']);
        $this->_fileError     = $file['error'];
        $this->_extensions    = $extensions;
        $this->_size          = $size;
        $this->_dim           = $dim;
        $this->_dir           = $dir;
    }

    /**
     * Get the name of the file by replacing the specials chars
     * @param $file
     * @return mixed|string
     */
    private function _getFileName($file)
    {
        $fileName = strtr($file,
            'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ',
            'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy');
        $fileName = preg_replace('/[^.a-z0-9]+/i', '-', $fileName);
        $fileName = explode('.',$fileName)[0];

        return hash('sha1', microtime($fileName)) . $this->_fileExtension;
    }

    /**
     * Check if there are a error
     * @return array
     */
    private function _check()
    {
        $error = [];

        if ($this->_fileError > 0) $error['transfert'] = true;
        if (!in_array($this->_fileExtension, $this->_extensions)) $error['extension'] = true;
        if ($this->_fileSize > $this->_size) $error['size'] = true;
        if ($this->_fileDim[0] > $this->_dim[0] || $this->_fileDim[1] > $this->_dim[1]) $error['dim'] = true;

        return $error;
    }

    /**
     * Upload the file if there are no error
     * @return array|string
     */
    public function upload()
    {
        $error = $this->_check();

        if (empty($error))
        {
            move_uploaded_file($this->_fileTmp, $_SERVER['DOCUMENT_ROOT'] . '/' . $this->_dir . $this->_fileName);
            chmod($_SERVER['DOCUMENT_ROOT'] . '/' . $this->_dir . $this->_fileName, 0755);

            return $this->_fileName;
        }
        else { return ['error' => $error]; }
    }
}
