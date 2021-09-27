
//기본 bstbook //

$.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"어린이동화" },
        headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
      })
        .done(function( msg ) {

            console.log( msg.documents[1].title );
            console.log( msg.documents[1].thumbnail );
  



   


          // for문 (8개)
            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
                  $(".bstbook").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".bstbook").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                  $(".bstbook").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
                  


                  
                   
  
            }





        });

//교보문고종합 api//

        $.ajax({
          method: "GET",
          url: "https://dapi.kakao.com/v3/search/book?target=title",
          data: { query:"교보문고" },
          headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
        })
          .done(function( msg ) {
  
              console.log( msg.documents[1].title );
              console.log( msg.documents[1].thumbnail );
    
  
  
  
     
  
  
            // for문 (8개)
              var divs = document.getElementsByTagName('div');
              
              for(var i=0; i<divs.length; i++){
   
                    $(".contents2 > .bstbook").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                    $(".contents2 > .bstbook").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                    $(".contents2 > .bstbook").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
  
  
                    
                     
    
              }
  
  
  
  
  
          });

//인터넷일간 api//

          $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"인터넷" },
            headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
          })
            .done(function( msg ) {
    
                console.log( msg.documents[1].title );
                console.log( msg.documents[1].thumbnail );
      
    
    
    
       
    
    
              // for문 (8개)
                var divs = document.getElementsByTagName('div');
                
                for(var i=0; i<divs.length; i++){
     
                      $(".contents3 > .bstbook").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                      $(".contents3 > .bstbook").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                      $(".contents3 > .bstbook").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
    
    
                      
                       
      
                }
    
    
    
    
    
            });
  
  
   //외국도서 api//

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
       
                        $(".contents4 > .bstbook").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                        $(".contents4 > .bstbook").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                        $(".contents4 > .bstbook").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
      
      
                        
                         
        
                  }
      
      
      
      
      
              });



              //eBook api//  
              $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: { query:"eBook" },
                headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
              })
                .done(function( msg ) {
        
                    console.log( msg.documents[1].title );
                    console.log( msg.documents[1].thumbnail );
          
        
        
        
           
        
        
                  // for문 (8개)
                    var divs = document.getElementsByTagName('div');
                    
                    for(var i=0; i<divs.length; i++){
         
                          $(".contents5 > .bstbook").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                          $(".contents5 > .bstbook").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                          $(".contents5 > .bstbook").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
        
        
                          
                           
          
                    }
        
        
        
        
        
                });

//오디오북 api//

                $.ajax({
                  method: "GET",
                  url: "https://dapi.kakao.com/v3/search/book?target=title",
                  data: { query:"오디오북" },
                  headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
                })
                  .done(function( msg ) {
          
                      console.log( msg.documents[1].title );
                      console.log( msg.documents[1].thumbnail );
            
          
          
          
             
          
          
                    // for문 (8개)
                      var divs = document.getElementsByTagName('div');
                      
                      for(var i=0; i<divs.length; i++){
           
                            $(".contents6 > .bstbook").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                            $(".contents6 > .bstbook").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                            $(".contents6 > .bstbook").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
          
          
                            
                             
            
                      }
          
          
          
          
          
                  });

 
//sam api//
                   
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
             
                              $(".contents7 > .bstbook").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                              $(".contents7 > .bstbook").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                              $(".contents7 > .bstbook").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
            
            
                              
                               
              
                        }
            
            
            
            
            
                    });



                   

//베스트셀러 nav mouseenter js//
      


$(function(){

    //교보문고종합 mouseenter //  
  $(".bestleft > .title > ul > li:first").mouseenter(function(){
      $(".contents").stop().hide();
      $(".contents3").stop().hide();  
      $(".contents4").stop().hide();  
      $(".contents5").stop().hide();  
      $(".contents6").stop().hide();  
      $(".contents7").stop().hide();  
    


      $(".contents2").stop().show();
      $(".contents2").css({"display" : "flex"});
 


  });


  
 //인터넷일간 mouseenter //
  $(".bestleft > .title > ul > li:nth-child(2)").mouseenter(function(){
    $(".contents").stop().hide();
    $(".contents2").stop().hide();
    $(".contents4").stop().hide();  
    $(".contents5").stop().hide();  
    $(".contents6").stop().hide();  
    $(".contents7").stop().hide();  
    
  
    

    $(".contents3").stop().show();
    $(".contents3").css({"display" : "flex"});


});


  //외국도서 mouseenter //
  $(".bestleft > .title > ul > li:nth-child(3)").mouseenter(function(){
    $(".contents").stop().hide();
    $(".contents2").stop().hide();
    $(".contents3").stop().hide();
    $(".contents5").stop().hide();  
    $(".contents6").stop().hide();  
    $(".contents7").stop().hide();  
  

    $(".contents4").stop().show();
    $(".contents4").css({"display" : "flex"});


});


//eBook mouseenter //

  $(".bestleft > .title > ul > li:nth-child(4)").mouseenter(function(){
    $(".contents").stop().hide();  
    $(".contents2").stop().hide();  
    $(".contents3").stop().hide();  
    $(".contents4").stop().hide();  
    $(".contents6").stop().hide();  
    $(".contents7").stop().hide();  

    $(".contents5").stop().show();
    $(".contents5").css({"display" : "flex"});


});



//오디오북 mouseenter //
   $(".bestleft > .title > ul > li:nth-child(5)").mouseenter(function(){
    $(".contents").stop().hide();  
    $(".contents2").stop().hide();  
    $(".contents3").stop().hide();  
    $(".contents4").stop().hide();  
    $(".contents5").stop().hide();  
    $(".contents7").stop().hide();  

    $(".contents6").stop().show();
    $(".contents6").css({"display" : "flex"});


});


//sam mouseenter //


$(".bestleft > .title > ul > li:last").mouseenter(function(){
  $(".contents").stop().hide();  
  $(".contents2").stop().hide();  
  $(".contents3").stop().hide();  
  $(".contents4").stop().hide();  
  $(".contents5").stop().hide();  
  $(".contents6").stop().hide();  

  $(".contents7").stop().show();
  $(".contents7").css({"display" : "flex"});


});




/*베스트셀러 오른쪽 박스 */
         $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"어린이동화" },
        headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
      })
        .done(function( msg ) {

            console.log( msg.documents[1].title );
            console.log( msg.documents[1].thumbnail );
  



   


          // for문 (8개)
            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
                  $(".bestsidebox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".bestsidebox").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                  $(".bestsidebox").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");


                  
                   
  
            }





        });



       $(function(){

        $(".bestright > .box > span").mouseenter(function(){
          $(".bestside2").stop().hide();
       
    
    
          $(".bestside").stop().show();
        
     
    
    
      });




       });



       $(".bestright > .box > p").mouseenter(function(){
        $(".bestside").stop().hide();
     
  
  
        $(".bestside2").stop().show();
      
   
  
  
    });




     });













      