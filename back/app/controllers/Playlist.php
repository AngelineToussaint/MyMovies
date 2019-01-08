<?php
namespace Controllers;

use Kernel\Tools\Utils;

class Playlist extends Controller
{
    /**
     * Get all movies in playlist of a User
     * @param $params
     */
    public static function getAll($params)
    {
        $playlist = \Models\Playlist::find(['user_id' => $params->id]);
        $playlist = Utils::removeAttrs($playlist, ['user_id']);

        self::render('S_G001', $playlist);
    }
}