$(function(){
   'use strict';
   (function transition_tocenter()
   {
      var v_W_width=$(window).width()/2;//width window vitual center
      var v_W_height=$(window).height()/2;//height window vitual center
      var C_div_width=$('div').width()/2;//half width
      var C_div_height=$('div').height()/2;//half height
      var E_Cpos1=v_W_width-C_div_width;
      var E_Cpos2=v_W_height-C_div_height;
      $('div').css({
      left:E_Cpos1,
      top:E_Cpos2
      });
   }());
   //when resize
   $(window).resize(function () { 
       transition_tocenter();
   });

  
});