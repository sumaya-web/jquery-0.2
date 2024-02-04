$(function () {
    "use strict";

    $(
        "#count_down"
    ).countdown(
        "2025/12/31",
        function (event) {
            $(this).html(
                event.strftime(
                    "%-Y year %m month %w weeks %d days %H:%M:%S"
                )
            );
        }
    );

    // todo => year countdown
    $("#year").countdown(
        "2025/12/31",
        function (event) {
            $(this).html(
                event.strftime(
                    "%-Y Year"
                )
            );
        }
    );

    // todo => month countdown
    $("#month").countdown(
        "2025/12/31",
        function (event) {
            $(this).html(
                event.strftime(
                    "%-m Month"
                )
            );
        }
    );

    // todo => week countdown
    $("#week").countdown(
        "2025/12/31",
        function (event) {
            $(this).html(
                event.strftime(
                    "%-w Weeks"
                )
            );
        }
    );

    // todo => day countdown
    $("#day").countdown(
        "2025/12/31",
        function (event) {
            $(this).html(
                event.strftime(
                    "%-d Days"
                )
            );
        }
    );

    // todo => hour countdown
    $("#hour").countdown(
        "2025/12/31",
        function (event) {
            $(this).html(
                event.strftime(
                    "%-H Hours"
                )
            );
        }
    );

    // todo => minutes countdown
    $("#min").countdown(
        "2025/12/31",
        function (event) {
            $(this).html(
                event.strftime(
                    "%-M Minutes"
                )
            );
        }
    );

    // todo => second countdown
    $("#sec").countdown(
        "2025/12/31",
        function (event) {
            $(this).html(
                event.strftime(
                    "%S Weeks"
                )
            );
        }
    );
});
