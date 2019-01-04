<?php
namespace Controllers\Error;
use Controllers\Controller;

class ErrorToken extends Controller
{
    public static function index()
    {
        self::render("E_A003");
    }
}