$(document).ready(function() {
    $(".categories-button").click(function() {
        $(".categories-button").removeClass("active");
        $(".search-button").removeClass("active");
        $(".row-menu").removeClass("none");
        $(".row-search").removeClass("none");
        $(".row-search").removeClass("block");
        $(".row-menu").removeClass("block");

        $(".categories-button").addClass("active");
        $(".row-search").addClass("none");
        $(".row-menu").addClass("block");

    });
    $(".search-button").click(function() {
        $(".categories-button").removeClass("active");
        $(".search-button").removeClass("active");
        $(".row-menu").removeClass("none");
        $(".row-menu").removeClass("none");
        $(".row-search").removeClass("block");
        $(".row-menu").removeClass("block");

        $(".search-button").addClass("active");
        $(".row-menu").addClass("none");
        $(".row-search").addClass("block");
        $(".input-search").focus();
    });
});