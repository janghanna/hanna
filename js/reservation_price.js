$(function sum_Check() {

    var value1 =0;
    var value2 =0;
    var value3 =0;
    var value4 =0;
    var value5 =0;

    $('input[name=size]').on('click', function () { //케이크사이즈
        
        if($(this).prop('checked')){ //prop = 체크유무 확인해주는
            value1 += parseInt($(this).val()); //parseInt = 값을 더해주는 
        }else{
            value1 -= parseInt($(this).val());
        }
        $('input[name=sum1').val(value1);
        console.log(value1);
        
        sum();

        // $('input[name=size]').each(function(){
        //     console.log($(this).val());
        // });
        
    });

    
    $('input[name=shape]').on('click', function () { //모양
        if($(this).prop('checked')){
            value2 += parseInt($(this).val());
        }else{
            value2 -= parseInt($(this).val());
        }
        $('input[name=sum2]').val(value2+value3+value4+value5);
        console.log(value2);
        sum();
    });

    
    $('input[name=sheet]').on('click', function () { //시트 맛
        if($(this).prop('checked')){
            value3 += parseInt($(this).val());
        }else{
            value3 -= parseInt($(this).val());
        }
        $('input[name=sum2]').val(value2+value3+value4+value5);
        console.log(value3);
        sum()
    });

    
    $('input[name=cream]').on('click', function () { //생크림모양
        if($(this).prop('checked')){
            value4 += parseInt($(this).val());
        }else{
            value4 -= parseInt($(this).val());
        }
        $('input[name=sum2]').val(value2+value3+value4+value5);
        console.log(value4);
        sum();
    });
    
    $('input[name=option]').on('click', function () { //옵션
       if($(this).prop('checked')){
           value5 += parseInt($(this).val());
       }else{
           value5 -= parseInt($(this).val());
       }
        $('input[name=sum2]').val(value2+value3+value4+value5);
        console.log(value5);
        sum();
    });

    function sum(){ //총결제금액 = 상품금액+옵션
        var result = 0;
        var a = $('input[name=sum1]').val();
        var b = $('input[name=sum2]').val();
        if(a == ''){
            result = parseInt(b);
        }else{
            result = parseInt(a)+parseInt(b);
        }
        result = numberFormat(result);
        $('input[name=sum3]').val(result);
    }

    function numberFormat(inputNumber) {
        return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    }
    
    // var si = $('input[name=size]').val();
    // var aa = 0;
    // for (var i = 0; si.length > i; i++){
    //     si[i].addEventListener('click', function(){
    //         if($(this).checked && aa <1){
    //             $(this).classList.toggle('active');
    //             aa++;
    //         }else{
    //             if($(this).classList.contains('active')){
    //                 aa--;
    //                 $(this).classList.remove('active');
    //             }
    //             $(this).checked = false;
    //         }
    //     });
    //     sum_Check();
    // }
     
});

window.addEventListener('DOMContentLoaded', init);
