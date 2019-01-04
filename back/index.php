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
$router->group('/examples', function (Group $group) {

    // Simple GET Method
    $group->add('GET', '', "Example#getAll", "Get all Examples");

    // GET Method with params
    $group->add('GET', '/:slug-:id', "Example#index", "Index of Example", null, [], [
        'slug' => 'String'
    ]);

    // PUT (UPDATE) Method with param
    $group->add('PUT', '/:id', "Example#update", "Update an Example", true, [
        '>' => 2 // Need the role superior to 2
    ]);

    // POST (INSERT) Method
    $group->add('POST', '', "Example#add", "Add a new Example", true, [
        '=' => 3 // Need the role equal to 3
    ], [], [
        '*email' => '',
        '*password' => 'String',
        'name' => 'String',
        'age' => 'Int',
    ]);

    // DELETE Method
    $group->add('DELETE', '/:id', "Example#delete", "Delete an Example", true, [
        '>' => 4, // Need the role superior to 4
        '<=' => 7 // Need the role inferior or equal to 7
    ]);


}, null, [], [ // Params of routes in this group
    'id' => 'Int',
]);


$router->run();