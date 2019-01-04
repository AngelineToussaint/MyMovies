<?php
namespace Kernel\Router;

class Group
{
    private $_path;
    private $_needToken;
    private $_needRole;
    private $_params = [];
    private $_router;


    /**
     * Group constructor
     * @param $path
     * @param $needToken
     * @param $needRole
     * @param $params
     * @param Router $router
     */
    public function __construct($path, $needToken, $needRole, $params, Router $router)
    {
        $this->_path = trim($path, '/');
        $this->_needToken = $needToken;
        $this->_needRole = $needRole;
        $this->_params = null != $params ? $params : [];
        $this->_router = $router;
    }

    /**
     * Add new route for this group
     * @param $method
     * @param $path
     * @param $callable
     * @param null $name
     * @param null $needToken
     * @param array $needRole
     * @param array $params
     */
    public function add($method, $path, $callable, $name = null, $needToken = null, $needRole = [], $params = [], $requests = [])
    {
        trim($this->_path, '/');
        $needToken = null !== $needToken ? $needToken : $this->_needToken;

        $this->_loopIncrement($params, $needRole);

        $this->_router->add($method, $this->_path.$path, $callable, $name, $needToken, $needRole, $params, $requests);
    }

    /**
     * Create a subgroup of the group of routes
     * @param $path
     * @param $callable
     * @param null $needToken
     * @param array $needRole
     * @param array $params
     */
    public function group($path, $callable, $needToken = null, $needRole = [], $params = [])
    {
        trim($this->_path, '/');
        $needToken = null !== $needToken ? $needToken : $this->_needToken;

        $this->_loopIncrement($params, $needRole);

        $group = new self($this->_path.$path, $needToken, $needRole, $params, $this->_router);

        $callable($group);
    }

    /**
     * Increment the $this->_params and $this->_needRole array with the new values
     * Overwrite old values if they have the same key
     * @param array $params
     * @param array $needRole
     */
    private function _loopIncrement(&$params = [], &$needRole = [])
    {
        $newParams = $this->_params;
        foreach ($params as $k => $v) {
            $newParams[$k] = $v;
        }
        $params = $newParams;

        $newRoles = $this->_needRole;
        foreach ($needRole as $k => $v) {
            $newRoles[$k] = $v;
        }
        $needRole = $newRoles;
    }
}