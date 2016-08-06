
 /* jQuery Preloader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(document).ready(function() {

  /* BxSlider
    -----------------------------------------------*/
  (function (window, $) {
  'use strict';

  /* Ejecución del slider */
  function mainSlider() {
    $('.bxslider').bxSlider({
      pagerCustom: '#bx-pager',
      mode: 'fade',
      nextText: '',
      prevText: ''
    });
  }

  mainSlider();

  })(window, jQuery);

  /* Owl Carousel
  -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 3000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
    });
  });
  

  });

