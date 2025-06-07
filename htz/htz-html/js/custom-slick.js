jQuery(document).ready(function () {
  /* home banner Slider */
  jQuery(".home-banner-slide-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,
    speed: 1000,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    infinite: true,
    variableWidth: true,
    prevArrow:
      '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
    nextArrow:
      '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><i class="fa-solid fa-circle-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 413,
        settings: {
          variableWidth: false,
        },
      },
    ],
  });
    
/* Featured News */
  if (jQuery(window).width() <= 767) {
    jQuery('.fn-lists').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      variableWidth: true,
      draggable: true,
      touchThreshold: 200,
      swipeToSlide: true,
      adaptiveHeight: true,
       prevArrow:
      '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
    nextArrow:
      '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><i class="fa-solid fa-circle-chevron-right"></i></div>',
    });
  }

  /* home banner Slider */
  jQuery(".feature-podcasts-slide-main").slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,
    speed: 1000,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
    infinite: false,
    variableWidth: true,
    prevArrow:
      '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
    nextArrow:
      '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button">Load More Audio</div>',
    responsive: [
      {
        breakpoint: 413,
        settings: {
          variableWidth: false,
        },
      },
    ],
  });
});
