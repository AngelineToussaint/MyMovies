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

    public static function add($post, $params)
    {
        $playlist = new \Models\Playlist();

        $playlist->user_id = $params->id;
        $playlist->id_movie = $post->id_movie;

        $playlist->insert();

        self::render('S_PO001', false, 'Le film');
    }
}