window.addEventListener('DOMContentLoaded', function () {
    
        var userIdCheck = /^[A-Za-z0-9_\-]{5,20}$/; //저놈들만 허용하겠다
        var passwdCheck = /^(?=.*[a-z]|[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/;
        var nameCheck = /^[가-힣]{2,6}$/; 
        var phoneNumberCheck = /^01[0179][0-9]{7,8}$/;
 
        //유효성검사
        $('input[type=submit]').on('click',funCheck);
        function funCheck(e){
            e.preventDefault();
        
            var npw = $('input[name=new_password]').val(); 
            var npw2 = $('input[name=confirm_new_password]').val(); 

            if(!passwdCheck.test(npw)) {feedback('새 비밀번호를 입력해주세요 :-)','npw'); return;}
            if(!passwdCheck.test(npw2)) {feedback('새 비밀번호를 확인해주세요 :-)','npw2'); return;}
            if(npw != npw2){
               alert('비밀번호가 맞는지 확인하세요 :-(');
            return;
            }
            
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
