
var slideSpeed = 600;
var state = "home";

function setContentStyle(){

	$('#nav-bar').animate({color: 'black'},350);
	$('#nav-bar').animate({'background-color': 'white'},350);
	
}
function setHomeStyle(){
	

}


$(document).ready(function() {

	$(".main-container").hide();
	$("#nav-email-text").hide();
	setHomeStyle();

	$("#nav-about" ).click(function() { 

		if (state != "about"){

			$("#background-img").fadeOut(slideSpeed);
		 	$(".main-container").fadeOut(slideSpeed);
		 	$("#div-about").fadeIn(slideSpeed);

		 	state = "about";
	 	}
	 	else{

	 		$("#div-about").fadeOut(slideSpeed);
	 		$("#background-img").fadeIn(slideSpeed);
	 		state = "home";

	 	}
	});	

	$("#nav-music" ).click(function() { 

		if (state != "music"){
	 		
			$("#background-img").fadeOut(slideSpeed);
	 		$(".main-container").fadeOut(slideSpeed);
	 		$("#div-music").fadeIn(slideSpeed);

	 		state = "music";
	 		setContentStyle();
	 	}
	 	else{

	 		$("#div-music").fadeOut(slideSpeed);
	 		$("#background-img").fadeIn(slideSpeed);
	 		state = "home";
	 		setHomeStyle();

	 	}
	});	

	$("#nav-photographs" ).click(function() { 

		if (state != "photographs"){
	 		
			$("#background-img").fadeOut(slideSpeed);
	 		$(".main-container").fadeOut(slideSpeed);
	 		$("#div-photographs").fadeIn(slideSpeed);

	 		state = "photographs";
	 		setContentStyle();
	 	}
	 	else{

	 		$("#div-photographs").fadeOut(slideSpeed);
	 		$("#background-img").fadeIn(slideSpeed);
	 		state = "home";
	 		setHomeStyle();

	 	}
	});	

	$("#nav-email" ).click(function() { 

	 		$("#nav-email-text").animate({width:'toggle'},350);
	});	

});






