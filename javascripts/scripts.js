
var slideSpeed = 600;


$(document).ready(function() {

	$(".main-container").hide();

	$("#nav-about" ).click(function() { 
	 		
	 		$(".main-container").slideUp(400);

	 		$("#div-about").slideDown(slideSpeed);
	});	

	$("#nav-music" ).click(function() { 
	 		
	 		$(".main-container").slideUp(400);

	 		$("#div-music").slideDown(slideSpeed);
	});	

	$("#nav-photographs" ).click(function() { 
	 		
	 		$(".main-container").slideUp(400);

	 		$("#div-photographs").slideDown(slideSpeed);
	});	
});






