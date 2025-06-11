/* day slider show slider */

jQuery(".day-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 7,
  focusOnSelect: true,
  arrows: true,
  infinite: false,
  variableWidth: true,
  asNavFor: ".show-my-sliders",
  prevArrow:
    '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><i class="fa-solid fa-circle-chevron-right"></i></div>',
});

jQuery(".show-my-sliders").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".day-slider",
  arrows: false,
  infinite: false,
  fade: true,
});

jQuery(".show-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  variableWidth: true,
  prevArrow:
    '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
  nextArrow:
    '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><i class="fa-solid fa-circle-chevron-right"></i></div>',
});
