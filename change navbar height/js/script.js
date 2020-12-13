$(function(){
  $(window).scroll(function () { 
    //   console.log( $(window).scrollTop())
    var wscroll=$(window).scrollTop();
    if(wscroll>440){

          $('header').removeClass('large').addClass('small');
    }
    else{
         $('header').removeClass('small').addClass('large');
    }
    // 
  });
});