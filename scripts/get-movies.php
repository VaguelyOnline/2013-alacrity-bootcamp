<?php
    $db = new mysqli('localhost', 'movieuser', 'password', 'movies');
    $results = $db->query('SELECT * from movies');
    echo json_encode($results->fetch_all(MYSQLI_ASSOC));
?>