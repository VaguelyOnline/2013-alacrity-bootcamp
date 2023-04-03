<?php
    
    // extract the parameters from the request
    $title = $_GET['title'];
    $poster = $_GET['poster'];
    // $actors = $_GET['actors'];
    // $directors = $_GET['directors'];

    // validate the parameters?
    // YES!
    // CS - convenience / UI
    $titleLength = mb_strlen($title);
    if ($titleLength == 0 || $titleLength > 20)
        echo 'Failed validation!';

    // Write the record to the DB
    $db = new mysqli('localhost', 'movieuser', 'password', 'movies');
    $sql = "INSERT into movies (name, image, description) values ('$title', '$poster', '')";
    $result = $db->query($sql);


?>
