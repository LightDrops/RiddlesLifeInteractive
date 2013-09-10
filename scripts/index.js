$(document).ready(function () {



	parallax.add($("#home"))
			.add($("#services"))
			.add($("#vision"))
			.add($("#career"))
			.add($("#team"))
			.add($("#contact"));

// ----- NAVIGATION PRELOAD ----- //


parallax.home.preload=function(){
		
		
		$('#home-nav').css('color', 'black');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'white');
		$('.home-bubble').css('background-image', 'url("images/bubble-active.png")');
		$('.services-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.vision-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.career-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.team-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.contact-bubble').css('background-image', 'url("images/bubble-inactive.png")');
	};

parallax.services.preload=function(){
		
		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'black');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'white');
		$('.home-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.services-bubble').css('background-image', 'url("images/bubble-active.png")');
		$('.vision-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.career-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.team-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.contact-bubble').css('background-image', 'url("images/bubble-inactive.png")');
	
	};

parallax.vision.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'black');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'white');
		$('.home-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.services-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.vision-bubble').css('background-image', 'url("images/bubble-active.png")');
		$('.career-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.team-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.contact-bubble').css('background-image', 'url("images/bubble-inactive.png")');

	};

parallax.career.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'black');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'white');
		$('.home-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.services-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.vision-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.career-bubble').css('background-image', 'url("images/bubble-active.png")');
		$('.team-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.contact-bubble').css('background-image', 'url("images/bubble-inactive.png")');

	};

parallax.team.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'black');
		$('#contact-nav').css('color', 'white');
		$('.home-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.services-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.vision-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.career-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.team-bubble').css('background-image', 'url("images/bubble-active.png")');
		$('.contact-bubble').css('background-image', 'url("images/bubble-inactive.png")');

	};

parallax.contact.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'black');
		$('.home-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.services-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.vision-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.career-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.team-bubble').css('background-image', 'url("images/bubble-inactive.png")');
		$('.contact-bubble').css('background-image', 'url("images/bubble-active.png")');

	};


// ----- NAVIGATION ONLOAD ----- //


		parallax.home.onload=function(){
		$('#home-nav').css('color', 'black');
		setIgnoreHomeClick("home", " ");
		setService("services", " ");
		setVision("vision", " ");
		setCareer("career", " ");
		setTeam("team", " ");
		setContact("contact", " ");

	};

		parallax.services.onload=function(){

		setHome("home", " ");
		setIgnoreServiceClick("services", " ");
		setVision("vision", " ");
		setCareer("career", " ");
		setTeam("team", " ");
		setContact("contact", " ");
	};

		parallax.vision.onload=function(){

		setHome("home", " ");
		setService("services", " ");
		setIgnoreVisionClick("vision", " ");
		setCareer("career", " ");
		setTeam("team", " ");
		setContact("contact", " ");
	};

		parallax.career.onload=function(){

		setHome("home", " ");
		setService("services", " ");
		setVision("vision", " ");
		setIgnoreCareerClick("career", " ");
		setTeam("team", " ");
		setContact("contact", " ");
	};

		parallax.team.onload=function(){

		setHome("home", " ");
		setService("services", " ");
		setVision("vision", " ");
		setCareer("career", " ");
		setIgnoreTeamClick("team", " ");
		setContact("contact", " ");
	};

		parallax.contact.onload=function(){


		setHome("home", " ");
		setService("services", " ");
		setVision("vision", " ");
		setCareer("career", " ");
		setTeam("team", " ");
		setIgnoreContactClick("contact", " ");
	};


//----- Ignore ----- //

	function setIgnoreHomeClick(page, text){
		
		$("#home-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
		$("#home-bubble").show().unbind('click').click(function(){
			parallax[page]();
		});
		$("#company-logo").show().unbind('click').click(function(){
			parallax[page]();
		});

	}

	function setIgnoreServiceClick(page, text){
		
		$("#services-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
		$("#services-bubble").show().unbind('click').click(function(){
			parallax[page]();
		});

	}


	function setIgnoreVisionClick(page, text){

		$("#vision-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
		$("#vision-bubble").show().unbind('click').click(function(){
			parallax[page]();
		});
	}

	function setIgnoreCareerClick(page, text){
		
		$("#career-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
		$("#career-bubble").show().unbind('click').click(function(){
			parallax[page]();
		});
	}

	function setIgnoreTeamClick(page, text){
		
		$("#team-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
		$("#team-bubble").show().unbind('click').click(function(){
			parallax[page]();
		});
	}

	function setIgnoreContactClick(page, text){
		
		$("#contact-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
		$("#contact-bubble").show().unbind('click').click(function(){
			parallax[page]();
		});
	}


//----- Transition ----- //

	function setHome(page, text){
		
		$("#home-nav").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
		$("#home-bubble").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
		$("#company-logo").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
	}


	function setService(page, text){
		$("#services-nav").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
		$("#services-bubble").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
	}


	function setVision(page, text){
		
		$("#vision-nav").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
		$("#vision-bubble").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
	}


	function setCareer(page, text){
		
		$("#career-nav").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
		$("#career-bubble").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
	}

	function setTeam(page, text){
		
		$("#team-nav").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
		$("#team-bubble").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
	}


	function setContact(page, text){
		
		$("#contact-nav").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
		$("#contact-bubble").show().unbind('click').click(function(){
			hideAll();
			setTimeout(function(){parallax[page].right()},500);
		});
	}










 function hideAll(){
	
	$("#home-img").hide("slide", { direction: "left" }, 250 );
	$("#services-img").hide("slide", { direction: "left" }, 250 );
	$("#vision-img").hide("slide", { direction: "left" }, 250 );
	$("#career-img").hide("slide", { direction: "left" }, 250 );
	$("#team-img").hide("slide", { direction: "left" }, 250 );
	$("#contact-img").hide("slide", { direction: "left" }, 250 );


};


parallax.onload = function(){
	$("#home-img").show("slide", { direction: "left" }, 400);
	$("#services-img").show("slide", { direction: "left" }, 400);
	$("#vision-img").show("slide", { direction: "left" }, 400);
	$("#career-img").show("slide", { direction: "left" }, 400);
	$("#team-img").show("slide", { direction: "left" }, 400);
	$("#contact-img").show("slide", { direction: "left" }, 400);
};



parallax.home.show();
parallax.speed = 800;





});
