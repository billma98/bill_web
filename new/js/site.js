"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
/* Preloader and animations */
$(document).ready(function () {
    const prioritizedImage = "new/images/banner-images/bill_with_mv_slc.jpg"; // Path to the image you want to load first
    const img = new Image(); // Create a new image object

    img.onload = function () {
        // Hide the preloader once the image is loaded
        $('#status').fadeOut(); // Hide preloader animation
        $('#preloader').fadeOut('slow'); // Hide preloader background
        $('body').css({ 'overflow-y': 'visible' }); // Enable scrolling

        // Initialize WOW.js for animations
        if (typeof WOW == 'function') {
            new WOW().init();
        }

        // Initialize Parallax effects if enllax.js is included
        if (!!$.prototype.enllax) {
            $(window).enllax();
        }
    };

    img.onerror = function () {
        console.error(`Failed to load prioritized image: ${prioritizedImage}`);
        // You can still hide the preloader if the image fails to load
        $('#status').fadeOut();
        $('#preloader').fadeOut('slow');
        $('body').css({ 'overflow-y': 'visible' });
    };

    // Start loading the prioritized image
    img.src = prioritizedImage;
});

