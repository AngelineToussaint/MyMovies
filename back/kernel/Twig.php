<?php
namespace Kernel;

use Twig\TwigFilter;

class Twig
{
    public static function init()
    {
        $loader = new \Twig_Loader_Filesystem('../app/views/');
        $twig = new \Twig_Environment($loader, [
            'debug' => true
        ]);

        self::addFilter($twig);
        self::addExtension($twig);
        self::addGlobal($twig);

        return $twig;
    }

    public static function addFilter($twig)
    {
        $twig->addFilter( new \Twig_SimpleFilter('cast_to_array', function ($stdClassObject) {
            return (array) $stdClassObject;
        }));

        $twig->addFilter( new \Twig_SimpleFilter('ksort', function ($array) {
            ksort($array);
            return $array;
        }));
    }

    public static function addExtension($twig)
    {
        $twig->addExtension(new \Twig_Extension_Debug());
    }

    public static function addGlobal($twig)
    {
        $twig->addGlobal('g_api_name', 'MyMovies API');
        $twig->addGlobal('g_base_uri', 'http://' . $_SERVER['HTTP_HOST'] . '/MyMovies/back/public');
        $twig->addGlobal('g_url', 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
        $twig->addGlobal('g_js', './js/');
        $twig->addGlobal('g_css', './css/');
        $twig->addGlobal('g_img', './img/');
    }
}