$(function () { 
      $('body .button').click(function () { 
          $('.button').css('display','none');
          $('body').css('background-image','url(../img/v7ja5RKS3FAc.png');
          $('body').css('background-size','100% 100%');
          $('.inframe').css('opacity','0')
          $('.kusok__kabachka').css('opacity','1');
          $('.perekladina__zabora').css('opacity','1'); 
          $('.inframe')[0].play(); 
          $('.kabachok1').css('transform','rotate(72000deg)');    
          $('.kabachok').css('opacity','1');
          $('.kabachok2').css('transform','rotate(72000deg)');
          $('.kabachok3').css('transform','rotate(72000deg)');
          $('.kabachok4').css('transform','rotate(72000deg)');
          $('*').css('cursor','url(../img/cursor.cur), pointer');
      });
  })