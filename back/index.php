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
$router->add('POST', '/auth', "Auth#check", "Connexion à l API");


// Group of routes
$router->group('/users', function (Group $group) {

    $group->add('POST', '', 'User#add', 'Ajouter un nouvel utilisateur', null, [], [], [
        '*username' => 'Alphanum',
        '*email' => 'Email',
        '*password' => 'String'
    ]);

    $group->add('GET', '', 'User#getAll', 'Récupérer les données des utilisateurs');

    $group->add('GET', '/:id', 'User#getById', 'Récupérer les données d un utilisateur');

    $group->add('PUT', '/:id', 'User#edit', 'Modification d un utilisateur', true, [], [
        'password' => 'String'
    ]);

    $group->add('GET', '/:id/playlist', 'Playlist#getAll', 'Récupérer les films de la playlist d un utilisateur');

    $group->add('POST', '/:id/playlist', 'Playlist#add', 'Ajouter un film dans sa playlist', true, [], [], [
        '*id_movie' => 'Int'
    ]);

    $group->add('DELETE', '/:id/playlist/:playlist_id', 'Playlist#delete', 'Supprimer un film de sa playlist');

    $group->add('GET', '/:id/movieviews', 'MovieViews#getAll', 'Récupérer les films de la liste des films vues d un utilisateur');

}, null, [], [ // Params of routes in this group
    'id' => 'Int',
]);


$router->run();