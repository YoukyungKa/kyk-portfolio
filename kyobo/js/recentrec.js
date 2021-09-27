 $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"소설" },
        headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
      })
        .done(function( msg ) {

            console.log( msg.documents[1].title );
            console.log( msg.documents[1].thumbnail );
  



   


          // for문 (8개)
            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
                  $(".recombox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".recombox").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                  $(".recombox").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>")
                  $(".recombox").eq(i).append("<h6>"+msg.documents[i].price+"</h6>");


                  
                   
  
            }





        });


         $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"소설" },
        headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
      })
        .done(function( msg ) {

            console.log( msg.documents[1].title );
            console.log( msg.documents[1].thumbnail );
  



   


          // for문 (8개)
            var divs = document.getElementsByTagName('div');
            
            for(var i=0; i<divs.length; i++){
 
                  $(".itembox").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
                  $(".itembox").eq(i).append("<h3>"+msg.documents[i].title+"</h3>");
                  $(".itembox").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>")
                  $(".itembox").eq(i).append("<h6>"+msg.documents[i].price+"</h6>");


                  
                   
  
            }





        });











        













      