window.addEventListener('DOMContentLoaded', function () {
    
        var userIdCheck = /^[A-Za-z0-9_\-]{5,20}$/; //저놈들만 허용하겠다
        var passwdCheck = /^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/;
 
        //유효성검사
        $('input[type=submit]').eq(0).on('click',funCheck);
        function funCheck(e){
            e.preventDefault();
            
            var id = $('input[name=id]').val(); //val = value
            var pw = $('input[name=password]').val(); 

            if(!userIdCheck.test(id)) {feedback('아이디 또는 비밀번호가 맞지 않습니다 :-(','id'); return;}
            if(!passwdCheck.test(pw)) {feedback('아이디 또는 비밀번호가 맞지 않습니다 :-(','pw'); return;}
            
//            if(pw != pw2){
//               alert('비밀번호가 맞는지 확인하세요 :-(');
//            return;
//            }
            
            function feedback(msg,el){
                alert(msg);
                $('input[name='+el+']').val('');
                $('input[name='+el+']').focus();
                //focus를 써서 잘못쓴 곳에 커서
            }
           
            member.action = 'login_data.php';
            join.submit();
            
        }
});
//var pw1 = $('pw1').val();
//var pw2 = $('pw2').val();
//
//if(pw1 == pw2){같으면 실행}
//if(pw1 != pw2){같지않으면 실행}
