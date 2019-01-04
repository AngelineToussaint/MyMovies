<?php
namespace Controllers;

use Kernel\Tools\Utils;
use Models\User;

class Auth extends Controller
{
    /**
     * Login and get token if data matches with User
     * Example of Auth
     * You can edit this to match with your own database
     * @param $post
     */
    public static function check($post)
    {
        $user = User::check($post->email, $post->password);
        if ($user) {
            // create token here
            $token = Utils::createToken();
            $auth = new \Models\Auth();
            $auth->user_id = $user->id;
            $auth->token   = $token;
            $auth->date    = time();
            $auth->insert();

            self::render('S_PO001', ['token' => $token]);
        }

        self::render('E_A004');
    }
}