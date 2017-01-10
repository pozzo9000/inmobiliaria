var capture ={
	inNombre : "Este campo está vacio",
	inApellido : "Este campo está vacio",
	inTelefono : "Este campo está vacio",
	inMail : "Este campo está vacio",
	inText : "Este campo está vacio",
	valorizar () {
		this.inNombre = $("#nombre").val();
		this.inApellido = $("#apellido").val();
		this.inTelefono = $("#el").val();
		this.inMail = $("#mail").val();
		this.inText = $("#texto").val();
	},
};
var primerNivel = {
	statusNombre: 0400,
	statusApellido: 0400,
	statusTelefono: 0400,
	statusmail: 0400,
	statusTexto: 0400,

	funcNombre (){
		capture.valorizar();
		var objNombre = $("#nombre");
		var pNombre = $("#pnomb");
		var expresionNombre =/^[A-Za-z\u00C0-\u017F]*$/;
		if (capture.inNombre==="") {
			objNombre.addClass("vacio");
			pNombre.addClass("pvacio").hide();
			this.statusNombre = 0400
		} else if(objNombre.val().length <= 3) {
			objNombre.addClass("corto");
			pNombre.addClass("pcorto").hide();
			this.statusNombre = 0400
		} else if(objNombre.val().length >= 15) {
			objNombre.addClass("largo");
			pNombre.addClass("pvacio").hide();
			this.statusNombre = 0400
		} else if(!expresionNombre.test(capture.inNombre)) {
			objNombre.addClass("inex");
			pNombre.addClass("pinex").hide();
			this.statusNombre = 0400
		}else {
			pNombre.hide();
			this.statusNombre = 1345
		}
	},
	funcApellido() {
		
	},
	funcTelefono() {
		
	},
	funcMail() {
		
	},
	funcText() {
		
	},
	funcParrafos() {
		$(".pvacio").text("Este contenedor está vacio").slideDown(500);
		$(".pinex").text("Formato de texto erroneo").slideDown(500);
		$(".pcorto").text("Este campo exije 3 caracteres").slideDown(500);
	},
	funcValidar(){
		var sectores = $(".sector");
		var parrafos = $(".pstatus");
		parrafos.slideUp(500, function(){
			$().empty()
		});
		sectores.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex");
		parrafos.removeClass("pvacio").removeClass("pcorto").removeClass("plargo").removeClass("pinex");
		this.funcNombre();
		this.funcApellido();
		this.funcTelefono();
		this.funcMail();
		this.funcText();
		this.funcParrafos();
	}
};

var SegundoNivel = {
	valorSegundoNivel: false,
	funcSegundoNivel (){
		primerNivel.funcValidar();
		if (primerNivel.statusNombre === 1345) {
			this.valorSegundoNivel = true
		} else {
			this.valorSegundoNivel = false
		}
	}
}

/*-------------------------------------------*/
function confirmar() {
	capture.valorizar();
	console.log(SegundoNivel.valorSegundoNivel);
	SegundoNivel.funcSegundoNivel();
	console.log(SegundoNivel.valorSegundoNivel);
	$("").text("Hole")
	return false//SegundoNivel.valorSegundoNivel
}