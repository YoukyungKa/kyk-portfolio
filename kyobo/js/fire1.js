

//국내도서에 마우스엔터//
        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query:"국내" },
          headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
        })
          .done(function( msg ) {
  
              console.log( msg.documents[1].title );
              console.log( msg.documents[1].thumbnail );
    
  
  
  
     
  
  
            // for문 (8개)
              var divs = document.getElementsByTagName('div');
              
              for(var i=0; i<divs.length; i++){
   
                    $(".foreignbook > .newbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                    $(".foreignbook > .newbox").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                    $(".foreignbook > .newbox").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
  
  
                    var str=msg.documents[i].contents;
                    var str2=str.substring(0,40);
  
                    $(".foreignbook > .newbox").eq(i).append("<p>"+str2+"</p>");
                     
    
              }
  
  
  
  
  
          });

          //외국도서에 마우스엔터//

          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"외국" },
            headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
          })
            .done(function( msg ) {
    
                console.log( msg.documents[1].title );
                console.log( msg.documents[1].thumbnail );
      
    
    
    
       
    
    
              // for문 (8개)
                var divs = document.getElementsByTagName('div');
                
                for(var i=0; i<divs.length; i++){
     
                      $(".koreabook > .newbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                      $(".koreabook > .newbox").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                      $(".koreabook > .newbox").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
    
    
                      var str=msg.documents[i].contents;
                      var str2=str.substring(0,40);
    
                      $(".koreabook > .newbox").eq(i).append("<p>"+str2+"</p>");
                       
      
                }
    
    
    
    
    
            });

            //eBook에 마우스엔터//

          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"ebook" },
            headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
          })
            .done(function( msg ) {
    
                console.log( msg.documents[1].title );
                console.log( msg.documents[1].thumbnail );
      
    
    
    
       
    
    
              // for문 (8개)
                var divs = document.getElementsByTagName('div');
                
                for(var i=0; i<divs.length; i++){
     
                      $(".ebook> .newbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                      $(".ebook > .newbox").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                      $(".ebook > .newbox").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
    
    
                      var str=msg.documents[i].contents;
                      var str2=str.substring(0,40);
    
                      $(".ebook > .newbox").eq(i).append("<p>"+str2+"</p>");
                       
      
                }
    
    
    
    
    
            });
  

        //sam에 마우스엔터//

            $.ajax({
              method: "GET",
              url: "https://dapi.kakao.com/v3/search/book?target=title",
              data: { query:"sam" },
              headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
            })
              .done(function( msg ) {
      
                  console.log( msg.documents[1].title );
                  console.log( msg.documents[1].thumbnail );
        
      
      
      
         
      
      
                // for문 (8개)
                  var divs = document.getElementsByTagName('div');
                  
                  for(var i=0; i<divs.length; i++){
       
                        $(".sam > .newbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                        $(".sam > .newbox").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                        $(".sam > .newbox").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
      
      
                        var str=msg.documents[i].contents;
                        var str2=str.substring(0,40);
      
                        $(".sam > .newbox").eq(i).append("<p>"+str2+"</p>");
                         
        
                  }
      
      
      
      
      
              });


             //음반기프트에 마우스엔터//
           
              $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query:"음반" },
                headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
              })
                .done(function( msg ) {
        
                    console.log( msg.documents[1].title );
                    console.log( msg.documents[1].thumbnail );
          
        
        
        
           
        
        
                  // for문 (8개)
                    var divs = document.getElementsByTagName('div');
                    
                    for(var i=0; i<divs.length; i++){
         
                          $(".giftbook > .newbox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                          $(".giftbook > .newbox").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                          $(".giftbook > .newbox").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
        
        
                          var str=msg.documents[i].contents;
                          var str2=str.substring(0,40);
        
                          $(".giftbook > .newbox").eq(i).append("<p>"+str2+"</p>");
                           
          
                    }
        
        
        
        
        
                });



//화제의 신간 마우스엔터 js

        $(function(){

      
          $(".newwrap > .title > ul > li:first").mouseenter(function(){
              $(".koreabook").stop().hide();
              $(".ebook").stop().hide();
              $(".sam").stop().hide();
              $(".giftbook").stop().hide();


              $(".foreignbook").stop().show();
              $(".foreignbook").css({"display" : "flex"});
         


          });


          
      
          $(".newwrap > .title > ul > li:nth-child(2)").mouseenter(function(){
            $(".foreignbook").stop().hide();
            $(".ebook").stop().hide();
            $(".sam").stop().hide(); 
            $(".giftbook").stop().hide();
            
            

            $(".koreabook").stop().show();


        });


          
          $(".newwrap > .title > ul > li:nth-child(3)").mouseenter(function(){
            $(".koreabook").stop().hide();
            $(".foreignbook").stop().hide();
            $(".giftbook").stop().hide();
            $(".sam").stop().hide();

            $(".ebook").stop().show();
            $(".ebook").css({"display" : "flex"});


        });



       
          $(".newwrap > .title > ul > li:nth-child(4)").mouseenter(function(){
            $(".ebook").stop().hide();
            $(".foreignbook").stop().hide();
            $(".koreabook").stop().hide();
            $(".giftbook").stop().hide();

            $(".sam").stop().show();
            $(".sam").css({"display" : "flex"});


        });



     
           $(".newwrap > .title > ul > li:last").mouseenter(function(){
            $(".koreabook").stop().hide();
            $(".foreignbook").stop().hide();
            $(".sam").stop().hide();
            $(".ebook").stop().hide();

            $(".giftbook").stop().show();
            $(".giftbook").css({"display" : "flex"});


        });




        });