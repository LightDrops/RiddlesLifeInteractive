$(document).ready(function () {


	parallax.add($("#home"))
			.add($("#services"))
			.add($("#vision"))
			.add($("#career"))
			.add($("#team"))
			.add($("#contact"));

	parallax.background = $("body");

//------------------------------------------------------------

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
//-------------------------------------------------------------

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



	//---------------------------------------------------------

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

parallax.home.show();

});
