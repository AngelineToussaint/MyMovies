<?php
namespace Controllers;
use Kernel\Config;
use Kernel\Tools\Alert;
use Kernel\Tools\Code;
use Kernel\Tools\Status;
use Kernel\Twig;
use Models\User;

class Controller
{
    /**
     * Generate view with data
     * @param $view
     * @param $data
     */
    protected static function _view($view, $data = [])
    {
        $twig = Twig::init();

        echo $twig->render($view . '.html.twig', $data);
        exit();
    }

    /**
     * Convert to json
     * @param $var
     */
    protected static function _toJson($var)
    {
        header('Content-Type:application/json');
        echo json_encode($var);
        exit();
    }

    /**
     * Add the event in the log.csv file
     * @param $code
     * @param null $key
     * @param $status
     * @param $method
     * @param $endpoint
     */
    protected static function _addEventLog($code, $key = null, $status, $method, $endpoint)
    {
        $date = date('d/m/Y H:i:s');

        $ip = $_SERVER['REMOTE_ADDR'];

        file_put_contents('../kernel/logs/log.csv', "\n$code, $key, $date, $status, $method, $endpoint, $ip", FILE_APPEND);
    }

    /**
     * Render to json data sent
     * @param $code
     * @param bool $data
     * @param null $key
     */
    public static function render($code, $data = false, $key = null)
    {
        $res = Config::getResponse($code);

        // Get type of response by first letter of the code
        $success = $res->code[0] == 'S';

        $res->method = $_SERVER['REQUEST_METHOD'];
        $res->endpoint = $_SERVER['REQUEST_URI'];

        if (null != $key) {
            // It's the target key (when there are a problem for example)
            $res->message = preg_replace('/:key/', $key, $res->message);
        }

        $render = [
            $success ? 'success' : 'error' => $res
        ];

        // Register error in logs
        if (!$success) self::_addEventLog($code, $key, $res->status, $res->method, $res->endpoint);

        if (false !== $data) $render['data'] = (!empty($data) ? $data : null);

        http_response_code($res->status);
        self::_toJson($render);
    }
}
