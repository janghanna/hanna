$(function () {
    // $('.cark_table input[name=choice]').click(function(){
    //     var chk = $(this).attr('checked');
    //     if(chk) $('.cart_table input[name=choice]').prop('checked, true');
    //     else $('.cart_table input[name=choice]').prop('checked',false);
    // });
    
    $("#allCheck").click(function(){ //전체선택 클릭
        if($("#allCheck").prop("checked")){ 
            $("input[type=checkbox]").prop("checked",true);
        }else{
            $("input[type=checkbox]").prop("ckecked",false);
        }
    })    
});
// window.addEventListener('DOMContentLoaded', init);