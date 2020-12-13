$(function(){
   'use strict';
   var max_char=100;
   $('textarea').keyup(function () { 
      var len=$(this).val().length;
    //   console.log(len);
      var vremains=max_char-len;
    //   console.log(vremains);
      $('#char').text(vremains);
   });
})