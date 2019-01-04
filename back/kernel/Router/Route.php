<?php
namespace Kernel\Router;

use Controllers\Controller;
use Kernel\Config;
use Kernel\Tools\Utils;
use Models\Auth;
use Models\User;

class Route
{
    private $_path;
    private $_callable;
    private $_matches = [];
    private $_typeParams = [];
    private $_params = [];
    private $_requests = []; // Data to send in PUT / PATCH / POST
    private $_name;
    private $_needToken;
    private $_needRole = [];


    /**
     * Route constructor
     * @param $path
     * @param $callable
     * @param $name
     * @param $needToken
     * @param $needRole
     * @param $params
     */
    public function __construct($path, $callable, $name, $needToken, $needRole, $params, $requests)
    {
        $this->_path = trim($path, '/');
        $this->_callable = $callable;
        $this->_name = $name;
        $this->_needToken = $needToken;
        $this->_needRole = $needRole;
        $this->_requests = $requests;

        $this->_params($params);
    }

    /**
     * @param $params
     */
    private function _params($params)
    {
        if (!empty($params)) {
            foreach ($params as $key => $value) {

                $value = Config::setRegex(ucfirst($value));

                $this->_params[$key] = str_replace('(', '(?:', $value);
            }
        }

        // Set the type of params (use for the doc)
        preg_match_all('#:([\w]+)#', $this->_path, $urlParams);

        foreach ($urlParams[1] as $param) {
            if (array_key_exists($param, $params)) {
                $this->_typeParams[$param] = $params[$param];
            } else {
                $this->_typeParams[$param] = 'String';
            }
        }
    }

    /**
     * @param $url
     * @return bool
     */
    public function match($url)
    {
        $url = trim($url, '/');
        $path = preg_replace_callback('#:([\w]+)#', [$this, '_paramMatch'], $this->_path);
        $reg = "#^$path$#i";

        // Get values
        if (!preg_match($reg, $url, $matchesValues)) {
            return false;
        }
        array_shift($matchesValues);

        // Get keys
        preg_match_all('#:([\w]+)#', $this->_path, $matchesKeys);

        $matchesKeys = $matchesKeys[1];
        $matches = [];

        // Match key with value
        for ($i = 0; $i < count($matchesKeys); $i++) {
            $matches[$matchesKeys[$i]] = $matchesValues[$i];
        }
        $this->_matches = $matches;
        return true;
    }

    /**
     * @param $match
     * @return string
     */
    private function _paramMatch($match)
    {
        if (isset($this->_params[$match[1]])) {
            $reg = '(' . $this->_params[$match[1]] . ')';
            return $reg;
        }
        $reg = '([^/]+)';
        return $reg;
    }

    /**
     * Call the method of the route
     * @return mixed
     */
    public function call(Router $router)
    {
        $this->needToken();

        $this->checkRequests();

        $data = $this->_setDataFromMethod((object) $this->_matches, $router);

        if (is_string($this->_callable)) {
            $params = explode('#', $this->_callable);
            $controller = "Controllers\\$params[0]";
            $controller = new $controller();

            return call_user_func_array([$controller, $params[1]], $data);
        }
        else {
            return call_user_func_array($this->_callable, $data);
        }
    }

    /**
     * Return value sent with URL (matches) and in POST or PUT
     * @return array of objects
     */
    private function _setDataFromMethod($matches, Router $router)
    {
        $method = $_SERVER['REQUEST_METHOD'];

        if (in_array($method, ['PUT', 'PATCH'])) {
            $data = [Utils::parse_http_put(), $matches];
        } else if ($method === 'POST') {
            $data = [(object) $_POST, $matches];
        } else {
            $data = [$matches];
        }

        if (!empty($_FILES)) {
            $data['files'] = (object) $_FILES;
        }

        $data['routes'] = $router->getAllRoutes();

        return $data;
    }

    /**
     * @param $params
     * @return mixed|string
     */
    public function getUrl($params)
    {
        $path = $this->_path;
        foreach ($params as $k => $v) {
            $path = str_replace(":$k", $v, $path);
        }

        return $path;
    }

    /**
     * Get information of the route
     */
    public function getInformation()
    {
        return [
            'title' => $this->_name,
            'endpoint' => $this->_path,
            'token' => $this->_needToken,
            'roles' => $this->_needRole,
            'params' => $this->_typeParams,
            'requests' => $this->_requests
        ];
    }

    /**
     * Create an error if user does not has a valid token
     */
    public function needToken()
    {
        $errorToken = false;

        if ($this->_needToken === true) {
            // If token does not exist : generate error
            if (empty(Utils::getHeader('X-Auth-Token'))) {

                $errorToken = true;

            } else {

                if (explode('/', Utils::getHeader('X-Auth-Token'))[1] != sha1($_SERVER['REMOTE_ADDR'])) {
                    // If the second part of token (the IP) is not equal to the IP of user which has sent the request : generator error
                    $errorToken = true;
                }

                $token = Auth::findFirst(['token' => Utils::getHeader('X-Auth-Token')]);

                // If token is invalid : generator error
                // If token expire (set date of expiration in Config file) : generate error
                $expire = Config::get('token')['expire'];

                if (null == $token || (null != $expire && $token->date + $expire < time())) {
                    $errorToken = true;
                }
            }

            if ($errorToken) Controller::render('E_A002');
            elseif (!empty($this->_needRole)) $this->needRole($token);
        }
    }

    /**
     * Create an error if user does not has valid role
     * Use if the token is valid
     * Example use :
     *  ['>' => 2] -> the user must to be superior to the role 2
     * @param $token
     */
    public function needRole($token)
    {
        $user = User::getById($token->user_id);
        $id = $user->role_id;
        $errorRole = false;

        foreach ($this->_needRole as $k => $v) {

            switch ($k) {

                case '>':
                    if ($id <= $v) $errorRole = true;
                    break;

                case '>=':
                    if ($id < $v) $errorRole = true;
                    break;

                case '<':
                    if ($id >= $v) $errorRole = true;
                    break;

                case '<=':
                    if ($id > $v) $errorRole = true;
                    break;

                case '=':
                    if ($id != $v) $errorRole = true;
                    break;

            }

        }

        if ($errorRole) Controller::render('E_A003');
    }

    /**
     * Check the require requests
     * If there are a request with no value
     */
    public function checkRequests()
    {
        $method = $_SERVER['REQUEST_METHOD'];

        if (in_array($method, ['PUT', 'PATCH'])) {
            $data = Utils::parse_http_put();
        } else if ($method === 'POST') {
            $data = (object) $_POST;
        }

        $requireKeys = [];
        $requireTypes = [];

        foreach ($this->_requests as $key => $type) {
            $nameOfKey = ($key[0] === '*') ? substr($key, 1, strlen($key)) : $key;

            if ($key[0] === '*' || property_exists($data, $nameOfKey)) {
                $requireKeys[] = $nameOfKey;
                $requireTypes[$nameOfKey] = ucfirst($type);
            }
        }
        if (isset($data)) {
            Utils::checkPropsInObject($data, $requireKeys, $requireTypes);
        }
    }
}
