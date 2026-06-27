(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		jQuery(window).on('load',function() {
		  setTimeout(function(){
			$('.preloaders').fadeToggle();
			}, 300);
		});
		/*END PRELOADER JS*/	
			
		/*START MENU JS*/		
			$(".mobile_menu").simpleMobileMenu({			
				"menuStyle": "slide"
			});
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});	
		/*END MENU JS*/
		
		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		$('.co-video-play').magnificPopup({
            type: 'iframe'
        });
		$('.product_item').mixItUp();
		/*END VIDEO JS*/	

		/* START VIDEO POPUP JS */
		$('.magnific_popup').magnificPopup({
		  disableOn: 700,
		  type: 'iframe',
		  mainClass: 'mfp-fade',
		  removalDelay: 160,
		  preloader: false,
		  fixedContentPos: false
		});			

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
		  autoPlay: 3000,
		  items : 4,
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [979,3]
		});
		/*END PARTNER LOGO*/		

		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		   items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[980,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:true,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/

		/* START EVENT JS */
		 $("#event-slider").owlCarousel({
			items:3,
			itemsDesktop:[1199,3],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[600,1],
			pagination: false,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});
		/* END EVENT JS */	
		
			
	}); 		
	
	/*START RANGE SLIDER*/
	    var rangeSlider = function(){
        var slider = $('.range-slider'),
            range = $('.range-slider input[type="range"]'),
            value = $('.range-value');
        slider.each(function(){
            value.each(function(){
                var value = $(this).prev().attr('value');
                $(this).html(value);
            });
            range.on('input', function(){
                $(this).next(value).html(this.value);
            });
        });
    };
    rangeSlider();
	/*END RANGE SLIDER*/
	
	/*COUNTER ANIMATION WITH INTERSECTION OBSERVER*/
	function animateCounter(element, target) {
		var current = 0;
		var increment = Math.ceil(target / 60);
		var timer = setInterval(function() {
			current += increment;
			if (current >= target) {
				current = target;
				clearInterval(timer);
			}
			element.textContent = current;
		}, 16);
	}

	var observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting) {
				var counters = entry.target.querySelectorAll('.counter-num');
				counters.forEach(function(counter) {
					animateCounter(counter, parseInt(counter.textContent));
				});
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.5 });

	document.addEventListener('DOMContentLoaded', function() {
		var counterSection = document.querySelector('.counter_feature');
		if (counterSection) {
			observer.observe(counterSection);
		}
	});
	/*END COUNTER ANIMATION*/
	
	/*SMOOTH SCROLL - NATIVE CSS*/
			
})(jQuery);
