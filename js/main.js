jQuery(document).ready(function( $ ) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});


$(function(){
    $('.bck').backToTop();
});




$('#mySkill').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%'} );


  wow = new WOW()
  wow.init();