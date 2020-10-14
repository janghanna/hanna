<?php
    @session_start();
    if(isset($_SESSION['id'])){
        echo "<script>alert('이미로그인되었습니다.'); history.back(); </script>";
    }    
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="css/bootstrap-hn.css" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>cafe. HAILLI </title>
    <link rel="stylesheet" href="css/login.css" type="text/css">
    <link rel="icon" href="img/cake.png">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="js/head_foot.js"></script>

</head>

<body>
    <!-----헤더고정----->
    <header></header>

    <script></script>

    <main>
        <div class="login">
            <form name="member">
                <div class="form">
                    <h1>
                        회원 로그인
                    </h1>
                    
                    <div class="inp">
                      <!--회원-->
                       
                        <p><input type="text"  name="id" required placeholder="아이디"></p>
                        <p><input type="text" name="password" required placeholder="패스워드"></p>
                        <p><a href="#" class="loginBtn"><input type="submit" value="로그인"></a></p>
                      
                    </div>
                    
                    <div class="find">
                        <a href="id_find.html">아이디찾기</a>
                        <a href="password_find.html">비밀번호찾기</a>
                        <a href="sign_up.html">회원가입</a>
                    </div>
                </div>
            </form>
        </div>
    </main>
    
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <script>
       
            var loginBtn = document.querySelector('.loginBtn');
            loginBtn.addEventListener('click', login);
       


        function login(e) {
            e.preventDefault();

            var idValue = document.querySelector('input[name=id').value;
            var pwValue = document.querySelector('input[name=password]').value;

            if(idValue==''){
                alert('아이디를 입력해주세요.');
            }else if(pwValue==''){
                alert('비밀번호가 틀렸습니다ㅠㅠ');
            }else{
                member.action = 'login_data.php';
                member.submit();
            }

        }
    </script>

    <!-----풋바고정----->
     <footer></footer>
    <!-----풋바 끝----->

</body></html>