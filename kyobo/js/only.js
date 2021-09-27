$(function(){

    $(".iconbox_button > .ib1").mouseover(function () {
        $(".onlyiconbox").stop().hide();
        $(".onlyiconbox_wrap2").stop().show();
 

        $(".iconbox_button > li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
    });

    $(".iconbox_button > .ib2").mouseover(function () {
        $(".onlyiconbox").stop().hide();
        $(".onlyiconbox2").stop().hide();
        $(".onlyiconbox_wrap3").stop().show();
 

        $(".iconbox_button > li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
    });


     
    $(".iconbox_button > .ib3").mouseover(function () {
        $(".onlyiconbox").stop().hide();      
        $(".onlyiconbox2").stop().hide();
        $(".onlyiconbox3").stop().hide();
        $(".onlyiconbox_wrap4").stop().show();
 

        $(".iconbox_button > li").css({
            backgroundColor: "#fff",
            color: "#000"
        })
        $(this).css({
            backgroundColor: "#5e6b9e",
            color: "#fff"
        })
    });



    
    })









