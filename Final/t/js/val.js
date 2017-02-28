$(iniciar());

function iniciar(){
	var parrafos = $(".pstatus");
	parrafos.hide().empty();
	$("#divtelefonodos").hide("");
	$("#divmail2").hide();
	$("#datzoncalnum").hide();
	$("#aptitud").hide();
	$("#alquilerr").click(function (){
		validar.valSelector();
		$("#datzoncalnum").slideDown(500);
		validar.valVenAlqu()
		});
		$("#ventar").click(function (){
		validar.valSelector();
		$("#datzoncalnum").slideDown(500);
		validar.valVenAlqu()
	});
	$("#nomb").on('keyup', function (){validar.valNombre()});
	$("#apell").on('keyup', function (){validar.valApellido()});
	$("#tel").on('keyup', function (){validar.valTelefono()});
	$("#teldos").on('keyup', function (){validar.valTelefonoDos()});
	$("#correo").on('keyup', function (){validar.valMail()});
	$("#correodos").on('keyup', function (){validar.valMailDos()});
	$("#zona").on('keyup', function (){validar.valZona()});
	$("#calle").on('keyup', function(){validar.valCalle()});
	$("#numero").on('keyup', function() {validar.valAltura()});
	$("#piso").on('keyup', function(){validar.valPiso()});
	$("#lado").on('keyup', function(){validar.valLado()});
	$("#apt").click(function (){
			validar.valAptitud()
			});
			$("#napt").click(function (){
			validar.valAptitud()
	});
};

var capturar = {
	nombre: "este campo está vacio",
	apellido: "este campo está vacio",
	tel: "este campo está vacio",
	telDos: "este campo está vacio",
	mail: "este campo está vacio",
	mailDos: "este campo está vacio",
	selector: "Departamento por defouult",
	ventAlqui: "Este campo está vacio",
	zona:"este campo está vacio",
	calle:"este campo está vacio",
	altura:"este campo está vacio",
	piso:"este campo está vacio",
	lado:"este campo está vacio",
	aptoProf:"este campo está vacio",
	//Functiones de capturar
		nomCapture() {
			this.nombre = $("#nomb").val()
		},
		apellCapture() {
			this.apellido = $("#apell").val()
		},
		telCapture() {
			this.tel = $("#tel").val()
		},
		telDCaptureDos() {
			this.telDos = $("#teldos").val()
		},
		mailCapture() {
			this.mail = $("#correo").val()
		},
		mailDCaptureDos() {
			this.mailDos = $("#correodos").val()
		},
		selectorCapture(){
			this.selector = $("#selector").val()
		},
		ventalquiCapture() {
			if ($("#alquilerr").is(':checked')) {
				this.ventAlqui = $("#alquilerr").val();
			} else if ($("#ventar").is(':checked')) {
				this.ventAlqui = $ ("#ventar").val()
			}
		},
		zonaCapture() {
			this.zona  = $("#zona").val()
		},
		calleCapture() {
			this.calle = $("#calle").val()
		},
		alturaCapture() {
			this.altura = $("#numero").val()
		},
		pisoCapture() {
			this.piso = $("#piso").val()
		},
		ladoCapture() {
			this.lado = $("#lado").val()
		},
		apttoProfCapture() {
			if ($("#apt").is(':checked')) {
				this.aptoProf = $("#apt").val();
			} else if ($("#napt").is(':checked')) {
				this.aptoProf = $ ("#napt").val()
			}
		},
		valorizar() {
			this.nomCapture();
			this.apellCapture();
			this.telCapture();
			this.telDCaptureDos();
			this.mailCapture();
			this.mailDCaptureDos();
			this.selectorCapture();
			this.ventalquiCapture();
			this.zonaCapture();
			this.calleCapture();
			this.alturaCapture();
			this.pisoCapture();
			this.ladoCapture();
			this.apttoProfCapture()
		}
	//
};

var validar = {
	funcParrafos() {
		$(".pvacio").text("•Este contenedor está vacío").slideDown(500);
		$(".pinex").text("•Formato erróneo").slideDown(500);
		$(".pcorto").text("•Este texto es muy corto").slideDown(500);
		$(".plargo").text("•Se excedió el máximo de caracteres").slideDown(500);
		$(".pcorrecto").empty();
	},
	restartClass() {
		var sectores = $(".inputcl");
		var parrafos = $(".pstatus");
		parrafos.removeClass("pvacio").removeClass("pcorto").removeClass("plargo").removeClass("pinex").removeClass("pcorrecto")
	},
	statusNombre : 4500,
	valNombre() {
		capturar.nomCapture();
		var objNomb = $("#nomb");
		this.restartClass();
		var pNomb = $("#pnombre");
		var expresionNombre = /^[A-Za-z\u00C0-\u017F]*$/;
		if (capturar.nombre==="") {
			objNomb.addClass("vacio");
			pNomb.addClass("pvacio").hide();
			this.statusNombre = 0401;
			this.funcParrafos()
		}else if(!expresionNombre.test(capturar.nombre)){
			objNomb.addClass("inex");
			pNomb.addClass("pinex").hide();
			this.statusNombre = 0401;
			this.funcParrafos()
		} else if(capturar.nombre.length <= 2){
			objNomb.addClass("corto");
			pNomb.addClass("pcorto").hide();
			this.statusNombre = 0400;
			this.funcParrafos()
		} else if(capturar.nombre.length >= 10){
			objNomb.addClass("largo");
			pNomb.addClass("plargo").hide();
			this.statusNombre = 0400;
			this.funcParrafos()
		} else {
			this.statusNombre = 1988;
			pNomb.addClass("pcorrecto").hide();
			console.log(this.statusNombre)
		}
		if (this.statusNombre === 1988) {
			objNomb.addClass("correct");
			objNomb.removeClass("corto").removeClass("largo")
		.removeClass("vacio").removeClass("inex")
		} else if(this.statusNombre === 0401){
			objNomb.removeClass("correct").removeClass("corto").removeClass("largo")
		} else if(this.statusNombre === 0400){
			objNomb.removeClass("correct").removeClass("vacio").removeClass("inex")
		}
	},
	statusApellido : 4500,
	valApellido() {
		capturar.apellCapture();
		var objApell = $("#apell");
		this.restartClass();
		var pApell = $("#papellido");
		var expresionApellido = /^[A-Za-z\u00C0-\u017F]*$/;
		if (capturar.apellido==="") {
			objApell.addClass("vacio");
			pApell.addClass("pvacio").hide();
			this.statusApellido = 0401;
			this.funcParrafos()
		} else if(capturar.apellido.length <= 2){
			objApell.addClass("corto");
			pApell.addClass("pcorto").hide();
			this.statusApellido = 0400;
			this.funcParrafos()
		}else if(!expresionApellido.test(capturar.apellido)){
			objApell.addClass("inex");
			pApell.addClass("pinex").hide();
			this.statusApellido = 0401;
			this.funcParrafos()
		} else if(capturar.apellido.length >= 10){
			objApell.addClass("largo");
			pApell.addClass("plargo").hide();
			this.statusApellido = 0400;
			this.funcParrafos()
		} else {
			this.statusApellido = 1988;
			console.log(this.statusApellido)
		};
		if (this.statusApellido === 1988) {
			objApell.addClass("correct");
			objApell.removeClass("corto").removeClass("largo")
		.removeClass("vacio").removeClass("inex")
		} else if(this.statusApellido === 0401){
			objApell.removeClass("correct").removeClass("corto").removeClass("largo")
		} else if(this.statusApellido === 0400){
			objApell.removeClass("correct").removeClass("vacio").removeClass("inex")
		}
	},
	statusTelefono : 4500,
	valTelefono() {
		capturar.telCapture();
		var objTel = $("#tel");
		this.restartClass();
		var pTel = $("#ptelefono");
		var expresionTelefono = /^[0-9\+\-]*$/;
		if (capturar.tel==="") {
			objTel.addClass("vacio");
			pTel.addClass("pvacio").hide();
			this.statusTelefono = 0401;
			this.funcParrafos()
		} else if(capturar.tel.length <= 6){
			objTel.addClass("corto");
			pTel.addClass("pcorto").hide();
			this.statusTelefono = 0400;
			this.funcParrafos()
		}else if(!expresionTelefono.test(capturar.tel)){
			objTel.addClass("inex");
			pTel.addClass("pinex").hide();
			this.statusTelefono = 0401;
			this.funcParrafos()
		} else if(capturar.tel.length >= 19){
			objTel.addClass("largo");
			pTel.addClass("plargo").hide();
			this.statusTelefono = 0400;
			this.funcParrafos()
		} else {
			this.statusTelefono = 1988;
			console.log(this.statusTelefono)
		};
		if (this.statusTelefono === 1988) {
			objTel.addClass("correct");
			objTel.removeClass("corto").removeClass("largo")
			$("#divtelefonodos").slideDown()
		.removeClass("vacio").removeClass("inex")
		} else if(this.statusTelefono === 0401){
			objTel.removeClass("correct").removeClass("corto").removeClass("largo");
			$("#divtelefonodos").hide()
		} else if(this.statusTelefono === 0400){
			objTel.removeClass("correct").removeClass("vacio").removeClass("inex");
			$("#divtelefonodos").hide()
		}
	},
	statusTelefonoDos : 1988,
	valTelefonoDos() {
		capturar.telDCaptureDos();
		var objTelDos = $("#teldos");
		this.restartClass();
		var pTelDos = $("#ptelefono2");
		var expresionTelefono = /^[0-9\+\-]*$/;
		if (capturar.tel==="") {
			this.statusTelefono = 1988;
			this.funcParrafos()
		} else if(capturar.tel.length <= 6){
			objTelDos.addClass("corto");
			pTelDos.addClass("pcorto").hide();
			this.statusTelefono = 0400;
			this.funcParrafos()
		}else if(!expresionTelefono.test(capturar.tel)){
			objTelDos.addClass("inex");
			pTelDos.addClass("pinex").hide();
			this.statusTelefono = 0401;
			this.funcParrafos()
		} else if(capturar.tel.length >= 19){
			objTelDos.addClass("largo");
			pTelDos.addClass("plargo").hide();
			this.statusTelefono = 0400;
			this.funcParrafos()
		} else {
			this.statusTelefono = 1988;
		};
		if (this.statusTelefono === 1988) {
			objTelDos.addClass("correct");
			objTelDos.removeClass("corto").removeClass("largo")
		.removeClass("vacio").removeClass("inex")
		} else if(this.statusTelefono === 0401){
			objTelDos.removeClass("correct").removeClass("corto").removeClass("largo")
		} else if(this.statusTelefono === 0400){
			objTelDos.removeClass("correct").removeClass("vacio").removeClass("inex") }
	},
	statusTelMail : 4500,
	valMail() {
		capturar.mailCapture();
		var objMail = $("#correo");
		this.restartClass();
		var pMail = $("#pmail");
		var expresionMail =/\w+@\w+\.+[a-z]/;
		if (capturar.mail==="") {
			objMail.addClass("vacio");
			pMail.addClass("pvacio").hide();
			this.statusMail = 0401;
			this.funcParrafos()
		}else if(!expresionMail.test(capturar.mail)){
			objMail.addClass("inex");
			pMail.addClass("pinex").hide();
			this.statusMail = 0401;
			this.funcParrafos()
		} else if(capturar.mail.length <= 6){
			objMail.addClass("corto");
			pMail.addClass("pcorto").hide();
			this.statusMail = 0400;
			this.funcParrafos()
		} else if(capturar.mail.length >= 25){
			objMail.addClass("largo");
			pMail.addClass("plargo").hide();
			this.statusMail = 0400;
			this.funcParrafos()
		} else {
			this.statusMail = 1988;
			$("#divmail2").slideDown();
			console.log(this.statusMail)
		};
		if (this.statusMail === 1988) {
			objMail.addClass("correct");
			objMail.removeClass("corto").removeClass("largo")
		.removeClass("vacio").removeClass("inex")
		} else if(this.statusMail === 0401){
			objMail.removeClass("correct").removeClass("corto").removeClass("largo")
		} else if(this.statusMail === 0400){
			objMail.removeClass("correct").removeClass("vacio").removeClass("inex") }
	},
	statusTelMailDos : 1988,
	valMailDos() {
		capturar.mailDCaptureDos();
		var objMailDos = $("#correodos");
		this.restartClass();
		var pMailDos = $("#pmail2");
		var expresionMailDos =/\w+@\w+\.+[a-z]/;
		if (capturar.mailDos==="") {
			this.statusMailDos = 1988;
			this.funcParrafos()
		}else if(!expresionMailDos.test(capturar.mailDos)){
			objMailDos.addClass("inex");
			pMailDos.addClass("pinex").hide();
			this.statusMailDos = 0401;
			this.funcParrafos()
		} else if(capturar.mailDos.length <= 6){
			objMailDos.addClass("corto");
			pMailDos.addClass("pcorto").hide();
			this.statusMailDos = 0400;
			this.funcParrafos()
		} else if(capturar.mailDos.length >= 25){
			objMailDos.addClass("largo");
			pMailDos.addClass("plargo").hide();
			this.statusMailDos = 0400;
			this.funcParrafos()
		} else {
			this.statusMailDos = 1988;
			console.log(this.statusMailDos)
		};
		if (this.statusMailDos === 1988) {
			objMailDos.addClass("correct");
			objMailDos.removeClass("corto").removeClass("largo")
		.removeClass("vacio").removeClass("inex")
		} else if(this.statusMailDos === 0401){
			objMailDos.removeClass("correct").removeClass("corto").removeClass("largo")
		} else if(this.statusMailDos === 0400){
			objMailDos.removeClass("correct").removeClass("vacio").removeClass("inex") }
	},
	//SEGUNDAPARTE------------------------------------------------------
	valSelector() {
		capturar.selectorCapture();
		console.log(capturar.selector);
		//piso y lado
		if (capturar.selector === "Departamento"  || capturar.selector === "Departamento tipo casa" || capturar.selector === "Oficina") {
			$("#pisolado").show();
			$("#aptitud").show();
			$("#divcalle").css("width" , "30%");
			} else {
			$("#pisolado").hide();
			$("#divcalle").css("width" , "54%");
			$("#aptitud").hide();
			this.statusPiso = 1988;
			this.statusLado = 1988;
			this.statusAptitud = 1988
		};
	},
	statusVenalqqu:4500,
	valVenAlqu() {
		capturar.ventalquiCapture();
		console.log(capturar.ventAlqui);
		if (capturar.ventAlqui === "Venta" ||  capturar.ventAlqui === "Alquiler") {
			$("#pvenalq").empty();
			this.statusVenalqqu = 1988
			console.log(this.statusVenalqqu)
		} else {
			this.statusVenalqqu = 4500
		}
	},
	statusZona:4500,
	valZona() {
		capturar.zonaCapture();
		var objZona = $("#zona");
		var expresionZona =  /^[A-Za-z\u00C0-\u017F\ \.\-]*$/;
		if ((!expresionZona.test(capturar.zona)) || capturar.zona === "") {
			objZona.removeClass("correct");
			objZona.addClass("inex");
			this.statusZona = 4500
		} else {
			objZona.addClass("correct");
			objZona.removeClass("inex");
			this.statusZona = 1988;
			console.log(this.statusZona)
		}
	},
	statusCalle:4500,
	valCalle() {
		capturar.calleCapture();
		var objCalle = $("#calle");
		var expresionCalle = /^[A-Za-z\u00C0-\u017F\ \.\-]*$/;
		if ((!expresionCalle.test(capturar.calle)) || capturar.calle === "") {
			objCalle.removeClass("correct");
			objCalle.addClass("inex");
			this.statusCalle = 4500
		} else {
			objCalle.addClass("correct");
			objCalle.removeClass("inex");
			this.statusCalle = 1988;
			console.log(this.statusCalle)
		}
	},
	statusAltura:4500,
	valAltura() {
		capturar.alturaCapture();
		var objAltura = $("#numero");
		var expresionAltura = /^[0-9]*$/;
		if ((!expresionAltura.test(capturar.altura)) || capturar.altura ==="" || capturar.altura.length >= 5) {
			objAltura.addClass("inex");
			objAltura.removeClass("correct");
			this.statusAltura = 4500
		} else {
			objAltura.addClass("correct");
			objAltura.removeClass("inex");
			this.statusAltura = 1988;
			console.log(this.statusAltura)
		}
	},
	statusPiso:4500,
	valPiso() {
		capturar.pisoCapture();
		var objPiso = $("#piso");
		var expresionPiso = /^[0-9\A\a\E\e]*$/;
		if (capturar.selector === "Departamento"  || capturar.selector === "Departamento tipo casa" || capturar.selector === "Oficina") {
			if ((!expresionPiso.test(capturar.piso)) || capturar.piso ==="" || capturar.piso.length >= 3) {
				objPiso.addClass("inex");
				objPiso.removeClass("correct");
				this.statusPiso = 4500
			} else {
				objPiso.addClass("correct");
				objPiso.removeClass("inex");
				this.statusPiso = 1988;
				console.log(this.statusPiso)
			}
		} else {
			this.statusPiso = 1988
		}
	},
	statusLado:4500,
	valLado() {
		capturar.ladoCapture();
		var objLado = $("#lado");
		var expresionLado = /^[A-Z\a-z\1-9]*$/;
		if (capturar.selector === "Departamento"  || capturar.selector === "Departamento tipo casa" || capturar.selector === "Oficina") {
			if ((!expresionLado.test(capturar.lado)) || capturar.lado ==="" || capturar.lado.length >= 3) {
				objLado.addClass("inex");
				objLado.removeClass("correct");
				this.statusLado = 4500
			} else {
				objLado.addClass("correct");
				objLado.removeClass("inex");
				this.statusLado = 1988;
				console.log(this.statusLado)
			}
		} else {
			this.statusLado = 1988
		}
	},
	statusAptitud:4500,
	valAptitud() {
		capturar.apttoProfCapture();
		if (capturar.aptoProf === "Apto profesional" ||  capturar.aptoProf === "No apto profesional") {
			this.statusAptitud = 1988;
			$("#papt").empty();
			console.log(this.statusAptitud)
		} else {
			return null
			this.statusAptitud = 4500
		}
	},
	validarTodo(){
		this.valNombre();
		this.valApellido();
		this.valTelefono();
		this.valTelefonoDos();
		this.valMail();
		this.valMailDos();
		this.valSelector();
		this.valVenAlqu();
		this.valZona();
		this.valCalle();
		this.valAltura();
		this.valPiso();
		this.valLado();
		this.valAptitud();
	}
};
var SegundoNivel = {
	valorSegundoNivel: false,
	funcSegundoNivel (){
		validar.validarTodo();
		if (validar.statusNombre === 1988 && validar.statusApellido === 1988 && validar.statusTelefono === 1988 && validar.statusTelefonoDos === 1988 && validar.statusMail === 1988 && validar.statusMailDos === 1988 && validar.statusVenalqqu === 1988 && validar.statusZona === 1988 && validar.statusCalle === 1988 && validar.statusAltura ===  1988 && validar.statusPiso ===  1988  && validar.statusLado === 1988 && validar.statusAptitud === 1988) {
			this.valorSegundoNivel = true
		} else {
			this.valorSegundoNivel = false
		}
	}
};
// ------------------------------------------------------------------------------------------------------------
function checkear() {
	SegundoNivel.funcSegundoNivel();
	alert("Nombre "+validar.statusNombre);
		alert("apellido "+validar.statusApellido);
		alert("Telefono "+validar.statusTelefono);
		alert("Telefono dos "+validar.statusTelefonoDos);
		alert("Mail "+validar.statusMail);
		alert("Mail Dos "+validar.statusMailDos);
		alert("VentAlquil "+validar.statusVenalqqu);
		alert("Zona "+validar.statusZona);
		alert("Calle "+validar.statusCalle);
		alert("altura "+validar.statusAltura);
		alert("Piso "+validar.statusPiso);
		alert("Lado "+validar.statusLado);
		alert("Aptitud "+validar.statusAptitud);
	alert(SegundoNivel.valorSegundoNivel);
	$.ajax({
		type:'post',
		urL:'enviar.php',
		data: ('Nombre='+capturar.nombre+'&Apellido='+capturar.apellido+'&Telefono='+capturar.tel+'&TelefonoDos='+capturar.telDos+'&Correo='+capturar.mail+'&CorreoDos='+mailDos+'&TipoDePropiedad='+capturar.selector+'&Para='+capturar.ventAlqui+'Zona='+capturar.zona+'&Calle='+capturar.calle+'&Altura='+capturar.altura+'&Piso='+capturar.piso+'&Lado='capturar.lado+'&Esta='+capturar.aptoProf),
		success:function(respuesta){
			alert("Hey mamma")
		}
	})
	return false;
};
