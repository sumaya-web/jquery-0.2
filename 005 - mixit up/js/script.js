$(function () {
    "use strict";

    var containerEl =
        document.querySelector(
            ".items-to-display"
        );

    var mixer = mixitup(
        containerEl
    );

    $(".menu ul li").on(
        "click",
        function () {
            $(
                ".menu ul li"
            ).removeClass(
                "active"
            );
            $(
                this
            ).toggleClass(
                "active"
            );
        }
    );
});
