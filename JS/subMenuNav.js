if ($(window).width()>414) {
    $('.tagline-wrapper a').removeClass('customBtnWidth2').addClass('button');
}else{
   $('.tagline-wrapper a').removeClass('button').addClass('customBtnWidth2');
}
$(window).resize(function() {
if ($(window).width()>414) {
    $('.tagline-wrapper a').removeClass('customBtnWidth2').addClass('button');
}else{
   $('.tagline-wrapper a').removeClass('button').addClass('customBtnWidth2');
}});