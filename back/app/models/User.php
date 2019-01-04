<?php
namespace Models;
use Kernel\Database;
use Kernel\Tools\Utils;

class User extends Database
{
    protected static $_table = 'user';

    /**
     * Check if email and password correspond
     * @param $email
     * @param $password
     * @return array|bool
     */
    public static function check($email, $password)
    {
        $user = self::findFirst(['email' => $email]);

        if (password_verify($password, $user->password)) {
            return $user;
        }
        return false;
    }

    /**
     * Overwrite the insert to generate the token
     * @return int
     */
    public function insert()
    {
        $this->token = $this->_generateToken();

        return parent::insert();
    }

    /**
     * Generate the token and regenerate (at infinite) if the token is already registered in db
     */
    private function _generateToken()
    {
        Utils::setInterval(function ($time) {
            $token = Utils::createToken(false);

            if (null == User::findFirst(['token' => $token])) {
                return $token;
            }
        }, 1);
    }
}