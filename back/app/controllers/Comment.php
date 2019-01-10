<?php

namespace Controllers;


class Comment extends Controller
{
    public static function add($post, $params)
    {
        if (\Models\Auth::getUser()->id == $params->id) {
            $comment = new \Models\Comment();

            $comment->user_id = $params->id;
            $comment->id_movie = $post->id_movie;
            $comment->content = htmlspecialchars($post->comment);

            $comment->insert();

            self::render('S_PO001', false, 'Le commentaire');
        }

        self::render('E_A007');
    }

    public static function edit($put, $params)
    {
        $comment = new \Models\Comment($params->comment_id);

        if (\Models\Auth::getUser()->id == $params->id && $params->id == $comment->user_id) {

            $comment->content = htmlspecialchars($put->comment);

            $comment->update();

            self::render('S_PU001', false, 'Le commentaire');
        }

        self::render('E_A007');
    }
}