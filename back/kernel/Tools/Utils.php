<?php
namespace Kernel\Tools;

use Controllers\Controller;
use Kernel\Config;

class Utils
{
    /**
     * Create random token
     * @return bool|string
     */
    public static function createToken($withIp = true)
    {
        $token = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if ($withIp) {
            return substr(str_shuffle(str_repeat($token, 50)), 0, 50) . '/' . sha1($_SERVER['REMOTE_ADDR']);
        } else {
            return substr(str_shuffle(str_repeat($token, 50)), 0, 50);
        }
    }

    /**
     * Check if needle is between min and max values
     * @param int $needle
     * @param int $min
     * @param int $max
     * @return bool
     */
    public static function between($needle, $min = null, $max = null)
    {
        switch (true) {
            // If null == $min && null == $max
            case null == $min && null == $max:
                return true;

            // If needle == null && (null != $min || null != $max)
            case null == $needle:
                return false;

            // If needle != null && (null != $min && null == $max)
            case null != $min && null == $max:
                return ($needle >= $min) ? true : false;

            // If needle != null && (null == $min && null != $max)
            case null == $min && null != $max:
                return ($needle <= $max) ? true : false;

            // If all var != null
            default:
                return ($needle >= $min && $needle <= $max) ? true : false;
        }
    }

    /**
     * Transform date Fr to Us
     * Key is only if there are an error with the date. It's for the title of the render
     * Example :
     * $key = 'date_create' the title is : 'Error with the property date_create'
     * @param $date
     * @param string $key
     * @return string
     */
    public static function dateUs($date, $key = 'date')
    {
        if (null == $date) return null;

        if (!stripos($date, '/')) {
            Controller::render('E_A005', false, $key);
        }
        $tabDate = explode('/', $date);
        return $tabDate[2] . '-' . $tabDate[1] . '-' . $tabDate[0];
    }

    /**
     * Get the timestamp of the date
     * @param $date
     * @return int
     */
    public static function toTimestamp($date)
    {
        $newDate = new \DateTime($date);
        return $newDate->getTimestamp();
    }

    /**
     * This function is the equivalent to the setInterval in JS
     * Example :
     * setInterval(function($time) {
     *     echo $time;
     *
     *     return ($time == 30); // Stop the interval when the time is 30 seconds
     * }, 10);
     * @param $callback
     * @param $seconds
     */
    public static function setInterval($callback, $seconds)
    {
        $time = 0;
        while(true)
        {
            $time = $time + $seconds;
            if ($res = ($callback($time))) {
                return $res;
            }

            sleep($seconds);
        }
    }

    /**
     * Get content header by header name
     * @param null $header
     * @return string
     */
    public static function getHeader($header = null)
    {
        return !empty(self::_getallheaders()[$header]) ? self::_getallheaders()[$header] : null;
    }

    /**
     * Get all headers
     * @return array
     */
    private static function _getallheaders()
    {
        $headers = [];
        foreach ($_SERVER as $name => $value) {
            if (substr($name, 0, 5) == 'HTTP_') {
                $headers[str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', substr($name, 5)))))] = $value;
            }
        }
        return $headers;
    }

    /**
     * @param $pattern
     * @param $subject
     * @return int
     */
    public static function match($pattern, $subject)
    {
        return preg_match(Config::get('regex')[$pattern], $subject);
    }

    /**
     * Remove attributes on array
     * @param array $array
     * @param array $attrs
     * @param string $type
     * @return array
     */
    public static function removeAttrs($array = [], $attrs = [], $type = 'obj')
    {
        foreach ($array as $k => $v) {
            switch ($type) {
                case 'obj':
                    foreach ($attrs as $attr) {
                        unset($v->$attr);
                    }
                    break;

                case 'array':
                    foreach ($attrs as $attr) {
                        unset($v[$attr]);
                    }
                    break;
            }
        }
        return $array;
    }

    /**
     * Search if value (needle) is in multidimensional array
     * @param $array
     * @param $needle
     * @return bool|int|string
     */
    public static function in_multi_array($array, $needle)
    {
        foreach($array as $key => $item)
        {
            if (in_array($needle, $item)) {
                return $key;
            }
        }
        return false;
    }

    /**
     * Set the values of existing properties in object ($haystack) with the other object $needle which contain the same keys
     *
     * Example :
     * Object $user ($haystack) which contain the properties firstname and lastname with null value
     * Object $needle contain the same property firstname with the value 'John'
     * (Work only if the property is not in the $escape array)
     * With this method, the $user->firstname is equal to 'John'
     * @param object $haystack
     * @param object $needle
     * @param array $escape
     */
    public static function setValuesInObject(&$haystack, $needle, $escape = []) {
        foreach ($needle as $k => $v) {
            if (property_exists($haystack, $k) && !in_array($k, $escape)) {
                $haystack->$k = $v;
            }
        }
    }

    /**
     * Check the existing properties in object ($haystack) with the $needle array which contain the keys to check
     *
     * Example :
     * Object $haystack which contain the properties firstname but not lastname
     * Array $needle contain the values firstname and lastname
     *
     * An error is generate because of the properties lastname is not in $haystack
     *
     * Check also the type if necessary (if the $type contain the key)
     * @param object $haystack
     * @param array $needle
     * @param array $type
     */
    public static function checkPropsInObject($haystack, $needle, $type = [])
    {
        foreach ($needle as $v) {
            if (!property_exists($haystack, $v)) {
                Controller::render('E_A005', false, $v);
            } elseif (isset($type[$v]) && !preg_match('/^'. Config::setRegex($type[$v]) .'$/', $haystack->$v) && Config::setRegex($type[$v]) != '.') {
                Controller::render('E_A005', false, $v);
            }
        }
    }

    /**
     * Parse PUT data for handle
     * @return object $data (put)
     */
    public static function parse_http_put() {
        $data = new \stdClass();
        $input = file_get_contents('php://input');
        preg_match('/boundary=(.*)$/', $_SERVER['CONTENT_TYPE'], $matches);

        if ($matches) {
            $boundary = $matches[1];
            $a_blocks = preg_split("/-+$boundary/", $input);
            array_pop($a_blocks);
        } else {
            parse_str($input, $a_blocks);
        }

        foreach ($a_blocks as $id => $block) {
            //if ($block != 0 && empty($block)) { $block = null; }


            if (strpos($block, 'application/octet-stream') !== FALSE) {
                preg_match("/name=\"([^\"]*)\".*stream[\n|\r]+([^\n\r].*)?$/s", $block, $matches);
            }
            else {
                preg_match('/name=\"([^\"]*)\"[\n|\r]+([^\n\r].*)?\r$/s', $block, $matches);
            }

            if ($matches) {
                $data->{$matches[1]} = $matches[2];
            } else {
                $data->{$id} = $block;
            }
        }

        return $data;
    }
}
