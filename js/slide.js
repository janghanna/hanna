$(function () {

    $('.imgs figure').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
    });
    
//   var mq = window.matchMedia("screen and(max-width:480px)");
//   mq.addLiistener(res);
//   function res(e){
//       if(e.matches){
//           console.log('모바일');
//           $('.bn').attr('src','img/banner_m.jpg');
//       }else{
//           console.log('pc');
//       }
//   }
//   res(mq);
    
     if($(window).width() <= 480){
         $('.bn').eq(1).attr('src','img/banner_m.jpg');
         $('.bn').eq(3).attr('src','img/banner_m.jpg');
         $('.bn').eq(2).attr('src','img/banner2_m.jpg');
     }

});