jQuery(document).ready(function () {
  let media = window.matchMedia("(min-width: 768px)");

  function wrapGroups() {
    let mylist = $(".day-slider");
    let list = mylist.children(".day-box");

    for (let i = 0; i < list.length; i += 7) {
      let group = list.slice(i, i + 7);
      let wrapper = $('<div class="day-js-slide"></div>');
      group.first().before(wrapper);
      group.appendTo(wrapper);
    }
    setTimeout(() => {
      let isUserClick = false;
      let currentActiveSlideIndex = 0;
      let days = jQuery(".day-box strong");
      days.each((_i, ele) => {
        let dayText = jQuery(ele).text().trim();
        let dayOfWeek = dayText.slice(0, 3);
        let newText =
          `${dayOfWeek}` + `<span class="day">${dayText.slice(3)}</span>`;
        jQuery(ele).html(newText);
      });
      jQuery(".day-slider").on("init", function (event, slick) {
        jQuery(
          jQuery(".day-slider .slick-slide").eq(0).find(".day-box")[0]
        ).addClass("day-active");
      });
      jQuery(".day-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        infinite: false,
        prevArrow:
          '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
        nextArrow:
          '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><i class="fa-solid fa-circle-chevron-right"></i></div>',
      });
      jQuery(".day-slider").on("setPosition", function (event, slick) {
        if (!isUserClick) {
          const currentSlideIndex = slick.currentSlide;
          if (currentSlideIndex !== currentActiveSlideIndex) {
            jQuery(".day-box").removeClass("day-active");
            const activeSlide = slick.$slides.eq(currentSlideIndex);
            const myActiveBox = jQuery(activeSlide.find(".day-box")[0]);
            myActiveBox.addClass("day-active");
            currentActiveSlideIndex = currentSlideIndex;
            let myslideno = +myActiveBox.attr("data-slide-box");
            jQuery(`[data-slide-show]`).hide();
            jQuery(`[data-slide-show=${myslideno}]`).fadeIn(1000);
          }
        }
      });
      jQuery("[data-slide-box]").on("click", function (e) {
        e.preventDefault();
        isUserClick = true;
        jQuery(this).siblings("[data-slide-box]").removeClass("day-active");
        jQuery(this).addClass("day-active");
        var slideno = jQuery(this).data("slide-box");
        jQuery(`[data-slide-show]`).hide();
        jQuery(`[data-slide-show=${slideno}]`).fadeIn(1000);
        setTimeout(function () {
          isUserClick = false;
        }, 100);
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
    }, 0);
  }

  function unwrapGroups() {
    $(".group-wrapper").each(function () {
      $(this).children(".day-box").insertBefore(this); // move <li> elements before the div
      $(this).remove(); // remove the empty wrapper
    });
    setTimeout(() => {
      jQuery(".day-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: ".show-my-sliders",
        variableWidth: true,
        centerMode: true,
        centerPadding: "0",
        arrows: true,
        infinite: false,
        prevArrow:
          '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><i class="fa-solid fa-circle-chevron-left"></i></div>',
        nextArrow:
          '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><i class="fa-solid fa-circle-chevron-right"></i></div>',
      });
      jQuery(".show-my-sliders").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        asNavFor: ".day-slider",
      });
    }, 0);
  }

  // Initial load
  if (media.matches) {
    wrapGroups();
  } else {
    unwrapGroups();
  }

  media.addEventListener("change", (e) => {
    if (e.matches) {
      wrapGroups();
    } else {
      unwrapGroups();
    }
  });
});
