<?
//login_data.php
    include_once "db.php";


$id = $_GET['id'];
$password = $_GET['password'];

$query = "select * from hailli where id='$id'";
$result = sql($query);
$row = mysqli_fetch_array($result);

    if($row){    
        if($row['id'] === $id && $row['password'] === $password){
            @session_start();
            $_SESSION['id'] = $row['id'];
            $_SESSION['password'] = $row['password'];
            
            echo "<script>location.href='index.html'; </script>";
        }else{
           echo "<script>alert('패스워드가 틀렸습니다.'); history.back(); </script>";
        }
    }else{
        echo "<script>alert('아이디가 틀렸습니다.'); history.back(); </script>";
    }

?>
