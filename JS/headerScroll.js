
const nav = document.querySelector("header");

// Creating variales
let scroll_position = 30;
let scroll_direction;

// Show Navbar when dom loads
nav.classList.add("active__menu");
// Create an scroll event listener
window.addEventListener("scroll", () => {


    scroll_direction = document.body.getBoundingClientRect().top > scroll_position ? "up" : "down";
    scroll_position = document.body.getBoundingClientRect().top;

    if (scroll_direction === "up" || $(document).scrollTop() == 0) {
        // If you are scrolling up, then add active menu class
        nav.classList.add("active__menu");
        $('header').css('transform', 'translateY(0)');
        $('.header').css('opacity', 1);
    }
    else {
        // If you Scrolling down, remove the active menu class
        nav.classList.remove("active__menu");

        if ($(document).scrollTop() < 10) {
            $('header').css('transform', 'translateY(0)');
            $('.header').css('opacity', 0.9);
        } else if ($(document).scrollTop() < 20) {
            $('header').css('transform', 'translateY(-1px)');
            $('.header').css('opacity', 0.7);
        } else if ($(document).scrollTop() < 30) {
            $('header').css('transform', 'translateY(-5px)');
            $('.header').css('opacity', 0.5);
        } else if ($(document).scrollTop() < 40) {
            $('.header').css('opacity', 0.2);
            $('header').css('transform', 'translateY(-10px)');
        } else if ($(document).scrollTop() < 60) {
            $('.header').css('opacity', 0.1);
            $('header').css('transform', 'translateY(-12px)');
        } else if ($(document).scrollTop() < 80) {
            $('header').css('transform', 'translateY(-80px)');
        } else {
            $('header').css('transform', 'translateY(-88px)');
            $('.header').css('opacity', 0);
        }
    }
});

$('.hamburger').on('click',function(){
   
    if($(window).width()<920 && $('.HamMenuWrapper').css('transform')=='matrix(1, 0, 0, 1, 0, 0)'){
        $(this).css('background-image',"url('img/ham.png')");
        $('.HamMenuWrapper').css({
            'transform':'translateX(100%)'
        });
        $('header, .contentWrappper,.sixtyFortyWrapper,.swimmingPool,.locationBlocks,.embedMap,.finAssis,.sliderCanvas,.tag-line,.textContenWarpper,.divider,.embedMap,.distanceSection,.sliderCanvasFeature,.sectionFirst,.sliderCanvasSitePlans,section,.sliderCanvasFloorPlans,.horImageWrapper,.sliderCanvasSpecs,.sliderCanvasGallery,footer').css('filter','blur(0)');
        $('.leftBlurred').hide();
        $('body').css('overflowY','visible');
        $('.leftBlurred').delay(300).fadeOut();

        $('.stickyFooter.mobile').css('background-color','#EAECE3');
        $('.parentWrapperBoud').show();
    }
    else{
        $('.HamMenuWrapper').css({
            'transform':'translateX(0)',
        });
        $('header, .contentWrappper,.sixtyFortyWrapper,.swimmingPool,.locationBlocks,.embedMap,.finAssis,.sliderCanvas,.tag-line,.textContenWarpper,.divider,.embedMap,.distanceSection,.sliderCanvasFeature,.sectionFirst,.sliderCanvasSitePlans,section,.sliderCanvasFloorPlans,.horImageWrapper,.sliderCanvasSpecs,.sliderCanvasGallery,footer').css('filter','blur(8px)');
        $('.leftBlurred').delay(300).fadeIn();
        $('body').css('overflowY','hidden');

        if($(window).width()<920){
            $('.parentWrapperBoud').hide();
            $(this).css('background-image',"url('img/close.png')");
            $('.stickyFooter.mobile').css('background-color','#fff');
        }
    }
});

$('.closeIco').on('click',function(){
    $('.HamMenuWrapper').css({
        'transform':'translateX(100%)'
    });
    $('header, .contentWrappper,.sixtyFortyWrapper,.swimmingPool,.locationBlocks,.embedMap,.finAssis,.sliderCanvas,.tag-line,.textContenWarpper,.divider,.embedMap,.distanceSection,.sliderCanvasFeature,.sectionFirst,.sliderCanvasSitePlans,section,.sliderCanvasFloorPlans,.horImageWrapper,.sliderCanvasSpecs,.sliderCanvasGallery,footer').css('filter','blur(0)');
    $('.leftBlurred').hide();
    $('body').css('overflowY','visible');
    $('.leftBlurred').delay(300).fadeOut();
});

