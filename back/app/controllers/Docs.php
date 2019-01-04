<?php
namespace Controllers;

use Kernel\Config;

class Docs extends Controller
{
    public static function index($params, $routes)
    {
        self::_view('docs', [
            'description' => self::_description(),
            'httpRequests' => self::_httpRequests(),
            'successCodes' => self::_statusCodes()[0],
            'errorCodes' => self::_statusCodes()[1],
            'regex' => Config::get('regex'),
            'docs' => self::_createDocs($routes)
        ]);
    }

    /**
     * Create the docs with
     * @return array
     */
    private static function _createDocs($routes)
    {
        $allRoutes = [];
        foreach ($routes as $route) {
            if ($route->endpoint != 'docs') {
                $ref = explode('/', $route->endpoint)[0];

                $route->errors = [];
                if ($route->token) $route->errors[] = self::_addErrorToRoute('A002', $route->method, $route->endpoint);
                if (!empty($route->roles)) $route->errors[] = self::_addErrorToRoute('A003', $route->method, $route->endpoint);

                foreach ($route->requests as $key => $type) {
                    if ($key[0] === "*") $route->errors[] = self::_addErrorToRoute('A005', $route->method, $route->endpoint, $key);
                }

                $allRoutes[$ref][] = $route;
            }
        }

        return $allRoutes;
    }

    /**
     * Add a new error in the doc of the route
     * @param $code
     * @param $method
     * @param $endpoint
     * @return string
     */
    private static function _addErrorToRoute($code, $method, $endpoint, $key = null)
    {
        $json = file_get_contents("../kernel/status.json");
        $codes = json_decode($json);

        foreach ($codes as $item) {
            if ($item->code == $code) {
                if (null != $key) {
                    $key = substr($key, 1, strlen($key));
                    return "{\n".
                          "  \"error\": {\n".
                          "    \"code\": \"$code\",\n".
                          "    \"status\": $item->status,\n".
                          "    \"title\": \"$item->title\",\n".
                          "    \"method\": \"$method\",\n".
                          "    \"endpoint\": \"/$endpoint\",\n".
                          "    \"key\": \"$key\"\n".
                          "  }\n".
                        "}";
                }

                return "{\n".
                    "  \"error\": {\n".
                    "    \"code\": \"$code\",\n".
                    "    \"status\": $item->status,\n".
                    "    \"title\": \"$item->title\",\n".
                    "    \"method\": \"$method\",\n".
                    "    \"endpoint\": \"/$endpoint\",\n".
                    "  }\n".
                    "}";
            }
        }
    }

    /**
     * List of http requests methods allowed
     * @return array
     */
    private static function _httpRequests()
    {
        return [
            [
                'title' => 'GET',
                'content' => 'Retrieve a resource and list of resources'
            ],
            [
                'title' => 'POST',
                'content' => 'Add a new resource'
            ],
            [
                'title' => 'PUT',
                'content' => 'Update a resource with an identifier'
            ],
            [
                'title' => 'DELETE',
                'content' => 'Delete a resource with an identifier'
            ]
        ];
    }

    /**
     * List of status codes (success and error) in the status.json file (in the folder kernel)
     * @return array
     */
    private static function _statusCodes()
    {
        $json = file_get_contents("../kernel/status.json");
        $codes = json_decode($json);

        $successCodes = [];
        $errorCodes = [];
        foreach ($codes as $code) {
            if ($code->success) {
                $successCodes[] = $code;
            } else {
                $errorCodes[] = $code;
            }
        }

        return [$successCodes, $errorCodes];
    }

    /**
     * Set a description of the API
     * @return string
     */
    private static function _description()
    {
        return 'Welcome to the documentation of the <b>MyMovies API</b>.<br>
        This documentation allow you to understand this RESTful API. To navigate in the documentation, 
        you can use the menu by clicking on the menu icon <i class="material-icons tiny">menu</i> at top left.<br>
        Also, in this home page, you can see all methods of HTTPs requests allowed in the API at right and at bottom the success or error codes to which refer to.';
    }

}
