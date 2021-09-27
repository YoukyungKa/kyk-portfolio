  $(function(){
//메뉴 1 js
    $( '.main_intro > ul > li:nth-child(2)' ).click( function() {

      $( 'html, body' ).animate( { scrollTop : 3300 }, 200 );

      return false;



    } );

    

    $( '.main_intro > ul > li:last' ).click( function() {

      $( 'html, body' ).animate( { scrollTop : 4200 }, 200 );

      return false;



    } );

//메뉴2 js

    $( '.main_intro2 > ul > li:nth-child(1)' ).click( function() {

        $( 'html, body' ).animate( { scrollTop :1300}, 200 );
  
        return false;
  
  
  
      } );
  
      
  
      $( '.main_intro2 > ul > li:last' ).click( function() {
  
        $( 'html, body' ).animate( { scrollTop : 4150 }, 200 );
  
        return false;
  
  
  
      } );
  

//메뉴3 js


$( '.main_intro3 > ul > li:nth-child(1)' ).click( function() {

    $( 'html, body' ).animate( { scrollTop :1300}, 200 );

    return false;



  } );

  

  $( '.main_intro3 > ul > li:nth-child(2)' ).click( function() {

    $( 'html, body' ).animate( { scrollTop :3000}, 200 );

    return false;



  } );





      


  });
