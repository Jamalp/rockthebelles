$(window).scroll(function(){$(".navbar").offset().top>50?$(".navbar-fixed-top").addClass("top-nav-collapse"):$(".navbar-fixed-top").removeClass("top-nav-collapse")}),$(function(){$(".page-scroll a").bind("click",function(o){var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top},1500,"easeInOutExpo"),o.preventDefault()})});var v=$("#visual").offset().top,b=$("#biggie4").offset().top+100;$(document).scroll(function(){$(this).scrollTop()>v&&$(this).scrollTop()<b&&$(".vera-header").fadeIn(),($(this).scrollTop()>b||$(this).scrollTop()<v)&&$(".vera-header").fadeOut()});