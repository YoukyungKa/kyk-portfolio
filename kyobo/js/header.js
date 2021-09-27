$(function(){

  // header_banner 삭제
    $("#header_remove_banner").click(function(){
        $("#header_banner").stop().slideUp();
        $("#wrap").height(auto);
    });

  
    //매장안내 마우스 올리면 show

    $(".nbox2 > ul > li:first").mouseenter(function(){
      $("#header_store").show();
     
         
    }).mouseleave(function(){

    	$("#header_store").hide();

    });




    $("#header_store").hide();

 
    //회원혜택 마우스 올리면 show

    $(".nbox2 > ul > li:last").mouseover(function(){
         $("#header_benefit").show();

    }).mouseout(function() {
        $("#header_benefit").hide();



    });

    //헤더 광고

    $(".adbox > .prev").click(function(){
      $(".adbox > ul > li:last").prependTo(".adbox > ul");
      $(".adbox > ul").css({marginLeft:-220});
      $(".adbox > ul").stop().animate({ marginLeft: 0 });
  
      var i = $(".adbox > ul > li > a > img").attr("alt");
      $(this).siblings(".count").text(i + " / " + Number($(".adbox > ul > li:last").index() + 1));
    });
  
    $(".adbox > .next").click(function(){
      $(".adbox > ul").stop().animate({marginLeft:-220},function(){
        $(".adbox > ul > li:first").appendTo(".adbox > ul");
        $(".adbox> ul").css({ marginLeft: 0 });
        
        var i = $(".adbox> ul > li > a > img").attr("alt");
        $(this).siblings(".count").text(i + " / " + Number($(".adbox > ul > li:last").index() + 1));
      });
    });
  


  
//네이비색 배너 슬라이드다운 //

$(".header_nav_main_sub").mouseenter(function () {
  $(this).children(".header_nav_main_submenu").stop().slideDown(200);
}).mouseleave(function () {
  $(".header_nav_main_submenu").stop().slideUp(200);
});


$(".header_nav_first").mouseenter(function () {
  $(this).children(".header_nav_hamburger").stop().slideDown();
}).mouseleave(function () {
  $(".header_nav_hamburger").stop().slideUp();
});


//햄버거 메뉴 올리면 메뉴 없어지고 새로 뜸//
$(".header_nav_first , .ibox").mouseenter(function () {
  $("#header_nav_main > li").stop().hide();  
  $("#header_nav_main > li:last-child").stop().show();
  $("#header_nav_main > li:nth-last-child(2)").stop().show();
});


//마우스 떼면 메뉴 다시 생김//
$(".header_nav_first").mouseleave(function () {
  $("#header_nav_main > li").stop().show();
  $("#header_nav_main > li:last-child").stop().hide();
  $("#header_nav_main > li:nth-last-child(2)").stop().hide();
});






  


});

