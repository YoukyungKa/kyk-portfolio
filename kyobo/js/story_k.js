$(function(){

    $.ajax({

      url: "./json/story_k.json",

      dataType: "json",

      success : function(data){

        if(data.length>0){



          for(var i in data){
           
            var span = data[i].span;
            var p = data[i].p;
            var url = data[i].url;

            $(".cast").eq(i).append( '<a href="#">'+"<img src='img/"+data[i].url+"'/>"+'</a>'); 


          


            $(".text").eq(i).append('<span><a href="#">'+data[i].span+"</a><span>");      

            $(".text").eq(i).append('<p><a href="#">'+data[i].p+"</a></p>");                             

            
          }

        }

      }

    });


  });


