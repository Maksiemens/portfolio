"use strict"


//https://isotope.metafizzy.co/filtering.html
//Isotope filter
//   // with jQuery
//   var $grid = $('.js-cards').isotope({
//     itemSelector: '.card',
//     getSortData: {
//       name: '.name',
//       category: '[data-category]'
//     },
//     // layout mode options
//     masonry: {
//       columnWidth: 270
//     }
//   });
// $grid.isotope({ filter: '.js-landing' });

//Slick slider
	$('.js-testimonialsSlider').slick({
		dots: true,
		infinite: true,
		slidesToShow: 1,
		// autoplay: true,
		// autoplaySpeed: 2000,
		arrows: false,
	});

/*
Filter
http://yiotis.net/filterizr/
https://gist.github.com/akshaynagpal/0dd98b2abc3a8c68e251309db32daa0d
https://ru.stackoverflow.com/questions/515724/%D0%97%D0%B0%D1%87%D0%B5%D0%BC-%D0%BD%D1%83%D0%B6%D0%B5%D0%BD-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-filter-%D0%B2-jquery


https://codemyui.com/tag/navigation-menu/
https://davidwalsh.name/demo/css-flip.php
http://css3.bradshawenterprises.com/flip/

https://github.com/VincentGarreau/particles.js/
http://www.coolwebmasters.com/education-and-learning/1523-css3-progress-bars.html



//Описание портфолио
http://natfolio.ru/portfolio.html
https://scripteden.com/previews/Clean/
http://webcode.com.ua/index.html#second
https://hmil.ru/
http://www.black-web.ru/about.php

http://www.kadrof.ru/st_pf.shtml
https://www.websource.in.ua/
https://www.weblancer.net/users/Roosso/


https://up-site.com.ua/
https://1stwebdesigner.com/css-effects/
https://codemyui.com/button-border-and-text-color-fill-on-hover/
https://codemyui.com/ghost-button-animation/ игеещт
https://davidwalsh.name/css-flip
https://codemyui.com/link-underline-button-animation-hover/
https://codemyui.com/simple-box-shadow-button-hover-animation/
https://codemyui.com/css-bordertransitions-buttons/
https://codemyui.com/cool-button-hover-effects/
https://codemyui.com/link-button-animation-hover/
https://codemyui.com/css-button-border-hover-effects/






для портотипа
https://codemyui.com/animated-material-design-button/




*/
/*
	header.header
				div.header-fullscreen
					video.header-fullscreen__video(loop muted autoplay )
						source(src="video/header-video.mp4" height="500px" type="video/mp4")
				div.header-info
					div.caption
						h1.caption__title Front End developer
						div.more
							button.more__button Learn More
*/







// var skillsDiv = $('.progress-bars');
/*
	div.text 
									| “Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat.
									| Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum
									| ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”
								div.text 
									| “Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat.
									| Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum
									| ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”
								div.text 
									| “Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam, te usu virtute placerat.
									| Purto brute disputando cu est, eam dicam soluta ei. Vel dicam vivendo accusata ei, cum
									| ne periculis molestiae pri. Lorem ipsum dolor sit amet, ea doming epicuri iudicabit nam.”
					
*/









// !!!!!!!!!!!!!!!!
// https://yaustal.com/stil_moda/34142-24-letnjaja-amerikanskaja-model-i-zvezda-instagram-jellison-parker-allison-parker-na-foto-iz-instagram.html

$(window).bind('scroll.once', function() { 

	var winT = $(window).scrollTop();
	var winH = $(window).height();
	var skillsT = $('.skills').offset().top;
				
	console.log('winT', winT);
	console.log('winH', winH);
	console.log('skillsT', skillsT);

		
	if (winT + winH > skillsT) {
		test();
	}	
});


function test() {

	$('.progress-bar').each(function(index, element) {

		var progressBarText = $(element).find('.progress-bar__text');
		var progressBarTextValue = progressBarText.text();
	
		progressBarText.animate(
			{
				width: progressBarTextValue
			},
			{
				duration: 5000,
				step: function(x) {
					progressBarText.text(Math.round(x) + "%");
				},
				complete: function() {
					progressBarText.stop(true);
				}
			}
		);
	});

	$(window).unbind('scroll.once');
};





// // http://anton.shevchuk.name/javascript/jquery-for-beginners-effects/
// // http://gearmobile.github.io/javascript/javascript-function-only-once/
// $(window).on('scroll', function() { 

// 	var winT = $(window).scrollTop();
// 	var winH = $(window).height();
// 	var skillsT = skillsDiv.offset().top;
				
// 	console.log('winT', winT);
// 	console.log('winH', winH);
// 	console.log('skillsT', skillsT);

		
// 	if (winT + winH > skillsT) {
	
// 		$('.progress-bar').each(function(index, element) {

// 			var progressBarText = $(element).find('.progress-bar__text');
// 			var progressBarTextValue = progressBarText.text();
		
// 			progressBarText.animate(
// 				{
// 					width: progressBarTextValue
// 				},
// 				{
// 					duration: 5000,
// 					step: function(x) {
// 						progressBarText.text(Math.round(x) + "%");
// 					},
// 					complete: function() {
// 						progressBarText.stop(true);
// 					}
// 				}
// 			);
// 		});






// 		$(window).off('scroll');


// 	}	
// });



//https://html5css.ru/howto/howto_js_scroll_indicator.php
//https://kingrayhan.github.io/LineProgressbar/demos.html
/*
http://jquerybook.ru/api/.animate()-fn14.html
http://w3pro.ru/book/spravochnik-jquery-api/metod-animate
http://w3.org.ua/jquery/funktsiya-animate-v-jquery/


http://natfolio.ru/portfolio.html
*/


//particlesJS
particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#2ecc71"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#2ecc71",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});






















// var skillsDiv = $('.progress-bars');


// $(window).off('scroll', test);


// $(window).on('scroll', function(event) {

// 	var winT = $(window).scrollTop();
// 	var winH = $(window).height();
// 	var skillsT = skillsDiv.offset().top;
			
// 	console.log('winT', winT);
// 	console.log('winH', winH);
// 	console.log('skillsT', skillsT);

//   if (winT + winH > skillsT) {
// 		test();
// 	}	
// });

// $(window).bind('scroll', function(){ 
// 	test(); 
// });

// function test() {
// 	//run code








// 	$(window).unbind('scroll.once')
// };







// $(window).off('scroll', test);


// if (winT + winH > skillsT) {
// 	test();
// }	



// function test() {

// 	$('.progress-bar').each(function(index, element) {

// 		var progressBarText = $(element).find('.progress-bar__text');
// 		var progressBarTextValue = progressBarText.text();
	
// 		progressBarText.animate(
// 			{
// 				width: progressBarTextValue
// 			},
// 			{
// 				duration: 5000,
// 				step: function(x) {
// 					progressBarText.text(Math.round(x) + "%");
// 				},
// 				// complete: function() {
// 				// 	progressBarText.stop(true);
// 				// }
// 			}
// 		);
// 	});

// }

































// //questions
// var $articleTitle = $('.article__title');
// $articleTitle.on('click', function() {
// 	$(this).toggleClass('article__title_active');
// 	$(this).siblings().slideToggle(500);
// });

// //consultation
// var $formConsultation = $('.js-formConsultation');
// $formConsultation.on('submit', function(event) {
// 	event.preventDefault();
// });

// //about
// var $videoButtonAbout = $('.js-videoButtonAbout');
// $videoButtonAbout.on('click', function() {	
// 	$(this).parent().html('<iframe class="video__iframe" src="https://www.youtube.com/embed/98qgCnn1SfI?autoplay=1" allowfullscreen></iframe>');
// });

// //reviews
// var $videosReviews = $('.js-videosReviews');
// var $videoReview = $('.js-videoReview');
// var $videoReviewButton = $('.js-videoReviewButton');

// $videoReviewButton.on('click', function() {
// 	$(this).parent().html('<iframe class="video__iframe" src="https://www.youtube.com/embed/98qgCnn1SfI?autoplay=1" allowfullscreen></iframe>');
// });





// // //Button go-up
// // var $goUp = $('.go-up');
// // var $buttonAppear = 500; //the distance at which the button appears
// // var $html =  $('html');

// // $goUp.on('click', function() {
// // 	$html.animate({scrollTop: 0}, 1000);
// // });

// // function showGoUp() {
		
// // 	if(	($window.scrollTop() > $buttonAppear) ) {
// // 		$goUp.fadeIn();
// // 	}

// // 	else {
// // 		$goUp.fadeOut();
// // 	}
// // }


// // //Event scroll
// // $window.on('scroll', function() {
// // 	showNav();
// // 	showGoUp();
// // 	// console.log( $window.scrollTop() );
// // });

// // //Mask
// // var $inputTel = $('input[type=tel]');
// // $inputTel.mask('(000) 000 00 00');




// // WOW.js
// // Animate.css
// // new WOW().init();

// //header
// var $headerTop = $('.js-headerTop');
// var $captionTitleSizeM = $('.js-captionTitleSizeM');
// var $captionTitleSizeL = $('.js-captionTitleSizeL');
// var $captionTitleSizeS = $('.js-captionTitleSizeS');
// var $booking = $('.js-booking');

// $headerTop.addClass('wow fadeInDown');
// // $headerTop.attr('data-wow-delay', 0 + 's');

// $captionTitleSizeM.addClass('wow fadeInDown');
// $captionTitleSizeM.attr('data-wow-delay', 1 + 's');

// $captionTitleSizeL.addClass('wow fadeInDown');
// $captionTitleSizeL.attr('data-wow-delay', 1 + 's');

// $captionTitleSizeS.addClass('wow fadeIn');
// $captionTitleSizeS.attr('data-wow-delay', 2 + 's');

// $booking.addClass('wow fadeIn');
// $booking.attr('data-wow-delay', 2 + 's');


// //dates
// var $dates = $('.js-dates');
// $dates.addClass('wow fadeIn');
// $dates.attr('data-wow-duration', 2 + 's');
// $dates.attr('data-wow-offset', 400);


// //about
// var $about = $('.js-about');
// var $aboutContainer = $('.js-aboutContainer');

// $aboutContainer.css({
// 	'display': 'none',
// 	'position': 'relative',
// });

// $aboutContainer.addClass('wow fadeIn');
// $aboutContainer.attr('data-wow-duration', 2 + 's');
// $aboutContainer.attr('data-wow-delay', 2 + 's');
// $aboutContainer.attr('data-wow-offset', 400);

// var $aboutContent = $('.js-aboutContent');
// $aboutContent.addClass('wow slideInUp');
// $aboutContent.attr('data-wow-duration', 5 + 's');
// // $aboutContainer.attr('data-wow-delay', 2 + 's');

// var $cloud = $('.js-cloud');
// $cloud.addClass('wow slideInDown');
// $cloud.attr('data-wow-duration', 3 + 's');
// $cloud.attr('data-wow-delay', 1 + 's');


// //advantages
// // var $advantagesContent = $('.js-advantagesContent');
// // $advantagesContent.addClass('wow fadeInUp');
// // $advantagesContent.attr('data-wow-duration', 2 + 's');
// // $advantagesContent.attr('data-wow-delay', 2 + 's');
// // $advantagesContent.attr('data-wow-offset', 500);

// // var $cards = $('.js-cards');
// // $cloud.addClass('wow slideInUp');
// // $cloud.attr('data-wow-duration', 3 + 's');
// // $cloud.attr('data-wow-delay', 1 + 's');

// var $card = $('.js-card');
// $card.addClass('wow fadeInDown');
// $card.attr('data-wow-offset', 300);
// doDelay($card);

// function doDelay(element) {
// 	var $initialDelay = 0;
// 	element.each(function(index, item) {
// 		var $resultDelay = $initialDelay+=0.05;
// 		var $resultDelayFix = +$resultDelay.toFixed(10);
// 		$(item).attr('data-wow-delay', $resultDelayFix + 's');
// 	});
// }


// //reviews
// var $reviews = $('.js-reviews');
// $reviews.addClass('wow fadeInUp');
// $reviews.attr('data-wow-duration', 2 + 's');
// $reviews.attr('data-wow-offset', 300);

// var $showMoreReviews = $('.js-showMoreReviews');
// $showMoreReviews.addClass('wow fadeIn');
// $showMoreReviews.attr('data-wow-duration', 2.5 + 's');


// //needs
// var $needs = $('.js-needs');
// $needs.addClass('wow fadeIn');
// $needs.attr('data-wow-duration', 2 + 's');
// $needs.attr('data-wow-offset', 500);

// var $formNeeds = $('.js-formNeeds');
// $formNeeds.addClass('wow fadeInUp');
// $formNeeds.attr('data-wow-duration', 2 + 's');
// $formNeeds.attr('data-wow-delay', 2 + 's');
// // $needs.attr('data-wow-offset', 300);

// //questions
// var $questions = $('.js-questions');
// var $questionsContainer = $('.js-questionsContainer');

// $questionsContainer.css({
// 	'display': 'none',
// 	'position': 'relative',
// });


// //consultation
// var $formConsultation = $('.js-formConsultation');
// $formConsultation.addClass('wow fadeInUp');
// $formConsultation.attr('data-wow-duration', 2 + 's');
// $formConsultation.attr('data-wow-offset', 300);


// // contacts
// var $contacts = $('.js-contacts');
// $contacts.addClass('wow fadeIn');
// $contacts.attr('data-wow-duration', 2 + 's');
// $contacts.attr('data-wow-offset', 300);

// var $addresses = $('.js-addresses');
// $addresses.addClass('wow fadeInLeft');
// $addresses.attr('data-wow-duration', 2.5 + 's');
// $addresses.attr('data-wow-offset', 300);

// var $map = $('.js-map');
// $map.addClass('wow fadeInRight');
// $map.attr('data-wow-duration', 2.5 + 's');
// $map.attr('data-wow-offset', 300);


// //footer
// var $footerContainer = $('.js-footerContainer');
// $footerContainer.addClass('wow fadeInUp');
// $footerContainer.attr('data-wow-duration', 2 + 's');




// //Event scroll
// function getDistance($element) {
// 	var $scrollTop = $(window).scrollTop();
// 	var $elementOffset = $element.offset().top;
// 	var $distance = ($elementOffset - $scrollTop);
// 	return $distance;
// }

// $(window).on('scroll', function() {

// 	if( getDistance($about) < 200 ) {
// 		$aboutContainer.slideDown(2000);
// 	}

// 	if( getDistance($questions) < 200 ) {
// 		$questionsContainer.slideDown(3000);
// 	}
// 	// console.log(getDistance($questions));

// });


