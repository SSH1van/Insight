$(function () {
	/*	Services  */
	$(".services_text").on("click", function (event) {
		event.preventDefault();

		let thisId = $(this);
		var width = thisId.width();
		var height = thisId.height();

		if (width < 200 || height < 35) {
			thisId.toggleClass("show_first");
			setTimeout(function () {
				thisId.toggleClass("show_second");
			}, 300);
		} else {
			thisId.toggleClass("show_second");
			setTimeout(function () {
				thisId.toggleClass("show_first");
			}, 800);
		}
	});

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
	let active = $("#header");

	let nav1 = $("#nav1");
	let nav2 = $("#nav2");
	let nav3 = $("#nav3");
	let nav4 = $("#nav4");
	let logo = $("#logo");

	checkScroll(scrollPosLast, scrollPos);

	$("#headerHover").hover(function () {
		header.removeClass("fixed");
	});


	logo.mouseenter(function () {
		nav1.removeClass("active");
		nav2.removeClass("active");
		nav3.removeClass("active");
		nav4.removeClass("active");
	});

	logo.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	nav1.mouseenter(function () {
		nav2.removeClass("active");
		nav3.removeClass("active");
		nav4.removeClass("active");
	});

	nav1.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	nav2.mouseenter(function () {
		nav1.removeClass("active");
		nav3.removeClass("active");
		nav4.removeClass("active");
	});

	nav2.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	nav3.mouseenter(function () {
		nav1.removeClass("active");
		nav2.removeClass("active");
		nav4.removeClass("active");
	});

	nav3.mouseout(function () {
		chekScrollPos(scrollPos);
	});

	nav4.mouseenter(function () {
		nav1.removeClass("active");
		nav2.removeClass("active");
		nav3.removeClass("active");
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
		if (scrollPos < about.offset().top) {
			nav1.removeClass("active");
			nav2.removeClass("active");
			nav3.removeClass("active");
			nav4.removeClass("active");
		} else if (scrollPos > about.offset().top - 1 && scrollPos < possibility.offset().top) {
			nav1.addClass("active");
			nav2.removeClass("active");
			nav3.removeClass("active");
		} else if (scrollPos > possibility.offset().top - 1 && scrollPos < members.offset().top) {
			nav2.addClass("active");
			nav1.removeClass("active");
			nav3.removeClass("active");
		} else if (scrollPos > members.offset().top - 1 && scrollPos < members.offset().top + member.height() * 4 / 5) {
			nav3.addClass("active");
			nav2.removeClass("active");
			nav4.removeClass("active");
		} else if (scrollPos > members.offset().top + member.height() * 4 / 5 - 1) {
			nav4.addClass("active");
			nav3.removeClass("active");
		}
	}


	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		headerNav.removeClass("show");

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		console.log(elementOffset);

		$("html, body").animate({
			scrollTop: elementOffset
		}, 700);
	});


	/* Members https://kenwheeler.github.io/slick/ */
	let slider = $("#membersSlider");

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: false,
		arrows: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000,
		touchThreshold: 100,
		speed: 270
	});


	/* Without hover for mobile */
	$("[data-nohover]").on("click", function () {
		let elementThisId = $(this).data("nohover");
		let elementThisOffset = $(elementThisId).select();

		elementThisOffset.toggleClass("click");
	});

	/* Burger menu */
	let burger = $("#burger");
	let headerNav = $("#headerNav");

	burger.on("click", function () {
		headerNav.toggleClass("show");
	});

	$(window).resize(function () {
		headerNav.removeClass("show");
	});
});
