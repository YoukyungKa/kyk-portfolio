$(document).ready(function(){
  $(function(){
      $('.hamburger').click(function(){
        $('nav').stop().slideToggle();
        $('nav').css({"display":"flex"})
      });
    });
 $(window).resize(function(){
    if(window.innerWidth>=600){
        $('nav').show();
     }
 });
});