<?php
namespace Controllers;

use Kernel\Tools\Utils;

class MovieViews extends Controller
{
    /**
     * Get all movies in movie views of a User
     * @param $params
     */
    public static function getAll($params)
    {
        $movieViews = \Models\MovieViews::find(['user_id' => $params->id]);
        $movieViews = Utils::removeAttrs($movieViews, ['user_id']);

        self::render('S_G001', $movieViews);
    }
}