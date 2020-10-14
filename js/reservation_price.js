$(function sum_check() {

    //var sum3 = sum1 + sum2;

    $('.re input[name=size]').on('click', function () { //케이크사이즈
        var value1 = $(this).val();

        $('input[name=sum1]').val(value1);
        console.log(value1);
    });

    $('.re input[name=shape]').on('click', function () { //모양
        var value2 = $(this).val();
        $('input[name=sum2]').val(value2);
        console.log(value2);
    });

    $('.re input[name=sheet]').on('click', function () { //시트 맛
        var value3 = $(this).val();
        $('input[name=sum2]').val(value3);
        console.log(value3);
    });

    $('.re input[name=cream]').on('click', function () { //생크림모양
        var value4 = $(this).val();
        $('input[name=sum2]').val(value4);
        console.log(value4);
    });

    $('.re input[name=option]').on('click', function () { //옵션
        var value5 = $(this).val();
        $('input[name=sum2]').val(value5);
        console.log(value5);
    });

    function total() {
        var sum3 = document.getElementById('.re input[name=size]').value + document.getElementById('.re input[name=shape]').value;
//        document.getElementById('.re input[name=sum3]').value = sum;
    }

    //3자리 수마다 ',' 찍어주는 함수
    // function MoneySwap(mValue)
    // {
    //  var temp_str = String(mValue);
    //  for(var i = 0 , retValue = String() , stop = temp_str.length; i < stop ; i++)
    //  {
    //   retValue = ((i%3) == 0) && i != 0 ? temp_str.charAt((stop - i) -1) + "," + retValue : temp_str.charAt((stop - i) -1) + retValue;
    //  }
    //  return retValue;
    // }
});

window.addEventListener('DOMContentLoaded', init);
