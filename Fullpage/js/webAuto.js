$(function(){
    //교보문고
    $("#kyobobox").mouseenter(function(){
        $("#kyobo > li").stop().animate({marginTop:"-1025px"},8000)
    }).mouseleave(function(){
        $("#kyobo > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //레스토랑
    $("#resbox").mouseenter(function(){
        $("#res > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#res > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //나사
    $("#nasabox").mouseenter(function(){
        $("#nasa > li").stop().animate({marginTop:"-850px"},8000)
    }).mouseleave(function(){
        $("#nasa > li").stop().animate({marginTop:"0px"},3000)
    })
    
    //쇼핑몰
    $("#foodbox").mouseenter(function(){
        $("#food > li").stop().animate({marginTop:"-1150px"},8000)
    }).mouseleave(function(){
        $("#food > li").stop().animate({marginTop:"0px"},3000)
    })
});