jQuery(document).ready(function () {

    /* Logo Slider */
  var windowWidth = jQuery(window).width();
  function introSlider() {
    var $tvslider = jQuery('.logo-slider-row');
    var tvslideCount = $tvslider.children().length;
    if (windowWidth >= 1024) {
      if (tvslideCount > 3) {
        $tvslider.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          speed: 5000,
          dots: false,
          arrows: false,
          variableWidth: true,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 100,
          autoplay: true,
          autoplaySpeed: 0,
          centerMode: true,
          cssEase: 'linear',
        });
      }
    } else {
      $tvslider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
          speed: 5000,
          dots: false,
          arrows: false,
          variableWidth: true,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 100,
          autoplay: true,
          autoplaySpeed: 0,
          centerMode: true,
          cssEase: 'linear',
          centerMode: true,
      });
    }
  }
  introSlider();

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      introSlider();

    }
  });
/* End of logo slider */
    
/* Testimonial Slider */
    jQuery(".home-banner-slide-main").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      swipeToSlide: true,
      touchThreshold: 100,
      infinite: false,
      speed: 1000,
      dots: true,
      arrows: true,
        adaptiveHeight:true,
      infinite: true,
      variableWidth:true,
    prevArrow: '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
    nextArrow: '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><i class="fa-solid fa-circle-chevron-right"></i></div>',
    });
});
