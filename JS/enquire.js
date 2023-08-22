$('.scrl2btm').click(function () {
    $('html, body').animate({
        scrollTop: $('.contact-box.js-reveal').offset().top-90
    }, 1000);
    return false;
});