$(function(){

//오늘의 책 우측 js
$(".prev").click(function (){
   
    $(".right li:last").prependTo(".right");

    $(".right").css("margin-left", -1000);
    
    $(".right").stop().animate({marginLeft:0},800)

   
    
});

$(".next").click(function(){

    $(".right").stop().animate({marginLeft:-1000},50, function(){

       $(".right li:first").appendTo(".right");

       $(".right").css({marginLeft:0},50);


    

   

  });

 });



//파란색 배너 js//

$(".prev").click(function (){
   
  $(".todaytop1 > div:last").prependTo(".todaytop1");

  $(".todaytop1").css("margin-left", 0);
  
  $(".todaytop1").stop().show({marginLeft:0},800)

 
  
});

$(".next").click(function(){

  $(".todaytop1").stop().animate({marginLeft:0},50, function(){

     $(".todaytop1 > div:first").appendTo(".todaytop1");

     $(".todaytop1").css({marginLeft:0},50);


  

 

});

});




//타이틀 마우스엔터

$(".title > ul > li:first").mouseenter(function(){
  $(".today").stop().hide();
  $(".todayjs2").stop().show();
  $(".todayjs3").stop().hide();


});



$(".title > ul > li:nth-child(2)").mouseenter(function(){
  $(".today").stop().hide();
  $(".todayjs3").stop().show();
  $(".todayjs2").stop().hide(); 



});


$(".title > ul > li:last-child").mouseenter(function(){
  $(".todayjs3").stop().hide();
  $(".today").stop().show();
  $(".todayjs2").stop().hide();




});


















});