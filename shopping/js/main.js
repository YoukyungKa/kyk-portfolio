$(function(){
  $('nav >ul >li').mouseover(function(){
   $(this).children('.detail').stop().slideDown(400);
 }).mouseout(function(){
   $('.detail').stop().slideUp(400);
 });
});


 $(function(){

  $.ajax({

    url: "./json/main.json",

    dataType: "json",

    success : function(data){

      if(data.length>0){



        for(var i in data){
          var title = data[i].title;
          var oprice = data[i].oprice;
          var nprice = data[i].nprice;
          var url = data[i].url;

          $(".box").eq(i).append( '<a href="#">'+"<img src='img/main/"+data[i].url+"'/>"+'</a>'); 

        }

      }

    }

  });


});