function ambientes(){
			$("#popo").on("click", function(){
				var aptitud = $("#aptos").val();
				var ambientes = $("#ambients").val();
				var tipo = $("#tipo").val();
				if (ambientes==ambientes && aptitud==aptitud && tipo==tipo){
					$(".propiedad").hide();
					$("."+ambientes+"."+aptitud+"."+tipo).fadeIn();
					console.log(ambientes);
}})
};

$( function (){
	var todo = $("#caca");
	$(".propiedad").hide(0);
	ambientes();
	//apt();
});