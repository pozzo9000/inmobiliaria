$(iniciar);
function iniciar(){
	$("#nombre").blur('keyup', function(){primerNivel.funcNombre();});
	$("#apellido").blur('keyup', function(){primerNivel.funcApellido();});
	$("#tel").blur('keyup', function(){primerNivel.funcTelefono();});
	$("#mail").blur('keyup', function(){primerNivel.funcMail();});
	$("#texto").on('keyup', function(){primerNivel.funcText();});
	$("#urgencia").click(function(){
		if ($("#urgencia").is(":checked")) {
			capture.inUrg = " ¡URGENTE!";
			alert("Meurge");
		} else {
			capture.inUrg = "";
		}
	});
	$("#boton").click(function () {
		confirmar();
	});
};

var capture ={
	inNombre : "Este campo está vacio",
	inApellido : "Este campo está vacio",
	inTelefono : "Este campo está vacio",
	inMail : "Este campo está vacio",
	inText : "Este campo está vacio",
	inUrg : "",
	valorizarNombre () {
		this.inNombre = $("#nombre").val();
	},
	valorizarApellido() {
		this.inApellido = $("#apellido").val();
	},
	valorizarTelefono() {
		this.inTelefono = $("#tel").val();
	},
	valorizarMail() {
		this.inMail = $("#mail").val();
	},
	valorizarText() {
		this.inText = $("#texto").val();
	},
};
var primerNivel = {
	statusNombre: 0400,
	statusApellido: 0400,
	statusTelefono: 0400,
	statusMail: 0400,
	statusTexto: 0400,

	funcNombre (){
		capture.valorizarNombre();
		this.funcStil();
		var objNombre = $("#nombre");
		var pNombre = $("#pnomb");
		var expresionNombre =/^[A-Za-z\u00C0-\u017F]*$/;
		if (capture.inNombre==="") {
			pNombre.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objNombre.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objNombre.addClass("vacio");
			pNombre.addClass("pvacio").hide();
			this.funcParrafos();
			this.statusNombre = 0400
		} else if(!expresionNombre.test(capture.inNombre)) {
			pNombre.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objNombre.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objNombre.addClass("inex");
			pNombre.addClass("pinex").hide();
			this.funcParrafos();
			this.statusNombre = 0400
		} else if(objNombre.val().length <= 3) {
			pNombre.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objNombre.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objNombre.addClass("corto");
			pNombre.addClass("pcorto").hide();
			this.funcParrafos();
			this.statusNombre = 0400
		} else if(objNombre.val().length >= 15) {
			pNombre.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objNombre.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objNombre.addClass("largo");
			pNombre.addClass("plargo").hide();
			this.funcParrafos();
			this.statusNombre = 0400
		}else {
			pNombre.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objNombre.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objNombre.addClass("correct");
			this.funcParrafos();
			this.statusNombre = 1345
		}
	},
	funcApellido() {
		capture.valorizarApellido();
		this.funcStil();
		var objApellido = $("#apellido");
		var pApellido = $("#papell");
		var expresionApellido =/^[A-Za-z\u00C0-\u017F]*$/;
		if (capture.inApellido==="") {
			pApellido.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objApellido.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objApellido.addClass("vacio");
			pApellido.addClass("pvacio").hide();
			this.funcParrafos();
			this.statusApellido = 0400
		} else if(objApellido.val().length <= 3) {
			pApellido.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objApellido.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objApellido.addClass("corto");
			pApellido.addClass("pcorto").hide();
			this.funcParrafos();
			this.statusApellido = 0400
		} else if(objApellido.val().length >= 15) {
			pApellido.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objApellido.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objApellido.addClass("largo");
			pApellido.addClass("plargo").hide();
			this.funcParrafos();
			this.statusApellido = 0400
		} else if(!expresionApellido.test(capture.inApellido)) {
			pApellido.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objApellido.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objApellido.addClass("inex");
			pApellido.addClass("pinex").hide();
			this.funcParrafos();
			this.statusApellido = 0400
		}else {
			pApellido.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio");
			objApellido.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objApellido.addClass("correct");
			pApellido.addClass("pcorrecto").hide();
			this.funcParrafos();
			this.statusApellido = 1345
		}
	},
	funcTelefono() {
		capture.valorizarTelefono();
		this.funcStil();
		var objTelefono = $("#tel");
		var pTelefono = $("#ptel");
		var expresionTel =/[0-9\-\+]/;
		if (objTelefono.val().length == 0) {
			pTelefono.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objTelefono.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objTelefono.addClass("vacio");
			pTelefono.addClass("pvacio").hide();
			this.funcParrafos();
			this.statusTelefono = 0400
		}  else if(!expresionTel.test(capture.inTelefono)) {
			pTelefono.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objTelefono.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objTelefono.addClass("inex");
			pTelefono.addClass("pinex").hide();
			this.funcParrafos();
			this.statusTelefono = 0400
		} else if(objTelefono.val().length <= 7) {
			pTelefono.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objTelefono.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objTelefono.addClass("corto");
			pTelefono.addClass("pcorto").hide();
			this.funcParrafos();
			this.statusTelefono = 0400
		} else if(objTelefono.val().length >= 25) {
			pTelefono.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objTelefono.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objTelefono.addClass("largo");
			pTelefono.addClass("plargo").hide();
			this.funcParrafos();
			this.statusTelefono = 0400
		}else {
			pTelefono.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objTelefono.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objTelefono.addClass("correct");
			pTelefono.addClass("pcorrecto").hide();
			this.funcParrafos();
			this.statusTelefono = 1345
		}
	},
	funcMail() {
		capture.valorizarMail();
		this.funcStil();
		var objMail = $("#mail");
		var pMail = $("#pmail");
		var expresionMail =/\w+@\w+\.+[a-z]/;
		if (capture.inMail == "") {
			pMail.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objMail.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objMail.addClass("vacio");
			pMail.addClass("pvacio").hide();
			this.funcParrafos();
			this.statusMail = 0400
		} else if(!expresionMail.test(capture.inMail)) {
			pMail.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objMail.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objMail.addClass("inex");
			pMail.addClass("pinex").hide();
			this.funcParrafos();
			this.statusMail = 0400
		} else if(objMail.val().length <= 9) {
			pMail.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objMail.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objMail.addClass("corto");
			pMail.addClass("pcorto").hide();
			this.funcParrafos();
			this.statusMail = 0400
		} else if(objMail.val().length >= 25) {
			pMail.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objMail.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objMail.addClass("largo");
			pMail.addClass("plargo").hide();
			this.funcParrafos();
			this.statusMail = 0400
		}else {
			pMail.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objMail.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objMail.addClass("correct");
			pMail.addClass("pcorrecto");
			this.funcParrafos();
			this.statusMail = 1345
		}
	},
	funcText() {
		capture.valorizarText();
		this.funcStil();
		var objText = $("#texto");
		var pText = $("#parea");
		var expresionText =/^[A-Za-z0-9\$"\s\-\.\u00C0-\u017F]*$/;
		if (capture.inText === "") {
			pText.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objText.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objText.addClass("vacio");
			pText.addClass("pvacio").hide();
			this.funcParrafos();
			this.statusTexto = 0400
		} else if(objText.val().length <= 10) {
			pText.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objText.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objText.addClass("corto");
			pText.addClass("pcorto").hide();
			this.funcParrafos();
			this.statusTexto = 0400
		} else if(!expresionText.test(capture.inText)) {
			pText.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objText.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objText.addClass("inex");
			pText.addClass("pinex").hide();
			this.funcParrafos();
			this.statusTexto = 0400
		}else {
			pText.removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pvacio").removeClass("pcorrecto");
			objText.removeClass("vacio").removeClass("corto").removeClass("largo").removeClass(".inex").removeClass("correct");
			objText.addClass("correct");
			pText.addClass("pcorrecto");
			this.funcParrafos();
			this.statusTexto = 1345
		}
	},
	funcParrafos() {
		$(".pvacio").text("•Este contenedor está vaco").slideDown(500);
		$(".pinex").text("•Formato erroneo").slideDown(500);
		$(".pcorto").text("•Este texto es muy corto").slideDown(500);
		$(".plargo").text("•Se exedio el maximo de caracteres").slideDown(500);
		$(".pcorrecto").empty();
	},
	funcStil(){
		var sectores = $(".sector");
		var parrafos = $(".pstatus");
	},
	funcValidar() {
		this.funcNombre();
		this.funcApellido();
		this.funcTelefono();
		this.funcMail();
		this.funcText();
	}
};

var SegundoNivel = {
	valorSegundoNivel: false,
	funcSegundoNivel (){
		primerNivel.funcValidar();
		if (primerNivel.statusNombre === 1345 && primerNivel.statusApellido === 1345 && primerNivel.statusTelefono === 1345 && primerNivel.statusMail === 1345 && primerNivel.statusTexto === 1345) {
			this.valorSegundoNivel = "true";
		} else {
			this.valorSegundoNivel = "false";
		}
	}
}

/*-------------------------------------------*/
function confirmar() {
	console.log(SegundoNivel.valorSegundoNivel);
	SegundoNivel.funcSegundoNivel();
	console.log(SegundoNivel.valorSegundoNivel);
	if (SegundoNivel.valorSegundoNivel === "true") {
		$.ajax({
			type:"post",
			url:"js/enviar-cont.php",
			data: {nombre:capture.inNombre,apellido:capture.inApellido,telefono:capture.inTelefono,correo:capture.inMail,mensaje:capture.inText,urg:capture.inUrg},
			success:function(){
				alert("Enviando");
			}
		});
	} else {
		alert("Completá")
	};
	return false
}