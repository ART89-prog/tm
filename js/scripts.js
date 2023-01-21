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
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
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