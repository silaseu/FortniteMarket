function cookieOk() {
    var now = new Date();
    var lifetime = now.getTime();
    var deleteCookie = lifetime + 2592000000;
    now.setTime(deleteCookie);
    var enddate = now.toUTCString();
    document.cookie = "cookieAccepted = set; path=/; secure; expires=" + enddate;
    document.getElementById("cookie-popup").classList.add("hidden");
}
jQuery(document).ready(function() {
    setTimeout(function() {
        jQuery("#cookieConsent").fadeIn(200);
    }, 0);
    jQuery("#closeCookieConsent, .cookieConsentOK").click(function() {
        jQuery("#cookieConsent").fadeOut(200);
    });
    jQuery('.scrolldown-button a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: jQuery(jQuery(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});