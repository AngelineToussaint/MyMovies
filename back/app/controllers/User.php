<?php
namespace controllers;

class User extends Controller
{
    public static function add($post)
    {
        self::_toJson($post);
    }
}