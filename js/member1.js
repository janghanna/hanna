window.addEventListener('DOMContentLoaded', function () {
    
        var passwdCheck = /^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/;
        var nameCheck = /^[가-힣]{2,6}$/; 
        var phoneNumberCheck = /^01[0179][0-9]{7,8}$/;
 
        //유효성검사
        $('input[type=submit]').eq(1).on('click',funCheck);
        function funCheck(e){
            e.preventDefault();
            
            var pw = $('input[name=password]').val(); 
            var pw2 = $('input[name=confirm_password]').val(); 
            var name = $('input[name=name]').val(); 
            var phone = $('input[name=phone_number]').val(); 

            if(!passwdCheck.test(pw)) {feedback('비밀번호를 입력해주세요 :-)','pw'); return;}
            if(!passwdCheck.test(pw2)) {feedback('비밀번호를 확인해주세요 :-)','pw2'); return;}
            if(pw != pw2){
               alert('비밀번호가 맞는지 확인하세요 :-(');
            return;
            }
            
            if(!nameCheck.test(name)) {feedback('이름을 입력해주세요 :-)','name'); return;}
            if(!phoneNumberCheck.test(phone)) {feedback('번호를 입력해주세요 :-)','phone'); return;}
            
            function feedback(msg,el){
                alert(msg);
                $('input[name='+el+']').val('');
                $('input[name='+el+']').focus();
                //focus를 써서 잘못쓴 곳에 커서
            }
           
            join.action = "http://naver.com";
            join.submit();
            
        }
});
//var pw1 = $('pw1').val();
//var pw2 = $('pw2').val();
//
//if(pw1 == pw2){같으면 실행}
//if(pw1 != pw2){같지않으면 실행}
