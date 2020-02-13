// ==================================================
// Template scripts
// ==================================================


jQuery(document).ready(function() {

//Window width
var window_width = $("body").width();


// LAZY LOAD
var myLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
});
if (window_width > 991) {
	var myLazyLoad2 = new LazyLoad({
	    elements_selector: ".lazy-lg"
	});
}
if (window_width > 767) {
	var myLazyLoad3 = new LazyLoad({
	    elements_selector: ".lazy-md"
	});
}
if (window_width > 575) {
	var myLazyLoad4 = new LazyLoad({
	    elements_selector: ".lazy-sm"
	});
}
$(window).on('resize', function(){
	if ($("body").width() > 991) {
		var myLazyLoad2 = new LazyLoad({
		    elements_selector: ".lazy-lg"
		});
	}
	if ($("body").width() > 767) {
		var myLazyLoad3 = new LazyLoad({
		    elements_selector: ".lazy-md"
		});
	}
	if ($("body").width() > 575) {
		var myLazyLoad4 = new LazyLoad({
		    elements_selector: ".lazy-sm"
		});
	}
});


//Fancybox
$('.fancybox').fancybox({
  loop:false,
  padding: [15,15,15,15]
});

$('.fancybox-popup').fancybox({
  loop:false,
  maxWidth: 556,
  padding: [0,0,0,0]
});


//Phone mask
$(".phone").mask("+7 (999) 999-9999");


//HEADER SOC ICONS
$(window).scroll(function() {
    if($(this).scrollTop() > 450) {
        $('.header_soc').addClass('fixed');
    } 
    else {
        $('.header_soc').removeClass('fixed');
    }
});




//SVG
$(".mainMenu ul li").each(function(){

var svgHolder1 = $(this).find('.dynamic-svg-menu').first()[0];
$(this).find('.dynamic-svg-menu').first()[0].onload = function() {
    var svgDocument1 = svgHolder1.contentDocument;
    var style1 = svgDocument1.createElementNS("http://www.w3.org/2000/svg", "style");

    style1.textContent = '@import url("../css/main.min.css");';

    var svgElem1 = svgDocument1.querySelector('svg');
    svgElem1.insertBefore(style1, svgElem1.firstChild);

    $(this).parent().parent().hover(function() {
        $(svgElem1).toggleClass('white');
        //$(this).parent().parent().toggleClass('active');
    });
};

});

$(".svgForm .svgInput").each(function(){

var svgHolder2 = $(this).find('.dynamic-svg-input').first()[0];
$(this).find('.dynamic-svg-input').first()[0].onload = function() {
    var svgDocument2 = svgHolder2.contentDocument;
    var style2 = svgDocument2.createElementNS("http://www.w3.org/2000/svg", "style");

    style2.textContent = '@import url("../css/main.min.css");';

    var svgElem2 = svgDocument2.querySelector('svg');
    svgElem2.insertBefore(style2, svgElem2.firstChild);

    $(this).parent().parent().mouseenter(function() {
        $(svgElem2).addClass('white');
    }); 

    $(this).parent().parent().mouseleave(function() {
        $(svgElem2).removeClass('white');
    }); 

    $(this).parent().parent().focusin(function() {
        $(svgElem2).addClass('white-focusin');
    }); 

    $(this).parent().parent().focusout(function() {
        $(svgElem2).removeClass('white-focusin');
    }); 

};

});



/*
var svgHolder2 = document.querySelector('.dynamic-svg2');
//var svgHolder = document.querySelector($(this).find('.dynamic-svg'));
svgHolder2.onload = function() {
    var svgDocument2 = svgHolder2.contentDocument;
    var style2 = svgDocument2.createElementNS("http://www.w3.org/2000/svg", "style");

    // Now (ab)use the @import directive to load make the browser load our css
    style2.textContent = '@import url("/css/main.min.css");';

    var svgElem2 = svgDocument2.querySelector('svg');
    svgElem2.insertBefore(style2, svgElem2.firstChild);


    //console.log(svgElem);
    
    $(".mainMenu ul li").each(function(){
    	$(this).find('a').hover(function() {
	        $(svgElem2).toggleClass('white');
	        //$(this).find(svgElem1).toggleClass('white');
	        $(this).addClass('asd');
	    });	
	});

    $(".mainMenu ul li a").hover(function() {
        //$(svgElem1).toggleClass('white');
    });

};
*/


//MAIN HEADER SLIDER
var $mainHeaderCarousel = $('.slider__header-main');

$mainHeaderCarousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  
  myLazyLoad = new LazyLoad({
      elements_selector: ".lazy"
  });
  
});


$mainHeaderCarousel.slick({
    //appendArrows: $(".videoReviewWrap .videoReview__arrowWrap"),
    prevArrow:'<div class="slick-arrow-left slick-arrow"><i class="fa fa-angle-left slick-prev" aria-hidden="true"></i></div>',
    nextArrow:'<div class="slick-arrow-right slick-arrow"><i class="fa fa-angle-right slick-next" aria-hidden="true"></i></div>',
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    fade: false,
    cssEase: 'linear',
    responsive: [
      {
      breakpoint: 991,
        settings: {
          slidesToShow: 2,
          infinite: false
        }
      },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: false
        }
      },
      {
      breakpoint: 576,
        settings: {
          slidesToShow: 1,
          infinite: false,
          rows: 2,
          arrows: false,
          swipe: true,
          draggable: false
        }
      }
    ]
});






});

