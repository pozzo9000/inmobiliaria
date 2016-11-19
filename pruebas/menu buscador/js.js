function apt (){
			$('#myselect').find('option').each(function(){
    			console.log($(this).text());
    			console.log($(this).val());
})
};

function ambientes(){
			$("#popo").on("click", function(){
				var ambientes = $("#ambients").val();
				if (ambientes==ambientes){
					$(".propiedad").hide()
					$("."+ambientes).fadeIn()
					console.log(ambientes);
}})
};

$( function (){
	var todo = $("#caca");
	$(".propiedad").hide();
	console.log(ambientes);
	ambientes();
});