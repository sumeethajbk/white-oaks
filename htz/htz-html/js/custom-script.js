jQuery(document).ready(function () {
  /* Fixed Header */
  jQuery(window).on("scroll", function () {
    var scroll = jQuery(this).scrollTop();
    if (scroll >= 2) {
      jQuery(".main_header").addClass("fixed-header");
    } else {
      jQuery(".main_header").removeClass("fixed-header");
    }
  });
  jQuery(window).on('scroll', function () {
    if (jQuery('.main_header').hasClass('fixed-header')) {
      jQuery('.topbar').removeClass('on');
    } else {
      jQuery('.topbar').addClass('on');
    }
  });
    
    
  /* Menu */

  if (jQuery(window).width() <= 809) {
    jQuery(".toggle_button").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(".mobile_menu").toggleClass("navOpen");
      jQuery(".main_header").toggleClass("menu-open");
      jQuery("html").toggleClass("no-scroll");
    });
    jQuery("ul.main_menu > li.menu-item-has-children > a").on(
      "click",
      function (event) {
        event.preventDefault();
        jQuery("ul.main_menu > li.menu-item-has-children > a")
          .not(jQuery(this))
          .removeClass("active");
        jQuery(this).toggleClass("active");
        jQuery(this).parent().siblings().find("ul.sub-menu").slideUp();
        jQuery(this).next("ul.sub-menu").slideToggle();
        jQuery(this).parent().siblings().toggleClass("sib");
      }
    );
    jQuery("ul.main_menu ul > li.menu-item-has-children > a").on(
      "click",
      function (event) {
        event.preventDefault();
        jQuery("ul.main_menu ul > li.menu-item-has-children > a")
          .not(jQuery(this))
          .removeClass("active");
        jQuery(this).toggleClass("active");
        jQuery(this).parent().siblings().find("ul.sub-menu").slideUp();
        jQuery(this)
          .siblings("ul.main_menu ul > li > ul.sub-menu")
          .slideToggle();
      }
    );
  }

  /* Accorrdion */
  jQuery(".accordion-item .accordion-heading").on("click", function (e) {
    e.preventDefault();
    if (jQuery(this).closest(".accordion-item").hasClass("active")) {
      jQuery(".accordion-item").removeClass("active");
    } else {
      jQuery(".accordion-item").removeClass("active");
      jQuery(this).closest(".accordion-item").addClass("active");
    }
    var jQuerycontent = jQuery(this).next();
    jQuerycontent.slideToggle(300);
    jQuery(".accordion-item .content").not(jQuerycontent).slideUp("slow");
  });

  /* Product Banner */
  if (jQuery(window).width() >= 768) {
    jQuery(".pb-slider-wrap").each(function () {
      const $wrap = jQuery(this);
      $wrap
        .find(".pb-thumb:first")
        .addClass("active")
        .find(".pb-thumb-nav")
        .addClass("open");
      $wrap.find(".pb-slide:first").addClass("active");
      $wrap.find(".pb-thumb-nav").on("click", function (e) {
        e.preventDefault();
        const $nav = jQuery(this);
        const data = $nav.data("name");

        $nav
          .parent()
          .addClass("active")
          .siblings()
          .removeClass("active")
          .find(".pb-thumb-nav")
          .removeClass("open");
        $nav.addClass("open");
        $wrap
          .find(".pb-slide")
          .hide()
          .filter(`[data-image="${data}"]`)
          .fadeIn(800);
      });
    });
  }
  if (jQuery(window).width() <= 767) {
    jQuery(".pb-slider-nav .pb-bg").css("background", "");
    jQuery(".pb-slider-nav .pb-thumb-nav").css("color", "");

    jQuery(".pb-slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".pb-slider-nav",
    });
    jQuery(".pb-slider-nav").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".pb-slider-for",
      dots: false,
      arrows: true,
      variableWidth: true,
      centerMode: true,
      appendArrows: ".custom-arrows",
      prevArrow: '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-left"></i></span></div>',
      nextArrow: '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-right"></i></span></div>',
      focusOnSelect: true,
    });
  }


  /* Product Features */
  if (jQuery(window).width() >= 768) {
    jQuery(".pf-slider-wrap").each(function () {
      const $wrap = jQuery(this);

      const $firstThumb = $wrap.find(".pf-thumb:first");
      const firstBg = $firstThumb.attr("data-bg");
      const $firstnav = $firstThumb.find(".pf-thumb-nav");
      const firstTextColor = $firstnav.attr("data-color");

      $firstThumb.css("background", firstBg);
      $firstThumb.find(".pf-bg").css("background", firstBg);
      $firstnav.css("color", firstTextColor);

      $firstThumb.addClass("active");
      $firstnav.addClass("open");
      $wrap.find(".pf-slide[data-image='1']").addClass("active");

      $wrap.find(".pf-thumb-nav").on("click", function (e) {
        e.preventDefault();
        const $nav = jQuery(this);
        const data = $nav.data("name");
        const textColor = $nav.data("color");

        const $currentThumb = $nav.closest(".pf-thumb");
        const $allThumbs = $wrap.find(".pf-thumb");
        const $allThumbNavs = $wrap.find(".pf-thumb-nav");
        const $allThumbBgs = $wrap.find(".pf-bg");

        // Reset all
        $allThumbs.removeClass("active").css("background", "#FFFFFF");
        $allThumbNavs.removeClass("open").css("color", "rgba(0,71,57,1)");
        $allThumbBgs.css("background", "rgb(255 255 255 / 50%)");

        // Activate current
        $currentThumb.addClass("active");
        $nav.addClass("open").css("color", textColor);

        const newBg = $currentThumb.attr("data-bg");
        $currentThumb.css("background", newBg);
        $currentThumb.find(".pf-bg").css("background", newBg);

        // Show slide
        $wrap
          .find(".pf-slide")
          .hide()
          .filter(`[data-image="${data}"]`)
          .fadeIn(800);
      });
    });
  }
  if (jQuery(window).width() <= 767) {
    jQuery(".pf-slider-nav .pf-thumb").css("background", "");
    jQuery(".pf-slider-nav .pf-bg").css("background", "");
    jQuery(".pf-slider-nav .pf-thumb-nav").css("color", "");

    jQuery(".pf-slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".pf-slider-nav",
    });
    jQuery(".pf-slider-nav").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".pf-slider-for",
      dots: false,
      arrows: true,
      variableWidth: true,
      centerMode: true,
      appendArrows: ".custom-arrows",
      prevArrow: '<div class="slick-arrow slick-prev flex flex-center" aria-label="Previous Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-left"></i></span></div>',
      nextArrow: '<div class="slick-arrow slick-next flex flex-center" aria-label="Next Arrow" role="button"><span><i class="fa-sharp fa-regular fa-arrow-right"></i></span></div>',
      focusOnSelect: true,
    });
  }

  /* CTA Form */
  jQuery('.frm_form_field input, .frm_form_field textarea').on('input focus', function () {
    var inputLength = jQuery(this).val().length;
    if (inputLength > 0) {
      jQuery(this).addClass('input-has-value');
    } else {
      jQuery(this).removeClass('input-has-value');
    }
  });


  jQuery(".frm_forms .frm_form_fields input, .frm_forms .frm_form_fields textarea").on('focus', function () {
    jQuery(this).siblings(".frm_form_field").addClass("input-has-value");
    jQuery(this).parent(".frm_form_field ").removeClass("frm_blank_field");

    jQuery(this).siblings(".frm_error").hide();
  }).on('blur', function () {
    if (!jQuery(this).val()) {
      jQuery(this).siblings(".frm_form_field").removeClass("input-has-value");
      jQuery(this).siblings(".frm_error").show();
      jQuery(this).parent(".frm_form_field ").addClass("frm_blank_field");

    } else {
      jQuery(this).siblings(".frm_form_field").addClass("input-has-value");
      jQuery(this).parent(".frm_form_field ").removeClass("frm_blank_field");

      jQuery(this).siblings(".frm_error").hide();
    }
  });

});
