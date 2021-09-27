$(function(){

    //order 숫자 증가
    $("#purchase_inf_pay_num_plus").click(function(){
        var i = $(this).siblings("input").val();
        i++;
        $(this).siblings("input").val(i);
    
    });

    //order 숫자 감소

    $("#purchase_inf_pay_num_minus").click(function(){
       var i=$(this).siblings("input").val();
       i--;
       if(i <=0) {
         alert("최소 주문량은 1개입니다.");
         i=1;

       } 
        $(this).siblings("input").val(i);        
    });










});