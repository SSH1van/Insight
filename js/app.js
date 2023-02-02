$(function () {
	/*	Services  */
	$(".services_text").on("click", function (event) {
		event.preventDefault();

		let thisId = $(this);
		var width = thisId.width();
		var height = thisId.height();

		if ($(window).width() > 1250) {
			var time1 = 160;
			var time2 = 500;
		} else if ($(window).width() > 767) {
			var time1 = 300;
			var time2 = 500;
		} else if ($(window).width() > 536) {
			var time1 = 300;
			var time2 = 550;
		} else {
			var time1 = 200;
			var time2 = 500;
		}

		servicesOpen(thisId, width, height, time1, time2);
	});

	function servicesOpen(thisId, width, height, time1, time2) {
		if (width < 200 || height < 35) {
			thisId.toggleClass("show_first");
			setTimeout(function () {
				thisId.toggleClass("show_second");
			}, time1);
		} else {
			thisId.toggleClass("show_second");
			setTimeout(function () {
				thisId.toggleClass("show_first");
			}, time2);
		}
	}


	/* Fixed Header */
	let header = $("#header");

	let intro = $("#intro");
	let about = $("#about");
	let possibility = $("#possibility");
	let members = $("#members");
	let services = $("#services");

	let member = $("#member");

	let scrollPosLast = $(window).scrollTop();
	let scrollPos = $(window).scrollTop();

	let logo = $("#logo");
	let nav1 = $("#nav1");
	let nav2 = $("#nav2");
	let nav3 = $("#nav3");
	let nav4 = $("#nav4");

	checkScroll(scrollPosLast, scrollPos);
	chekScrollPos(scrollPos);

	$("#headerHover").hover(function () {
		header.removeClass("fixed");
	});

	logo.mouseenter(function () {
		let active = $(".nav.active");
		active.removeClass("active");
	});
	logo.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	nav1.mouseenter(function () {
		let active = $(".nav.active");
		active.removeClass("active");
	});
	nav1.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	nav2.mouseenter(function () {
		let active = $(".nav.active");
		active.removeClass("active");
	});
	nav2.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	nav3.mouseenter(function () {
		let active = $(".nav.active");
		active.removeClass("active");
	});
	nav3.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	nav4.mouseenter(function () {
		let active = $(".nav.active");
		active.removeClass("active");
	});
	nav4.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	$(window).on("scroll resize", function () {
		scrollPosLast = scrollPos;
		scrollPos = $(this).scrollTop();

		chekScrollPos(scrollPos);
		checkScroll(scrollPosLast, scrollPos);
	});

	function checkScroll(scrollPosLast, scrollPos) {
		if (scrollPos > scrollPosLast) {
			header.addClass("fixed");
			headerNav.removeClass("show");
		} else if (scrollPos < scrollPosLast || scrollPos == 0) {
			header.removeClass("fixed");
		}
	}

	function chekScrollPos(scrollPos) {
		let active = $(".nav.active");

		if (scrollPos < about.offset().top) {
			active.removeClass("active");
		} else if (scrollPos > about.offset().top - 1 && scrollPos < possibility.offset().top) {
			active.removeClass("active");
			nav1.addClass("active");
		} else if (scrollPos > possibility.offset().top - 1 && scrollPos < members.offset().top) {
			active.removeClass("active");
			nav2.addClass("active");
		} else if (scrollPos > members.offset().top - 1 && scrollPos < members.offset().top + member.height() * 4 / 5) {
			active.removeClass("active");
			nav3.addClass("active");
		} else if (scrollPos > members.offset().top + member.height() * 4 / 5 - 1) {
			active.removeClass("active");
			nav4.addClass("active");
		}
	}


	/* Smooth scroll */
	//	$("[data-scroll]").on("click", function (event) {
	//		headerNav.removeClass("show");
	//
	//		let elementId = $(this).data("scroll");
	//		let elementOffset = $(elementId).offset().top;
	//
	//		$("html, body").animate({
	//			scrollTop: elementOffset
	//		}, 700);
	//	});


	/* Members https://kenwheeler.github.io/slick/ */
	let slider = $("#membersSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		arrows: true,
		dots: true,
		autoplay: false,
		autoplaySpeed: 5000,
		touchThreshold: 100,
		speed: 270
	});


	/* Without hover for mobile */
	/* For block About */
	$("[data-nohover]").on("click", function () {
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			let elementThisId = $(this).data("nohover");
			let elementThisOffset = $(elementThisId).select();

			elementThisOffset.toggleClass("click");
		}
	});

	/* For another */
	$("[data-withouthover]").on("click", function (event) {
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			let elementId = $(this).data("withouthover");
			let elementSelect = $(elementId).select();

			elementSelect.addClass("noHover");
		}
	});

	/* For arrow slider's */
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
		let prev = $(".slick-prev");
		let next = $(".slick-next");

		prev.addClass("noHover");
		next.addClass("noHover");
	}


	/* Burger menu */
	let burger = $("#burger");
	let headerNav = $("#headerNav");

	burger.on("click", function () {
		headerNav.toggleClass("show");
	});

	$(window).resize(function () {
		headerNav.removeClass("show");
	});


	/* Smooth scroll Intro on mobile device */
	let pos = $(window).scrollTop();
	let posLast = pos;
	let control = pos;
	$(window).scroll(function () {
		if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
			if (pos == 0 && posLast == 0) {
				posLast = pos;
				pos = $(this).scrollTop();
				control = $(this).scrollTop();
			} else if (control <  $(this).height()) {
				control = $(this).scrollTop();
			}

			if (pos > posLast && pos > 0) {
				pos = -1;
				$("html, body").animate({
					scrollTop: ($(this).height() - 20)
				}, 700);
				console.log("Down");
			} else if (nav1.hasClass("active")) {
				pos = 0;
				posLast = 0;
			}



			// else if ((pos != -1 && posLast != 0)) {
//				$("html, body").animate({
//					scrollTop: 0
//				}, 700);
//				console.log("Up");
//			} else if (control < $(this).height()) {
//
//			}
		};
	});
});
