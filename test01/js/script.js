$(document).ready(function(){//시작
  //내용

  //.depth2 숨기기
  $(".depth2").hide();
  //header .gnb > li 에 마우스 오버하면 header .gnb > li 의 자식 .depth2 > li 가 나옴
  $("header .gnb > li").hover(function(){
    $(this).find(".depth2").stop().fadeToggle();
  });


  //스와이퍼
  let slideW = $(".swiper").width();
 $(".swiper ul").width(slideW * 3);
 setInterval(function (){
  $(".swiper ul").delay(2500).animate({marginLeft:-slideW });
  $(".swiper ul").delay(2500).animate({marginLeft:-(slideW * 2) });
  $(".swiper ul").delay(2500).animate({marginLeft:0 });
 });
});//끝