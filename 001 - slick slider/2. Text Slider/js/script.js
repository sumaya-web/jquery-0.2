$(function () {
    "use strict";
    $(".text_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow:
            '<i class="fa-solid fa-circle-arrow-left prev_arrow"></i>',
        nextArrow:
            '<i class="fa-solid fa-circle-arrow-right next_arrow"></i>',
    });
});
