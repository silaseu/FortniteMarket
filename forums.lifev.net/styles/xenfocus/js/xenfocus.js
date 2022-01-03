/* @license: Xenfocus: November 28, 2018 */
$(document).ready(function() {
    var c = $("html");
    $(".focus-search-advanced").on("click", function() {
        c.toggleClass("focus-search-menu-active")
    }), $(".focus-search-flex input").on("focus", function() {
        c.addClass("focus-search-menu-active")
    }), $(document).on("click", function() {
        c.removeClass("focus-search-menu-active")
    }), $(".focus-wrap-search").on("click", function(o) {
        o.stopPropagation()
    }), $("[data-xenfocus-editor]").on("click", function(o) {
        c.toggleClass("focus-editor-open"), $(".focus-picker").addClass("focus-picker--loaded"), o.preventDefault()
    }), $(document).keyup(function(o) {
        27 === o.keyCode && c.removeClass("focus-editor-open")
    }), $(".focus-picker span").on("click", function() {
        var o = c.attr("data-style-id"),
            t = $(this).attr("data-focus-bg");
        c.attr("data-focus-bg", "" + t), setCookie("xenfocusBackground-" + o, "" + t, 365)
    }), $(".focus-editor-panel").each(function() {
        var t = $(this).attr("data-toggle-class"),
            o = $(this).attr("data-default"),
            e = getCookie(t);
        "on" === e ? ($(this).find("#" + t + "-on").attr("checked", ""), console.log("Cookie for " + t + ": on")) : "off" === e ? ($(this).find("#" + t + "-off").attr("checked", ""), console.log("Cookie for " + t + ": off")) : "on" === o ? ($(this).find("#" + t + "-on").attr("checked", ""), console.log("No cookie for " + t + ", but it is on by default")) : ($(this).find("#" + t + "-off").attr("checked", ""), console.log("No cookie for " + t + ", but it is off by default")), $('.focus-editor-panel[data-toggle-class="' + t + '"] input').on("click", function() {
            var o;
            $(this).attr("id") === t + "-on" ? (c.addClass(t), setCookie(t, "on", 365)) : (c.removeClass(t), setCookie(t, "off", 365))
        })
    })
});