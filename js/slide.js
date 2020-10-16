$(function () {
        var bnData = [];
        var bnMdata = [];
        var bnLen = $('.bn').length;
        $('.bn').each(function(i){
            bnData.push($(this).attr('src'));
            bnMdata.push(bnData[i].replace('.jpg','_m.jpg')); 
            //모바일 or PC화면 바뀔때 .bn이라는 이미지의 이름 .jpg를 _m.jpg로 바꾼다.
        });
    

    
    $('.imgs figure').slick({ //슬라이드 넘어가게
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
    });
    
    
    function aa() {
        console.log('aa');
        
        //복사본(클론) 지우기
        if ($(window).width() > 480) {
        
            $('.slick-slide').each(function(i){
                if(i==0){
                    $(this).find('img').attr('src',bnData[1]);
                }else{
                    if(i<=bnLen){
                        $(this).find('img').attr('src',bnData[i-1]);//0 1 2
                    }else{
                        $(this).find('img').attr('src',bnData[i-(bnLen+1)]); //0 1 2
                    }
                }

            });
        }else{
            
            $('.slick-slide').each(function(i){
                if(i==0){
                    $(this).find('img').attr('src',bnMdata[1]);
                }else{
                    if(i<=bnLen){
                        $(this).find('img').attr('src',bnMdata[i-1]);//0 1 2
                    }else{
                        $(this).find('img').attr('src',bnMdata[i-(bnLen+1)]); //0 1 2
                    }
                }

            });
        }


    }
    aa();
    $(window).resize(aa);

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



});
