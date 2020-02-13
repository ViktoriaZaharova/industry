// ==================================================
// Template scripts
// ==================================================


jQuery(document).ready(function() {

//Window width
var window_width = $("body").width();

/***Anchor link***/
$("body").on('click', '.slice', function(e){
    var fixed_offset = 0;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

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
  maxWidth: 320,
  padding: [0,0,0,0],
  btnTpl: {
    smallBtn:
      '<div class="my-fancybox-close"><a href="javascript:parent.jQuery.fancybox.close();"><i class="fas fa-times"></i></a></div>'
  }
});


//Phone mask
$(".phone").mask("+7 (999) 999-9999");


//FormStyler
$('select').styler({
	onSelectOpened: function() {
    	$(this).find('.jq-selectbox__trigger-arrow').html('<i class="fas fa-caret-up"></i>');
  	},
  	onSelectClosed: function() {
    	$(this).find('.jq-selectbox__trigger-arrow').html('<i class="fas fa-caret-down"></i>');
  	}
});
$('.jq-selectbox__trigger-arrow').html('<i class="fas fa-caret-down"></i>');

//CATALOG FILTER
$('input:checkbox').styler();
$(".filterBlock").each(function(){
	$(this).find('.filterBlock__title').click(function(){
	    $(this).find('i').toggleClass('fa-angle-down');
	});
});


//CATALOG SORT
$(".filterSort__select .jq-selectbox__dropdown ul li").each(function(){
	$(this).click(function(){
		//$(".filterSort__select .jq-selectbox__dropdown ul li").removeClass('arrow-down');
	    $(this).toggleClass('arrow-down');
	});
});

//HEADER SOC ICONS
$(window).scroll(function() {
    if($(this).scrollTop() > 400) {
        $('.header__soc-slider').addClass('fixed');
    } 
    else {
        $('.header__soc-slider').removeClass('fixed');
    }
});

//FOOTER SOC ICONS
$('.footer__soc').html($('.header__soc-mobMenu').html());
$('.header__socItem-search').click(function(){
    $('.search__input').focus();
});

//LANG MOBILE
$('.langWrap-mob').html($('.langWrap-desc').html());

//BREADCRUMBS MOBILE
$('.searchFormWrap-mob').html($('.searchFormWrap-desc').html());

//CATEGORY HOVER
$('.categoryItem a').hover(function() {
	$('.categoryItem__companion img').addClass('lazy');
	var myLazyLoad = new LazyLoad({
	    elements_selector: ".lazy"
	});
});

//SLIDER STYLE
$(".main_collect").each(function () {
    var a = $(this).find(".main-styles__item"),
      b = a.length;
    a.css("width", 100 / b + "%");
});

//BREADCRUMBS MOBILE
$('.breadcrumbs-mob').html($('.breadcrumbs-desc').html());

//COLLECTION TITLE MOBILE
$('.titleWrap-mob').html($('.titleWrap-desc').html());

//ARTICUL MOBILE
$('.compArtBlock__itemLast-mob').html($('.compArtBlock__itemLast-desc').html());


//SLIDER SMALL WITh BIG CAROUSEL
$(".sliderWrap").each(function(){

  //SLIDER CAROUSEL BIG
  var $sliderCarousel = $(this).index()+1;
  $sliderCarousel = $(this).find('.sliderBig');

  $sliderCarousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	  myLazyLoad = new LazyLoad({
	      elements_selector: ".lazy"
	  });
  });

  $sliderCarousel.slick({
      appendArrows: $(this).find('.sliderBig__arrowWrap'),
      appendDots: $(this).find('.sliderBig__dotsWrap'),
      prevArrow:'<div class="slick-arrow-left slick-arrow"><i class="fa fas fa-caret-left slick-prev" aria-hidden="true"></i></div>',
      nextArrow:'<div class="slick-arrow-right slick-arrow"><i class="fa fas fa-caret-right slick-next" aria-hidden="true"></i></div>',
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      fade: true,
      cssEase: 'linear',
      asNavFor: $(this).find('.sliderSmall')
  });

  //SLIDER CAROUSEL SMALL
  var $sliderCarousel__small = $(this).index()+1;
  $sliderCarousel__small = $(this).find('.sliderSmall');

  $sliderCarousel__small.slick({
      arrows: false,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      fade: false,
      cssEase: 'linear',
      asNavFor: $(this).find('.sliderBig')
  });

  $(this).find('.sliderSmallItem').each(function(){
      var sliderCarousel__smallItem = $(this).index()+1;
      $(this).find('span').click(function(){
          $sliderCarousel__small.slick('slickGoTo', $(this).parent().parent().parent().index());
      });
  });

});


//SLIDER MAIN CAROUSEL
$(".sliderMainWrap").each(function(){

  var $sliderCarousel = $(this).index()+1;
  $sliderCarousel = $(this).find('.sliderBig');

  $sliderCarousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	  myLazyLoad = new LazyLoad({
	      elements_selector: ".lazy"
	  });
  });

  $sliderCarousel.slick({
      appendArrows: $(this).find('.sliderBig__arrowWrap'),
      appendDots: $(this).find('.sliderBig__dotsWrap'),
      prevArrow:'<div class="slick-arrow-left slick-arrow"><i class="fa fas fa-caret-left slick-prev" aria-hidden="true"></i></div>',
      nextArrow:'<div class="slick-arrow-right slick-arrow"><i class="fa fas fa-caret-right slick-next" aria-hidden="true"></i></div>',
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      fade: true,
      cssEase: 'linear'
  });

});


//SLIDER MOTIVE CAROUSEL
$(".sliderMotiveWrap").each(function(){

  var $motiveCarousel = $(this).index()+1;
  $motiveCarousel = $(this).find('.sliderBig');

  $motiveCarousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	  myLazyLoad = new LazyLoad({
	      elements_selector: ".lazy"
	  });
  });

  $motiveCarousel.slick({
      appendArrows: $(this).find('.sliderBig__arrowWrap'),
      appendDots: $(this).find('.sliderBig__dotsWrap'),
      prevArrow:'<div class="slick-arrow-left slick-arrow"><i class="fa fas fa-caret-left slick-prev" aria-hidden="true"></i></div>',
      nextArrow:'<div class="slick-arrow-right slick-arrow"><i class="fa fas fa-caret-right slick-next" aria-hidden="true"></i></div>',
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      rows: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      fade: false,
      cssEase: 'linear',
      responsive: [
      {
      breakpoint: 991,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
      },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
      breakpoint: 576,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      }
    ]
  });

});


//SLIDER RECOMMEND CAROUSEL
$(".sliderRecommendWrap").each(function(){

  var $recommendCarousel = $(this).index()+1;
  $recommendCarousel = $(this).find('.sliderBig');

  $recommendCarousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	  myLazyLoad = new LazyLoad({
	      elements_selector: ".lazy"
	  });
  });

  $recommendCarousel.slick({
      appendArrows: $(this).find('.sliderBig__arrowWrap'),
      appendDots: $(this).find('.sliderBig__dotsWrap'),
      prevArrow:'<div class="slick-arrow-left slick-arrow"><i class="fa fas fa-caret-left slick-prev" aria-hidden="true"></i></div>',
      nextArrow:'<div class="slick-arrow-right slick-arrow"><i class="fa fas fa-caret-right slick-next" aria-hidden="true"></i></div>',
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 1,
      autoplay: false,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      fade: false,
      cssEase: 'linear',
      responsive: [
      {
      breakpoint: 991,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
      breakpoint: 576,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      }
    ]
  });

});




});

