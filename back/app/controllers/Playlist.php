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
        if (\Models\Auth::getUser()->id == $params->id) {
            $playlist = new \Models\Playlist();

            $playlist->user_id = $params->id;
            $playlist->id_movie = $post->id_movie;

            $playlist->insert();

            self::render('S_PO001', false, 'Le film');
        }

        self::render('E_A007');
    }

    public static function delete($params)
    {
        $playlist = new \Models\Playlist($params->playlist_id);

        if (\Models\Auth::getUser()->id == $params->id && $params->id == $playlist->user_id) {

            $playlist->delete();

            self::render('S_D001');
        }
        self::render('E_A007');
    }
}