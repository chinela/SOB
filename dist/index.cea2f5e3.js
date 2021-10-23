$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.closed__nav').toggleClass('clicked');
        $('#mobile__dropdown').slideToggle();
    });
    var wow = new WOW();
    wow.init();
    setTimeout(()=>{
    }, 3000);
    setTimeout(()=>{
        $("#page__loader").fadeOut();
        $("body").removeClass('overflow-hidden');
    }, 5000);
    $(window).scroll(function() {
        if ($(this).scrollTop() > 240) $('#back-to-top').fadeIn();
        else $('#back-to-top').fadeOut();
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    var mobileLinks = $('.mobile__link');
    for (const link of mobileLinks)$(link).click(function(e) {
        $('.hamburger').trigger('click');
    });
});

//# sourceMappingURL=index.cea2f5e3.js.map
