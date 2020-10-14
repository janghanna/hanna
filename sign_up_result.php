<?
        include_once "db.php";

        $query = "create table hailli(
        num int(11) auto_increment,
        name varchar(20) not null,
        id varchar(20) not null, 
        password varchar(150) not null,
        confirm_password varchar(150) not null,
        address varchar(20),
        primary key (num)
        )";

        mysqli_query($db, $query);

        $name = $_GET['name'];
        $id = $_GET['id'];
        $password = $_GET['password'];
        $confirm_password = $_GET['confirm_password'];
        $address = $_GET['address'];


        $query = "insert into hailli(name, id, password, confirm_password, address) values('$name','$id','$password', '$confirm_password', '$address')"; //문자열

        sql($query);
        
//        mysqli_query($db,$query); //myAdmin 의 SQL의 실행버튼과 같다

//        echo $hobby."(string) <br>"; //문자열을 배열로 생성()

//        //배열 as 키 => 값
//        foreach($hobby as $key => $value){
//            echo $value;
//        }


//        echo $name;
//        echo $id;
//        echo $pw;
//        echo $pw2;
//        echo $city;
//        echo $summary;

    ?>
