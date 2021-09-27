$(document).ready(function(){
    $(function(){
        $('.hamburger').click(function(){
          $('#navbox2').stop().slideToggle();
         
        });
      });
   $(window).resize(function(){
      if(window.innerWidth>=600){
          $('#navbox >nav').show();
       }
   });
  });