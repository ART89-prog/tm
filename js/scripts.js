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

	Fancybox.defaults.template = {
		// closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}



	$('body').on('click', '.modal_link', function (e) {
	    e.preventDefault()

	    $.fancybox.close(true)

	    $.fancybox.open({
	        src: $(this).data('content'),
	        type: 'inline',
	        touch: false
	    })
	})



	$('input[type=tel]').inputmask('+7 (999) 999-99-99')



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



	$('.show-more').click(function(){
		$('.hide-content').css('display', 'flex');
    $('.show-more').remove();     
		return false;
	});



	// Слайдер Услуги

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
		on: {
		init: swiper => {
			setTimeout(() => setHeight($(swiper.$el).find('.swiper-slide')))
		},
		resize: swiper => {
			setTimeout(() => {
			$(swiper.$el).find('.swiper-slide').height('auto')
			setHeight($(swiper.$el).find('.swiper-slide'))
			})
		}
		}
	}

	reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})
  




    

$(window).on('resize', () => {
	let windowW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Моб. версия
		if (!firstResize) {
			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'

			firstResize = true
		} else {
			firstResize = false
		}


		


		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	}
})


})