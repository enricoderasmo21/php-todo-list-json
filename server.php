<?php

$string = file_get_contents('todos.json');

$todos = json_decode($string);

header('Content-Type: application/json');


echo json_encode($todos);
