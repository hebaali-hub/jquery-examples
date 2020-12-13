$(function () { 
    $(window).scroll(function(){
        if($(this).scrollTop()>=200){
            $('#scrolltop-id').fadeIn();
        }
        else{
            $('#scrolltop-id').fadeOut();
        }
    });
    $('#scrolltop-id').on('click',function(){
      $('html,body').animate({
          scrollTop:0
      },5000)
    });
 });