$(function () {
    "use strict";
    $(".banner").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor:
            ".banner_items",
    });
    $(".banner_items").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".banner",
        dots: true,
        centerMode: true,
        centerPadding: "60px",
        focusOnSelect: true,
        prevArrow:
            '<i class="fa-solid fa-circle-arrow-left prev_arrow"></i>',
        nextArrow:
            '<i class="fa-solid fa-circle-arrow-right next_arrow"></i>',
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 500,
    });
});
