window.addEventListener('DOMContentLoaded', function () {
    
        var userIdCheck = /^[A-Za-z0-9_\-]{5,20}$/; //저놈들만 허용하겠다
        var passwdCheck = /^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/;
        var nameCheck = /^[가-힣]{2,6}$/; 
        var phoneNumberCheck = /^01[0179][0-9]{7,8}$/;
 
        //유효성검사
        $('input[type=submit]').eq(1).on('click',funCheck);
        function funCheck(e){
            e.preventDefault();
            
            var name = $('input[name=name]').val(); 
            var phone = $('input[name=phone_number]').val(); 
            var cord = $('input[name=cord_number]').val(); 

        
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
