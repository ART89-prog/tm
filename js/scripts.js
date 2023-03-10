$(() => {


	// Ширина окна для ресайза
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	// Fancybox.defaults.template = {
	// 	closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
	// 	spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
	// 	main: null
	// }



	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		Fancybox.close(true)
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline',
		}]);
	})



	$('input[type=tel]').inputmask('+7 (999) 999-99-99')


	// Скрол к контактам
	$(".scroll").on("click", function (e) {
		e.preventDefault();
		let id = $(this).attr("href");

		$("html, body").animate({
			scrollTop: $(id).offset().top
		}, {
			duration: 1500,
			easing: "swing"
		});
	});


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})



	$('.show-more').click(function () {
		$('.hide-content').css('display', 'flex');
		$('.show-more').remove();
		return false;
	});



	// Слайдер ОТзывы

	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach(function (el, i) {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				480: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 0,
					slidesPerView: 1
				},
				1280: {
					spaceBetween: 0,
					slidesPerView: 1
				}
			},

		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	const slider = document.querySelector('.slider');
	const sl = new Swiper(slider, {
		// slidesPerView: 'auto',
		loop: true,
		spaceBetween: 22,
		lazy: {
			enabled: true,
			checkInView: true,
			loadOnTransitionStart: true,
			loadPrevNext: true
		},
		speed: 5000,
		slidesPerView: '9',
		autoplay: {
			enabled: true,
			delay: 1,
		},
		breakpoints: {
			0: {
				spaceBetween: 22,
				slidesPerView: 2
			},
			480: {
				spaceBetween: 22,
				slidesPerView: 3
			},
			768: {
				spaceBetween: 22,
				slidesPerView: 4
			},
			1024: {
				spaceBetween: 22,
				slidesPerView: 5
			},
			1370: {
				spaceBetween: 22,
				slidesPerView: 7
			}
		},
	});


	const slider2 = document.querySelector('.slider2');
	const sl2 = new Swiper(slider2, {
		slidesPerView: 'auto',
		loop: true,
		speed: 5000,
		autoplay: {
			enabled: true,
			delay: 1,
		},
	}); 

	const slider3 = document.querySelector('.slider3');
	const sl3 = new Swiper(slider3, {
		slidesPerView: 'auto',
		loop: true,
		speed: 5000,
		autoplay: {
			enabled: true,
			delay: 1,
		},
	}); 

	const slider4 = document.querySelector('.slider4');
	const sl4 = new Swiper(slider4, {
		slidesPerView: 'auto',
		loop: true,
		speed: 5000,
		autoplay: {
			enabled: true,
			delay: 1,
		},
	}); 



	$(window).on('resize', () => {
		let windowW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth

		if (typeof WW !== 'undefined' && WW != windowW) {
			// Моб. версия
			if (!firstResize) {
				document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'

				if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'

				firstResize = true
			} else {
				firstResize = false
			}






			// Перезапись ширины окна
			WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
		}
	})


})