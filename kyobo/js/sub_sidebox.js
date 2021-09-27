//sidebox1 api

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"자존감" },
    headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );







      // for문 (8개)
        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $(".sidebox1_box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $(".sidebox1_box_text").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
              $(".sidebox1_box_text").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
              $(".sidebox1_box_text").eq(i).append("<h6>"+msg.documents[i].price+"</h6>");

              
               

        }





    });


    //sidebox2 api


    
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"몽상" },
    headers:{Authorization: "KakaoAK e122b615115189256c7456f511ec3328"}
  })
    .done(function( msg ) {

        console.log( msg.documents[1].title );
        console.log( msg.documents[1].thumbnail );







      // for문 (8개)
        var divs = document.getElementsByTagName('div');
        
        for(var i=0; i<divs.length; i++){

              $(".sidebox2_box").eq(i).append("<img src='"+msg.documents[i].thumbnail+"'/>");
              $(".sidebox2_box_text").eq(i).append("<h5>"+msg.documents[i].title+"</h5>");
              $(".sidebox2_box_text").eq(i).append("<h6>"+msg.documents[i].authors+"</h6>");
              $(".sidebox2_box_text").eq(i).append("<h6>"+msg.documents[i].price+"</h6>");

              
               

        }





    });