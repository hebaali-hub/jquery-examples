$(function(){
   var Vnav=$('nav');
   var Vimg=$('.container img');
   $(window).scroll(function () { 
      if($(window).scrollTop() >= Vimg.outerHeight()) {//outerheight if padding,margin
        Vnav.addClass('sticky_nav').slideDown();
      }
      else{
          Vnav.removeClass('sticky_nav');
      }
   });
});