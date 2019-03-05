<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET,POST,DELETE,PUT,OPTIONS");
header("Access-Control-Allow-Headers: X-Auth-Token, Content-Type");
header("Access-Control-Allow-Credentials: true");

require '../index.php';
