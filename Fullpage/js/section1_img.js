
 var imgArray = new Array();
        imgArray[0] = "img/squid.png";
        imgArray[1] = "img/pretzel.png";
        imgArray[2] = "img/squid.png";
    
 
        function showImage() {
            var imgNum = Math.round(Math.random()*2);
            var objImg = document.getElementById("introImg");
            objImg.src = imgArray[imgNum];
            setTimeout("showImage()", 1000);
        }
