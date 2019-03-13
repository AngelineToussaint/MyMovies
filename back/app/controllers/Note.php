<?php
namespace Controllers;

use Kernel\Tools\Utils;

class Note extends Controller
{
    public static function getLast()
    {
        $notes = \Models\Note::getAll("id DESC", "5");
        foreach($notes as $note) {
            $note->infoFk();
        }
        
        self::render('S_G001', $notes);
    }

    public static function getByMovieId($params)
    {
        self::render('S_G001', \Models\Note::find(['idMovie' => $params->id]));
    }

    public static function add($post, $params)
    {
        if (\Models\Auth::getUser()->id == $params->id) {
            $note = new \Models\Note();

            $note->user_id = $params->id;
            $note->id_movie = $post->id_movie;
            $note->note = ($post->note > 0 && $post->note < 6) ? $post->note : 5;

            $note->insert();

            self::render('S_PO001', false, 'La note');
        }

        self::render('E_A007');
    }
}
