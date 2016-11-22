var sliderP = $(".slider-p");

$(".slider-p section:last").insertBefore(".slider-p section:first");

sliderP.css("margin-left","-"+100+"%");

function moverP(){
	sliderP.animate({marginLeft:"-"+200+"%"},700, 
		function(){
			$(".slider-p section:first").insertAfter(".slider-p section:last");
			sliderP.css("margin-left", "-"+100+"%");
		});
};

function autoPlayP (){
	interval = setInterval(function(){
		moverP()
	}, 5000)
};

autoPlayP();