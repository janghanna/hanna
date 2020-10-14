<?
    //db.php
    $db = mysqli_connect('localhost','root','1234','project');

    function sql($query){
        global $db;
        return mysqli_query($db,$query);
    }
?>