<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="css/bootstrap-hn.css" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Cafe__HAILLI</title>
    <link rel="stylesheet" href="css/sign_up.css" type="text/css">
    <link rel="icon" href="img/cake.png">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="js/head_foot.js"></script>
    <script src="js/sign_up.js"></script>
</head>

<body>
    <!-----헤더고정----->
    <header></header>

    <script></script>
    <main>
        <div class="sign_up">
            <form name="join">
                <div class="form">
                    <h1>
                        회원가입
                    </h1>
                    <div class="inp">
                        <p><input type="text" required placeholder="아이디" name="id"></p>
                        
                        <p><input type="password" required placeholder="비밀번호" name="password"></p>
                        
                        <p><input type="password" required placeholder="비밀번호 확인" name="confirm_password"></p>
                        
                        <p><input type="text" required placeholder="이름" name="name"></p>
                        
                        <p>
                            <input type="text" required placeholder="01012345678" name="phone_number" class="text type" maxlength="11">
                            <input type="submit" value="인증번호 받기">
                        </p>
                        
                        <p><input type="text" required placeholder="인증번호" name="cord_number"></p>
                        
                        <p><input type="text" required placeholder="주소" name="address"></p>
                        
                        <p><input type="submit" value="다음"></p>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <!-----풋바고정----->
    <footer></footer>
    <!-----풋바 끝----->

</body>

</html>
