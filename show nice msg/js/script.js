$(function(){
   'use strict';
   $('.btn1').click(function (e) { 
      e.preventDefault();
      show_div_msg('the content is saved');

      
   });
   $('.btn2').click(function (e) { 
      e.preventDefault();
      show_div_msg('the content is delete');
      
   });
   $('.btn3').click(function (e) { 
      e.preventDefault();
       show_div_msg('the content is change');
      
   });
   function show_div_msg(text){
         $('div').html('<h4>'+text+'</h4>').slideDown().delay(1500).slideUp();
   }
});