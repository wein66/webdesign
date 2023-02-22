$(function(){
    //네비게이션 셋팅
    $('.gnb').hover(function(){
       $(this).find(".lnb").fadeToggle();  
    });

    //슬라이드
/**
 * $('.box').before('악');  append  prepend
 * $('.slidein').append('img');  
 * $('img').appendTo('.slidein')
 */

    setInterval(mySlide, 3000);

    function mySlide(){
       $('.slidein').animate({
           'left': '-1200px'
       }, 500, function(){
        //슬라이드인안에 있는 첫번째 이미지를 복제해서(clone) 슬라이드인의 뒤에 붙여라(appendTo)
          $('.slidein img:first-child')
          .clone()
          .appendTo('.slidein');
          $('.slidein img:first-child').remove();
          $('.slidein').css('left', 0);
       });
    }

    //tab
    $('.tab a').click(function(e){
       e.preventDefault();
       $('.tab a').removeClass('active'); //탭의 모든 active를 지운다.
       $(this).addClass('active'); //누른탭에 active를 추가한다.
       const myid = $(this).data("idx"); //누른탭에 data-idx값을 가져온다.
       $('.tab-content>div').removeClass('active'); //tab-content의 모든 active를 지운다.
       $("#"+myid).addClass('active'); //가져온 data-idx 값과 같은 tab-content에 active를 추가한다.
    }) 

    //공지사항
    $('.pop').click(function(e){
       e.preventDefault();
       $('.popup').fadeIn(500);
    });
    $('.close').click(function(){
       $('.popup').fadeOut(500);
    });

});  //jquery