var capturar = {
	nombre: "este campo está vacio",
	apellido: "este campo está vacio",
	tel: "este campo está vacio",
	telDos: "este campo está vacio",
	mail: "este campo está vacio",
	mailDos: "este campo está vacio",
	nomCapture() {
		this.nombre = $("#nomb").val()
	},
	apellCapture() {
		this.apellido = $("#apell").val()
	},
	telCapture() {
		this.nombre = $("#nomb").val()
	},
	telDCapture() {
		this.nombre = $("#nomb").val()
	},
	mailCapture() {
		this.nombre = $("#nomb").val()
	},
	mailDCapture() {
		this.nombre = $("#nomb").val()
	}
};
var validar = {
	statusNombre : 0400,
	funcParrafos() {
		$(".pvacio").text("•Este contenedor está vacío").slideDown(500);
		$(".pinex").text("•Formato erróneo").slideDown(500);
		$(".pcorto").text("•Este texto es muy corto").slideDown(500);
		$(".plargo").text("•Se excedió el máximo de caracteres").slideDown(500);
	},
	restartClass() {
		var sectores = $(".inputcl");
		var parrafos = $(".pstatus");
		parrafos.slideUp(500, function(){
			$().empty()
		});
		sectores.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
		parrafos.removeClass("pvacio").removeClass("pcorto").removeClass("plargo").removeClass("pinex")
	},
	
	valNombre() {
		capturar.nomCapture();
		var objNomb = $("#nomb");
		this.restartClass();
		var pNomb = $("#pnombre");
		var expresionNombre = /^[A-Za-z\u00C0-\u017F]*$/
		if (capturar.nombre==="") {
			alert("Hola");
			objNomb.addClass("vacio");
			pNomb.addClass("pvacio").hide();
			this.funcParrafos()
		} else if(capturar.nombre.length <= 2){
			alert("crack, maquina");
			pNomb.addClass("pcorto").hide();
			this.funcParrafos()
		}else if(!expresionNombre.test(capturar.nombre)){
			alert("narnia")
		} else if(capturar.nombre.length >= 10){
			alert("Mandarina")
		} else {
		}
	}
};
// ------------------------------------------------------------------------------------------------------------
function checkear() {
	alert("No hay patos en angola (mentira)");
	return false
}