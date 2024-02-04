(function ($) {
    "use strict";

    $(".html").rProgressbar({
        percentage: 95,
        fillBackgroundColor:
            "#1abc9c",
        backgroundColor:
            "#fff",
        borderRadius: "0px",
        height: "20px",
        width: "100%",
        duration: 3000,
    });
    $(".css").rProgressbar({
        percentage: 80,
        fillBackgroundColor:
            "#2ecc71",
        backgroundColor:
            "#fff",
    });

    $(".php").rProgressbar({
        percentage: 45,
        fillBackgroundColor:
            "#9b59b6",
        backgroundColor:
            "#fff",
    });

    $(
        ".javascript"
    ).rProgressbar({
        percentage: 55,
        fillBackgroundColor:
            "#34495e",
        backgroundColor:
            "#fff",
    });

    $(".jquery").rProgressbar(
        {
            percentage: 75,
            fillBackgroundColor:
                "#f1c40f",
            backgroundColor:
                "#fff",
        }
    );
})(jQuery);
