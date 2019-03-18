<?php
namespace Models;
use Kernel\Database;
use Kernel\Tools\Utils;

class Auth extends Database
{
    protected static $_table = 'auth';
    private static $_user_id = null;

    public static function getUser()
    {
        // Cache condition
        if (null != self::getUserId()) {
            return User::getById(self::getUserId());
        }

        $auth = self::findFirst(['token' => Utils::getHeader('X-Auth-Token')]);

        self::setUserId($auth->user_id);

        return User::getById($auth->user_id);
    }

    /**
     * @return int
     */
    public static function getUserId()
    {
        return self::$_user_id;
    }

    /**
     * @param $user_id
     */
    public static function setUserId($user_id)
    {
        self::$_user_id = $user_id;
    }

    /**
     * @param int $user_id
     * @param string $tokenToKeep
     * @return boolean
     */
    public static function disconnectAll($user_id, $tokenToKeep)
    {
        return self::exec('DELETE FROM '. self::$_table .' WHERE user_id = ? AND token != ?', [
            $user_id, $tokenToKeep
        ]);
    }
}