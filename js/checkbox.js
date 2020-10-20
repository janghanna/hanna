$(function () {
    //체크박스
    $("#allCheck").click(function () { //전체선택 클릭
        if ($("#allCheck").prop("checked")) {
            //전체선택이 체크면
            $("input[name=choice]").prop("checked", true); //다 체크 ㅇㅇ
        } else { //아니면 체크ㄴㄴ
            $("input[name=choice]").prop("checked", false);
        }
    })
    //수량 count_price의 숫자가 바뀌면
    //수량에따른 금액 item_price 가 바뀐다.
    //총 주문금액 total_price 수량에따른금액 item_price의 총 합
    
});
// window.addEventListener('DOMContentLoaded', init);
