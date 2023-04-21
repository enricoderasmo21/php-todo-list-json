<?php

if(isset($_POST['newTodo'])){

    $newTodo = array();
    $newTodo['name'] = $_POST['newTodo'];
    $newTodo['done'] = false;

    $todosJson = file_get_contents('todos.json');

    $todos = json_decode($todosJson);

    $todos[] = $newTodo;

    $newTodoJson = json_encode($todos);

    file_put_contents('todos.json', $newTodoJson);

} else{

    $string = file_get_contents('todos.json');
    
    $todos = json_decode($string);

    
    header('Content-Type: application/json');
    
    echo json_encode($todos);
}

