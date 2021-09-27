$(function(){

    $.ajax({

      url: "./json/main2.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){
          for(var i in data){
            var title = data[i].title;
            var oprice = data[i].oprice;
            var nprice = data[i].nprice;
            var url = data[i].url;

            $(".boxx > .ibox").eq(i).append( "<img src='img/main2/"+data[i].url+"'/>"); 
            $(".boxx").eq(i).append('<span><a href="#">'+data[i].title+"</a><span>");      
            $(".boxx").eq(i).append('<h5><a href="#">'+data[i].oprice+"</a></h5>");                             
            $(".boxx").eq(i).append('<h3><a href="#">'+data[i].nprice+"</a></h3>");
            var count = Math.floor(Math.random() * 100);
            $(".boxx").eq(i).append("<button>"+count+" REVIEWS"+"</button>"); 

          }

        }

      }

    });


  });