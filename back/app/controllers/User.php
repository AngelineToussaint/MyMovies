<?php
namespace Controllers;

use Kernel\Tools\Utils;

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
}