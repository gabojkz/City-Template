	//wow.js init Script
	new WOW().init();

	//Taxi Animation
	$('.taxi').click(function(){
	$(this).addClass('animated bounceOutLeft');
	});

	//Preloader Script
	$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow');//this is connected with the responsive div menu 
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
	})

