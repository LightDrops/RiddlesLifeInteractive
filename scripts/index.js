$(document).ready(function () {


	parallax.add($("#home"))
			.add($("#services"))
			.add($("#vision"))
			.add($("#career"))
			.add($("#team"))
			.add($("#contact"));

// ----- Page Functions ----- //


parallax.home.preload=function(){
		parallax.last=function(){
			$("img").hide("slide", { direction: "left" }, 250 );
		}
		$('#home-nav').css('color', 'black');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'white');

	};

parallax.services.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'black');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'white');

	};

parallax.vision.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'black');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'white');

	};

parallax.career.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'black');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'white');

	};

parallax.team.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'black');
		$('#contact-nav').css('color', 'white');

	};

parallax.contact.preload=function(){

		$('#home-nav').css('color', 'white');
		$('#services-nav').css('color', 'white');
		$('#vision-nav').css('color', 'white');
		$('#career-nav').css('color', 'white');
		$('#team-nav').css('color', 'white');
		$('#contact-nav').css('color', 'black');

	};



		parallax.home.onload=function(){


		setIgnoreHomeClick("home", " ");
		setRightService("services", " ");
		setRightVision("vision", " ");
		setRightCareer("career", " ");
		setRightTeam("team", " ");
		setRightContact("contact", " ");
	};

		parallax.services.onload=function(){

		setLeftHome("home", " ");
		setIgnoreServiceClick("services", " ");
		setRightVision("vision", " ");
		setRightCareer("career", " ");
		setRightTeam("team", " ");
		setRightContact("contact", " ");
	};

		parallax.vision.onload=function(){

		setLeftHome("home", " ");
		setLeftService("services", " ");
		setIgnoreVisionClick("vision", " ");
		setRightCareer("career", " ");
		setRightTeam("team", " ");
		setRightContact("contact", " ");
	};

		parallax.career.onload=function(){

		setLeftHome("home", " ");
		setLeftService("services", " ");
		setLeftVision("vision", " ");
		setIgnoreCareerClick("career", " ");
		setRightTeam("team", " ");
		setRightContact("contact", " ");
	};

		parallax.team.onload=function(){

		setLeftHome("home", " ");
		setLeftService("services", " ");
		setLeftVision("vision", " ");
		setLeftCareer("career", " ");
		setIgnoreTeamClick("team", " ");
		setRightContact("contact", " ");
	};

		parallax.contact.onload=function(){


		setLeftHome("home", " ");
		setLeftService("services", " ");
		setLeftVision("vision", " ");
		setLeftCareer("career", " ");
		setLeftTeam("team", " ");
		setIgnoreContactClick("contact", " ");
	};


//----- Ignore ----- //

	function setIgnoreHomeClick(page, text){
		
		$("#home-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
	}

	function setIgnoreServiceClick(page, text){
		
		$("#services-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
	}


	function setIgnoreVisionClick(page, text){

		$("#vision-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
	}

	function setIgnoreCareerClick(page, text){
		
		$("#career-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
	}

	function setIgnoreTeamClick(page, text){
		
		$("#team-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
	}

	function setIgnoreContactClick(page, text){
		
		$("#contact-nav").show().unbind('click').click(function(){
			parallax[page]();
		});
	}



	//----- Transition ----- //

	function setRightHome(page, text){
		
		$("#home-nav").show().unbind('click').click(function(){
			parallax[page].right();

		});
	}

	function setLeftHome(page, text){
		
		$("#home-nav").show().unbind('click').click(function(){
			parallax[page].left();
			
			
		});
	}

	function setRightService(page, text){





		$("#services-nav").show().unbind('click').click(function(){
			parallax[page].right();



		});
	}


	function setLeftService(page, text){
		
		$("#services-nav").show().unbind('click').click(function(){
			parallax[page].left();
			
		});
	}

	function setRightVision(page, text){
		
		$("#vision-nav").show().unbind('click').click(function(){
			parallax[page].right();
		});
	}


	function setLeftVision(page, text){
		
		$("#vision-nav").show().unbind('click').click(function(){
			parallax[page].left();
		});
	}

	function setRightCareer(page, text){
		
		$("#career-nav").show().unbind('click').click(function(){
			parallax[page].right();
		});
	}


	function setLeftCareer(page, text){
		
		$("#career-nav").show().unbind('click').click(function(){
			parallax[page].left();
		});
	}

	function setRightTeam(page, text){
		
		$("#team-nav").show().unbind('click').click(function(){
			parallax[page].right();
		});
	}


	function setLeftTeam(page, text){
		
		$("#team-nav").show().unbind('click').click(function(){
			parallax[page].left();
		});
	}

	function setRightContact(page, text){
		
		$("#contact-nav").show().unbind('click').click(function(){
			parallax[page].right();
		});
	}


	function setLeftContact(page, text){
		
		$("#contact-nav").show().unbind('click').click(function(){
			parallax[page].left();
		});
	}



/*

parallax.preload = function(){
	
	$("#home-img").hide("slide", { direction: "left" }, 250 );
	$("#services-img").hide("slide", { direction: "left" }, 250 );
	$("#vision-img").hide("slide", { direction: "left" }, 250 );
	$("#career-img").hide("slide", { direction: "left" }, 250 );
	$("#team-img").hide("slide", { direction: "left" }, 250 );
	$("#contact-img").hide("slide", { direction: "left" }, 250 );
};

parallax.onload = function(){
	$("#home-img").show("slide", { direction: "left" }, 250);
	$("#services-img").show("slide", { direction: "left" }, 250);
	$("#vision-img").show("slide", { direction: "left" }, 250);
	$("#career-img").show("slide", { direction: "left" }, 250);
	$("#team-img").show("slide", { direction: "left" }, 250);
	$("#contact-img").show("slide", { direction: "left" }, 250);
};

*/

parallax.home.show();
parallax.speed = 750;
parallax.scaling = 'linear';

});
