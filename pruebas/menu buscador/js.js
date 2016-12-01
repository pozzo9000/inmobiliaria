function ambientes(){
			$("#popo").on("click", function(){
				var aptitud = $("#aptos").val();
				var ambientes = $("#ambients").val();
				var tipo = $("#tipo").val();
				if (ambientes==ambientes && aptitud==aptitud){
					$(".propiedad").hide();
					$("."+ambientes+"."+aptitud+"."+tipo).fadeIn();
					console.log(ambientes);
					console.log(tipo);
}})
};

$( function (){
	var todo = $("#caca");
	$(".propiedad").hide(0);
	ambientes();
	//apt();
});