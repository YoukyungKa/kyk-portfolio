$(function(){

    $.ajax({

      url: "./json/main3.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){
          
          for(var i in data){
            var title = data[i].title;
            var oprice = data[i].oprice;
            var nprice = data[i].nprice;
            var url = data[i].url;

            $(".contents > .ibox").eq(i).append( "<img src='img/main3/"+data[i].url+"'/>"); 
            $(".contents").eq(i).append('<span><a href="#">'+data[i].title+"</a><span>");      
            $(".contents").eq(i).append('<h5><a href="#">'+data[i].oprice+"</a></h5>");                             
            $(".contents").eq(i).append('<h3><a href="#">'+data[i].nprice+"</a></h3>");
            var count = Math.floor(Math.random() * 100);
            $(".contents").eq(i).append("<button>"+count+" REVIEWS"+"</button>"); 

          }

        }

      }

    });


  });


