var slider = $(".slider-a");
var botonSiguiente = $(".btn-next-a");
var botonAnterior = $(".btn-prev-a");

$(".slider-a section:last").insertBefore(".slider-a section:first");

slider.css("margin-left","-"+100+"%");

function moverDA(){
	slider.animate({marginLeft:"-"+200+"%"},700, 
		function(){
			$(".slider-a section:first").insertAfter(".slider-a section:last");
			slider.css("margin-left", "-"+100+"%");
		});
}


botonSiguiente.on("click", function(){
	moverDA();
});
function moverIA(){
	slider.animate({marginLeft:0},700, 
		function(){
			$(".slider-a section:last").insertBefore(".slider-a section:first");
			slider.css("margin-left", "-"+100+"%");
		});
}


botonAnterior.on("click", function(){
	moverIA();
});

function autoPlay (){
	interval = setInterval(function(){
		moverDA()
	}, 5000)
}

autoPlay();