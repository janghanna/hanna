$(function () {
    //start    
    $('header').load('inc_head_foot.html header .hailli', menu);
    $('footer').load('inc_head_foot.html footer .h_f');

    function menu() {
        const menu = document.querySelector('.menu-trigger');
        const nav = document.querySelector('nav');
        const gnb = document.querySelector('.gnb');

        menu.addEventListener('click', function () {
            menu.classList.toggle('active');
            nav.classList.toggle('active');
            gnb.classList.toggle('active');
        });
    }
    
      $('.hailli nav a').on('click',function(e){
                e.preventDefault(); 
                var type = $(this).attr('href'); 
                
                $('.hailli nav a').removeClass('active');
                $(this).addClass('active');
            });
    
     $('.hailli .gnb a').on('click',function(e){
                e.preventDefault(); 
                var type = $(this).attr('href'); 
                
                $('.hailli .gnb a').removeClass('active');
                $(this).addClass('active');
         
                history.pushState({page:type},'pageHistory','');
            });
    //end  

});
