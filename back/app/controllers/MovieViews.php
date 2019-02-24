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

    public static function add($post, $params)
    {
        if (\Models\Auth::getUser()->id == $params->id) {
            $movieViews = new \Models\MovieViews();

            $movieViews->user_id = $params->id;
            $movieViews->id_movie = $post->id_movie;

            $movieViews->insert();

            self::render('S_PO001', false, 'Le film');
        }

        self::render('E_A007');
    }

    public static function delete($params)
    {
        $movieViews = new \Models\MovieViews($params->movieviews_id);

        if (\Models\Auth::getUser()->id == $params->id && $params->id == $movieViews->user_id) {

            $movieViews->delete();

            self::render('S_D001');
        }
        self::render('E_A007');
    }
}