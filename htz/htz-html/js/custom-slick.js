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
    jQuery(".fn-lists").slick({
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
      '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"> Load More Audio<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 17.5229 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.4772 17.5228 2 12 2C6.47715 2 2 6.4772 2 12ZM13.3 15.9998C13.3 15.2818 12.7179 14.6998 12 14.6998C11.282 14.6998 10.7 15.2818 10.7 15.9998C10.7 16.7178 11.282 17.2998 12 17.2998C12.7179 17.2998 13.3 16.7178 13.3 15.9998ZM13.3 7.9998C13.3 7.2818 12.7179 6.6998 12 6.6998C11.282 6.6998 10.7 7.2818 10.7 7.9998C10.7 8.7178 11.282 9.2998 12 9.2998C12.7179 9.2998 13.3 8.7178 13.3 7.9998ZM13.3 11.9998C13.3 11.2818 12.7179 10.6998 12 10.6998C11.282 10.6998 10.7 11.2818 10.7 11.9998C10.7 12.7178 11.282 13.2998 12 13.2998C12.7179 13.2998 13.3 12.7178 13.3 11.9998Z" fill="#F1F1F1"/> </svg></div>',
    responsive: [
      {
        breakpoint: 413,
        settings: {
          variableWidth: false,
        },
      },
    ],
  });

  /* shows banner */

  jQuery(".shows-banner-row").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,
    speed: 1000,
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    prevArrow:
      '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
    nextArrow:
      '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><i class="fa-solid fa-circle-chevron-right"></i></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
        },
      },
    ],
  });
});
