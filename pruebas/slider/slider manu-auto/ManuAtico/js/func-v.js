var sliderV = $(".slider-v");
var botonSiguienteV = $(".btn-next-v");
var botonAnteriorV = $(".btn-prev-v");

$(".slider-v section:last").insertBefore(".slider-v section:first");

sliderV.css("margin-left","-"+100+"%");

function moverDV(){
	sliderV.animate({marginLeft:"-"+200+"%"},700, 
		function(){
			$(".slider-v section:first").insertAfter(".slider-v section:last");
			sliderV.css("margin-left", "-"+100+"%");
		});
}


botonSiguienteV.on("click", function(){
	moverDV();
});
function moverIV(){
	sliderV.animate({marginLeft:0},700, 
		function(){
			$(".slider-v section:last").insertBefore(".slider-v section:first");
			sliderV.css("margin-left", "-"+100+"%");
		});
}


botonAnteriorV.on("click", function(){
	moverIV();
});

function autoPlayV (){
	interval = setInterval(function(){
		moverDV()
	}, 5000)
}

autoPlayV();