function apt (){
			$("#popo").on("click", function(){
    			var aptitud = $("#aptos").val();
      			console.log(aptitud);
      			if (ambientes==ambientes){
					$(".propiedad").hide();
					$("."+aptitud).fadeIn();}
			})
};

function ambientes(){
			$("#popo").on("click", function(){
				var ambientes = $("#ambients").val();
				if (ambientes==ambientes){
					$(".propiedad").hide();
					$("."+ambientes).fadeIn();
					console.log(ambientes);
}})
};

$( function (){
	var todo = $("#caca");
	$(".propiedad").hide(0);
	ambientes();
	apt();
});