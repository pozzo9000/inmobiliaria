var capture ={
	inNombre : "Este campo está vacio",
	inApellido : "Este campo está vacio",
	inTelefono : "Este campo está vacio",
	inMail : "Este campo está vacio",
	inText : "Este campo está vacio",
	valorizar () {
		this.inNombre = $("#nombre").val();
		this.inApellido = $("#apellido").val();
		this.inTelefono = $("#tel").val();
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
			pNombre.addClass("plargo").hide();
			this.statusNombre = 0400
		} else if(!expresionNombre.test(capture.inNombre)) {
			objNombre.addClass("inex");
			pNombre.addClass("pinex").hide();
			this.statusNombre = 0400
		}else {
			objNombre.addClass("correct");
			this.statusNombre = 1345
		}
	},
	funcApellido() {
		capture.valorizar();
		var objApellido = $("#apellido");
		var pApellido = $("#papell");
		var expresionApellido =/^[A-Za-z\u00C0-\u017F]*$/;
		if (capture.inApellido==="") {
			objApellido.addClass("vacio");
			pApellido.addClass("pvacio").hide();
			this.statusApellido = 0400
		} else if(objApellido.val().length <= 3) {
			objApellido.addClass("corto");
			pApellido.addClass("pcorto").hide();
			this.statusApellido = 0400
		} else if(objApellido.val().length >= 15) {
			objApellido.addClass("largo");
			pApellido.addClass("plargo").hide();
			this.statusApellido = 0400
		} else if(!expresionApellido.test(capture.inApellido)) {
			objApellido.addClass("inex");
			pApellido.addClass("pinex").hide();
			this.statusApellido = 0400
		}else {
			objApellido.addClass("correct");
			this.statusApellido = 1345
		}
	},
	funcTelefono() {
		capture.valorizar();
		var objTelefono = $("#tel");
		var pTelefono = $("#ptel");
		var expresionTel =/^[A-Za-z\u00C0-\u017F]*$/;
		if (objTelefono.val().length == 0) {
			objTelefono.addClass("vacio");
			pTelefono.addClass("pvacio").hide();
			this.statusTelefono = 0400
		} else if(objTelefono.val().length <= 7) {
			objTelefono.addClass("corto");
			pTelefono.addClass("pcorto").hide();
			this.statusTelefono = 0400
		} else if(objTelefono.val().length >= 13) {
			objTelefono.addClass("largo");
			pTelefono.addClass("plargo").hide();
			this.statusTelefono = 0400
		} else if(isNaN(capture.inTelefono)) {
			objTelefono.addClass("inex");
			pTelefono.addClass("pinex").hide();
			this.statusTelefono = 0400
		}else {
			objTelefono.addClass("correct");
			this.statusTelefono = 1345
		}
	},
	funcMail() {
		capture.valorizar();
		var objTelefono = $("#tel");
		var pTelefono = $("#ptel");
		var expresionTel =/^[A-Za-z\u00C0-\u017F]*$/;
		if (objTelefono.val().length == 0) {
			objTelefono.addClass("vacio");
			pTelefono.addClass("pvacio").hide();
			this.statusTelefono = 0400
		} else if(objTelefono.val().length <= 7) {
			objTelefono.addClass("corto");
			pTelefono.addClass("pcorto").hide();
			this.statusTelefono = 0400
		} else if(objTelefono.val().length >= 13) {
			objTelefono.addClass("largo");
			pTelefono.addClass("plargo").hide();
			this.statusTelefono = 0400
		} else if(isNaN(capture.inTelefono)) {
			objTelefono.addClass("inex");
			pTelefono.addClass("pinex").hide();
			this.statusTelefono = 0400
		}else {
			objTelefono.addClass("correct");
			this.statusTelefono = 1345
		}
	},
	funcText() {
		
	},
	funcParrafos() {
		$(".pvacio").text("Este contenedor está vacio").slideDown(500);
		$(".pinex").text("Formato erroneo").slideDown(500);
		$(".pcorto").text("Este texto es muy corto").slideDown(500);
		$(".plargo").text("Se exedio el maximo de caracteres").slideDown(500);
	},
	funcValidar(){
		var sectores = $(".sector");
		var parrafos = $(".pstatus");
		parrafos.slideUp(500, function(){
			$().empty()
		});
		sectores.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass(".correct");
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