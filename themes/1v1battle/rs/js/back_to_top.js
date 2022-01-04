$(document).ready(function() {
    $('#back-to-top').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $("#back-to-top").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
    //=============html==================
    //  <div class="back_to_top" id="back-to-top" style=""><i class='fas fa-angle-up'></i></div>
});