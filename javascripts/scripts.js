
var slideSpeed = 600;


$(document).ready(function() {

	$(".main-container").hide();
	$("#nav-email-text").hide();

	$("#nav-about" ).click(function() { 

		    // $("#nav-email-text").animate({width: 0},350);
	 		
	 		$(".main-container").slideUp(400);

	 		$("#div-about").slideDown(slideSpeed);
	});	

	$("#nav-music" ).click(function() { 

		    // $("#nav-email-text").animate({width: 0},350);
	 		
	 		$(".main-container").slideUp(400);

	 		$("#div-music").slideDown(slideSpeed);
	});	

	$("#nav-photographs" ).click(function() { 

			// $("#nav-email-text").hide().animate(350);
	 		
	 		$(".main-container").slideUp(400);

	 		$("#div-photographs").slideDown(slideSpeed);
	});	

	$("#nav-email" ).click(function() { 

	 		$("#nav-email-text").animate({width:'toggle'},350);
	});	

});






