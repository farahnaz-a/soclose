(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
        // preLoader();
		headerHeightFixer();
		dropdownAnimation();
    });
	/* Document on Resize functions */
	$(window).on('resize', function () {
		headerHeightFixer();
    });

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

	/* Bootstrap form validation init */
	(function(){
		window.addEventListener('load', function() {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName('needs-validation');
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(forms, function(form) {
			  form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
				  event.preventDefault();
				  event.stopPropagation();
				}
				form.classList.add('was-validated');
			  }, false);
			});
		}, false);
	})()


	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').innerHeight() / 2) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Fix Header Height function */
	$(document).ready(function () {
		$('header').before('<div class="header-height-fix"></div>');
	});
    function headerHeightFixer(){
    	$('.header-height-fix').css('height', $('header').outerHeight() - 2 +'px');
	};

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

	/* Dropdown Animation Function */
	function dropdownAnimation(){
		if (window.matchMedia("(max-width: 991px)").matches) {
			// Add slideDown animation to Bootstrap dropdown when expanding.
			$('.dropdown').on('show.bs.dropdown', function() {
				$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
			});
			// Add slideUp animation to Bootstrap dropdown when collapsing.
			$('.dropdown').on('hide.bs.dropdown', function() {
				$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
			});
		}
	};

	/* Language Image Change function */
	$('.language-menu .dropdown-item').on("click", function(){
		let clickedFlag = $(this).find(".dropdown-item__image").attr("src");
		$(".language-preview-image").attr("src", clickedFlag);
	});

	/* Current Year function */
	(function(){
		const currentYear =  new Date().getFullYear();
		$("#current-year").text(currentYear);
	})();

	/* Pricing Plan function */
	$.fn.extend({
		toggleText: function(a, b){
			return this.text(this.text() == b ? a : b);
		}
	});

	$('.pricing__card__action__btn').on("click", function(){
		$(this).toggleText('+ Show plan features', '- Hide plan features');
  		$(this).parent().parent().find(".pricing__card__body").slideToggle();
	});

	$("#pricing__checkbox").on("change", function(e){
		if(e.target.checked){
			$(".yearly").removeClass("d-none");
			$(".monthly").addClass("d-none");
		}else{
			$(".yearly").addClass("d-none");
			$(".monthly").removeClass("d-none");
		}
	})


	/* Feather icon function */
	feather.replace({width: '1em', height: '1em'});

	/* Tabs Slider function */
	// (function(){
	// 	let tabChangeDuration = 2000;
	// 	// Tab-Pane change function
	// 	let tabChangeFunction = function(){
	// 		let allTabs = $('.nav-pills .nav-item .nav-link');
	// 		let activeTab = allTabs.filter('.active');
	// 		let nextTab = activeTab.parent().next('.nav-item').length ? activeTab.parent().next('.nav-item').find('.nav-link') : allTabs.parent().filter('.nav-item:first-child').find('.nav-link');
	// 		// Bootsrap tab show, para ativar a tab
	// 		nextTab.tab('show');
	// 	}
	// 	// Tab Slide function
	// 	let tabChangeInterval = setInterval(tabChangeFunction, tabChangeDuration);
	// 	// Tab click event handler
	// 	$(function(){
	// 		$('.nav-pills .nav-link').click(function(e) {
	// 			e.preventDefault();
	// 			// Parar o loop
	// 			clearInterval(tabChangeInterval);
	// 			// mosta o tab clicado, default bootstrap
	// 			$(this).tab('show');
	// 			// Inicia o ciclo outra vez
	// 			setTimeout(function(){
	// 				tabChangeInterval = setInterval(tabChangeFunction, tabChangeDuration)
	// 			}, tabChangeDuration);
	// 		});
	// 	});
	// })()


    /*  Banner slider */
    $(".testimonial__slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
		fade: true,
		cssEase: 'linear',
        arrows: true,
        prevArrow: '<button class="slick__arrows slick__arrows--left rounded-circle d-inline-flex align-items-center justify-content-center position-absolute"><img src="./assets/images/icons/arrow-left-dark.svg" class="slick__arrows__image w-100"></button>',
		nextArrow: '<button class="slick__arrows slick__arrows--right rounded-circle d-inline-flex align-items-center justify-content-center position-absolute"><img src="./assets/images/icons/arrow-right-dark.svg" class="slick__arrows__image w-100"></button>',
        dots: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: false,
    });

    /* veno box */
    $('.venobox').venobox({
        bgcolor: '#ffffff',
        spinner: 'three-bounce',
    });

})(jQuery);