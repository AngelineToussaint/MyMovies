<?php
setlocale (LC_TIME, 'fr_FR.utf8','fra');

require '../vendor/autoload.php';
use Kernel\Router\Router;
use Kernel\Router\Group;

$router = new Router($_GET['url']);


// Documentation
$router->add('GET', '/docs', "Docs#index", "Documentation", null);


// Auth in POST Method. Response : token
// INFO : To use API with routes protected by token, you need to send the response token in header of all requests : "X-Auth-Token"
$router->add('POST', '/auth', "Auth#check", "Authentication to the API");


// Group of routes
$router->group('/users', function (Group $group) {

    

}, null, [], [ // Params of routes in this group
    'id' => 'Int',
]);


$router->run();