<?php
namespace Kernel\Tools;

use Kernel\Config;

class Captcha
{
    /**
     * @param $code
     * @return bool
     */
    function check($code)
    {
        if (empty($code)) {
            return false; // If is empty stop search and return false
        }

        $apiSecret = Config::get('captcha')['apiSecret'];

        $url = "https://www.google.com/recaptcha/api/siteverify?secret={$apiSecret}&response={$code}";

        if (function_exists('curl_version')) {
            $curl = curl_init($url);
            curl_setopt($curl, CURLOPT_HEADER, false);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_TIMEOUT, 1);
            curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
            $response = curl_exec($curl);
        } else {
            // If don't have curl
            $response = file_get_contents($url);
        }

        if (empty($response) || is_null($response)) {
            return false;
        }

        $json = json_decode($response);
        return $json->success;
    }
}