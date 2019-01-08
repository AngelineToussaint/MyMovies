<?php
namespace Controllers;

use Kernel\Tools\Utils;
use Models\Comment;
use Models\MovieViews;
use Models\Note;
use Models\Playlist;

class User extends Controller
{
    public static function add($post)
    {
        $user = new \Models\User();

        Utils::setValuesInObject($user, $post, ['id']);

        $user->password = password_hash($user->password, PASSWORD_BCRYPT);

        $user->insert();

        self::render('S_PO001', false, 'Votre compte');
    }

    public static function getAll()
    {
        self::render('S_G001', \Models\User::getAll());
    }

    public static function getById($params)
    {
        $user = \Models\User::getById($params->id);

        $user->playlist = Playlist::find(['user_id' => $user->id]);
        $user->playlist = Utils::removeAttrs($user->playlist, ['user_id']);

        $user->movieViews = MovieViews::find(['user_id' => $user->id]);
        $user->movieViews = Utils::removeAttrs($user->movieViews, ['user_id']);

        $user->note = Note::find(['user_id' => $user->id]);
        $user->note = Utils::removeAttrs($user->note, ['user_id']);

        $user->comment = Comment::find(['user_id' => $user->id]);
        $user->comment = Utils::removeAttrs($user->comment, ['user_id']);
        
        self::render('S_G001', $user);
    }

    public static function edit($params, $put)
    {
        $user = new \Models\User($params);
        $user->password = password_hash($put->password, PASSWORD_BCRYPT);
        $user->update();

        self::render('S_PU001', false);
    }   
}