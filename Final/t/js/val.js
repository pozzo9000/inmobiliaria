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
		parrafos.removeClass("pvacio").removeClass("pcorto").removeClass("plargo").removeClass("pinex")
	},
	statusNombre : 0400,
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
			this.statusNombre = 0401;
			this.funcParrafos()
		} else if(capturar.nombre.length <= 2){
			alert("crack, maquina");
			objNomb.addClass("corto");
			pNomb.addClass("pcorto").hide();
			this.statusNombre = 0400;
			this.funcParrafos()
		}else if(!expresionNombre.test(capturar.nombre)){
			alert("narnia")
			objNomb.addClass("inex");
			pNomb.addClass("pinex").hide();
			this.statusNombre = 0401;
			this.funcParrafos()
		} else if(capturar.nombre.length >= 10){
			alert("Mandarina")
			
			pNomb.addClass("plargo").hide();
			this.statusNombre = 0400;
			this.funcParrafos()
		} else {
			this.statusNombre = 1988;
		}
		if (this.statusNombre === 1988) {
			objNomb.addClass("correct")
		} else if(this.statusNombre === 0401){
			objNomb.removeClass("correct").removeClass("corto").removeClass("largo")
		} else if(this.statusNombre === 0400){
			objNomb.removeClass("correct").removeClass("vacio").removeClass("inex")
		}
	},
	statusApellido : 0400,
	valApellido() {
		capturar.apellCapture();
		var objApell = $("#apell");
		this.restartClass();
		var pApell = $("#papellido");
		var expresionApellido = /^[A-Za-z\u00C0-\u017F]*$/
		if (capturar.apellido==="") {
			alert("Hola");
			objApell.addClass("vacio");
			pApell.addClass("pvacio").hide();
			this.statusApellido = 0401;
			this.funcParrafos()
		} else if(capturar.apellido.length <= 2){
			alert("crack, maquina");
			objApell.addClass("corto");
			pApell.addClass("pcorto").hide();
			this.statusApellido = 0400;
			this.funcParrafos()
		}else if(!expresionApellido.test(capturar.apellido)){
			alert("narnia")
			objApell.addClass("inex");
			pApell.addClass("pinex").hide();
			this.statusApellido = 0401;
			this.funcParrafos()
		} else if(capturar.apellido.length >= 10){
			alert("Mandarina")
			
			pApell.addClass("plargo").hide();
			this.statusApellido = 0400;
			this.funcParrafos()
		} else {
			this.statusApellido = 1988;
		};
		if (this.statusApellido === 1988) {
			objApell.addClass("correct")
		} else if(this.statusApellido === 0401){
			objApell.removeClass("correct").removeClass("corto").removeClass("largo")
		} else if(this.statusApellido === 0400){
			objApell.removeClass("correct").removeClass("vacio").removeClass("inex")
		}
	},
};
// ------------------------------------------------------------------------------------------------------------
function checkear() {
	alert("No hay patos en angola (mentira)");
	return false
}