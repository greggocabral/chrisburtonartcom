
var slideSpeed = 600;
var state = "home";


$(document).ready(function() {

	$(".main-container").hide();
	$("#nav-email-text").hide();
	$("body").css('color','white');
	$("a").css('color','white');

	$("#nav-about" ).click(function() { 

		if (state != "about"){

			$("#background-img").fadeOut(slideSpeed);
		 	$(".main-container").fadeOut(slideSpeed);
		 	$("#div-about").fadeIn(slideSpeed);
		 	$("body").css('color','black');
	 		$("a").css('color','black');
		 	state = "about";
	 	}
	 	else{

	 		$("#div-about").fadeOut(slideSpeed);
	 		$("#background-img").fadeIn(slideSpeed);
	 		$("body").css('color','white');
	 		$("a").css('color','white');
	 		state = "home";

	 	}
	});	

	$("#nav-music" ).click(function() { 

		if (state != "music"){
	 		
			$("#background-img").fadeOut(slideSpeed);
	 		$(".main-container").fadeOut(slideSpeed);
	 		$("#div-music").fadeIn(slideSpeed);
		 	$("body").css('color','black');
	 		$("a").css('color','black');

	 		state = "music";
	 	}
	 	else{

	 		$("#div-music").fadeOut(slideSpeed);
	 		$("#background-img").fadeIn(slideSpeed);
	 		$("body").css('color','white');
	 		$("a").css('color','white');
	 		state = "home";

	 	}
	});	

	$("#nav-photographs" ).click(function() { 

		if (state != "photographs"){
	 		
			$("#background-img").fadeOut(slideSpeed);
	 		$(".main-container").fadeOut(slideSpeed);
	 		$("#div-photographs").fadeIn(slideSpeed);
		 	$("body").css('color','black');
	 		$("a").css('color','black');

	 		state = "photographs";
	 	}
	 	else{

	 		$("#div-photographs").fadeOut(slideSpeed);
	 		$("#background-img").fadeIn(slideSpeed);
	 		$("body").css('color','white');
	 		$("a").css('color','white');
	 		state = "home";

	 	}
	});	

	$("#nav-email" ).click(function() { 

	 		$("#nav-email-text").animate({width:'toggle'},350);
	});	

});






