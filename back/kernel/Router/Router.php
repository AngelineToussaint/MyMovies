<?php
namespace Kernel\Router;
use Controllers\Controller;

class Router
{
    private $_url;
    private $_routes = [];
    private $_namedRoutes = [];

    /**
     * Router constructor.
     * @param $url
     */
    public function __construct($url)
    {
        $this->_url = $url;
    }

    /**
     * Create a group of routes
     * @param $path
     * @param $callable
     * @param null $needToken
     * @param array $needRole
     * @param array $params
     */
    public function group($path, $callable, $needToken = null, $needRole = [], $params = [])
    {
        $group = new Group($path, $needToken, $needRole, $params, $this);

        $callable($group);
    }

    /**
     * @param $method : GET / POST / PUT / DELETE...
     * @param $path
     * @param $callable
     * @param null $name
     * @param null $needToken
     * @param array $needRole
     * @param array $params
     * @return Route
     */
    public function add($method, $path, $callable, $name = null, $needToken = null, $needRole = [], $params = [], $requests = [])
    {
        $route = new Route($path, $callable, $name, $needToken, $needRole, $params, $requests);

        $this->_routes[$method][] = $route;

        if (is_string($callable) && is_null($name)) {
            $name = $callable;
        }
        if ($name) {
            $this->_namedRoutes[$name] = $route;
        }
        return $route;
    }

    /**
     * @return mixed
     * @throws RouterException
     */
    public function run()
    {
        if (!isset($this->_routes[$_SERVER['REQUEST_METHOD']])) {
            throw new RouterException('REQUEST_METHOD doesn\'t exist');
        }

        try {
            foreach ($this->_routes[$_SERVER['REQUEST_METHOD']] as $route) {

                if ($route->match($this->_url)) {
                    return $route->call($this);
                }

            }
            throw new RouterException('No matching routes', 1);
        }
        catch (RouterException $e) {
            if ($e->getCode() === 1) { Controller::render('E_A001'); }
        }

    }

    /**
     * @param $name
     * @param array $params
     * @return mixed
     * @throws RouterException
     */
    public function url($name, $params = [])
    {
        if (!isset($this->_namedRoutes[$name])) {
            throw new RouterException('No route matches this name');
        }
        return $this->_namedRoutes[$name]->getUrl($params);
    }

    public function getAllRoutes()
    {
        $allRoutes = [];

        foreach ($this->_routes as $method => $routes) {
            foreach ($routes as $route) {
                $route = (object) $route->getInformation();
                $route->method = $method;
                $allRoutes[] = $route;
            }
        }

        return $allRoutes;
    }
}
