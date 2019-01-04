<?php
namespace Controllers\Error;
use Controllers\Controller;
use Kernel\Tools\Code;
use Kernel\Twig;

class Error404 extends Controller
{
    public static function index()
    {
        self::render("E_A001");
    }
}