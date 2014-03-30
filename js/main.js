//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var v = $("#visual").offset().top;
var b = $("#biggie4").offset().top + 100;
$(document).scroll(function(){
    if( $(this).scrollTop() > v && $(this).scrollTop() < b) {
        $(".vera-header").fadeIn();
    }
    if ( $(this).scrollTop() > b || $(this).scrollTop() < v) {
        $(".vera-header").fadeOut();
    }
});