$("#alquilerr").click(function (){$("#datzoncalnum").slideUp(5000);});
$(iniciar());
$("#nomb").on('keyup', function (){validar.valNombre()});

function iniciar(){
	var parrafos = $(".pstatus");
	parrafos.hide().empty();
	$("#divtelefonodos").hide("");
	$("#divmail2").hide();
};

var capturar = {
	nombre: "este campo está vacio",
	apellido: "este campo está vacio",
	tel: "este campo está vacio",
	telDos: "este campo está vacio",
	mail: "este campo está vacio",
	mailDos: "este campo está vacio",
	selector: "Departamento por defouult",
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
	}
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
			objNomb.addClass("largo");
			pNomb.addClass("plargo").hide();
			this.statusNombre = 0400;
			this.funcParrafos()
		} else {
			this.statusNombre = 1988;
			pNomb.addClass("pcorrecto").hide();
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
	statusApellido : 0400,
	valApellido() {
		capturar.apellCapture();
		var objApell = $("#apell");
		this.restartClass();
		var pApell = $("#papellido");
		var expresionApellido = /^[A-Za-z\u00C0-\u017F]*$/;
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
			alert("narnia");
			objApell.addClass("inex");
			pApell.addClass("pinex").hide();
			this.statusApellido = 0401;
			this.funcParrafos()
		} else if(capturar.apellido.length >= 10){
			alert("Mandarina");
			objApell.addClass("largo");
			pApell.addClass("plargo").hide();
			this.statusApellido = 0400;
			this.funcParrafos()
		} else {
			this.statusApellido = 1988;
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
	statusTelefono : 0400,
	valTelefono() {
		capturar.telCapture();
		var objTel = $("#tel");
		this.restartClass();
		var pTel = $("#ptelefono");
		var expresionTelefono = /^[0-9\+\-]*$/;
		if (capturar.tel==="") {
			alert("Hola");
			objTel.addClass("vacio");
			pTel.addClass("pvacio").hide();
			this.statusTelefono = 0401;
			this.funcParrafos()
		} else if(capturar.tel.length <= 6){
			alert("crack, maquina");
			objTel.addClass("corto");
			pTel.addClass("pcorto").hide();
			this.statusTelefono = 0400;
			this.funcParrafos()
		}else if(!expresionTelefono.test(capturar.tel)){
			alert("narnia");
			objTel.addClass("inex");
			pTel.addClass("pinex").hide();
			this.statusTelefono = 0401;
			this.funcParrafos()
		} else if(capturar.tel.length >= 19){
			alert("Mandarina");
			objTel.addClass("largo");
			pTel.addClass("plargo").hide();
			this.statusTelefono = 0400;
			this.funcParrafos()
		} else {
			this.statusTelefono = 1988;
			$("#divtelefonodos").slideDown()
		};
		if (this.statusTelefono === 1988) {
			objTel.addClass("correct");
			objTel.removeClass("corto").removeClass("largo")
		.removeClass("vacio").removeClass("inex")
		} else if(this.statusTelefono === 0401){
			objTel.removeClass("correct").removeClass("corto").removeClass("largo")
		} else if(this.statusTelefono === 0400){
			objTel.removeClass("correct").removeClass("vacio").removeClass("inex") }
	},
	statusTelefonoDos : 1988,
	valTelefonoDos() {
		capturar.telDCaptureDos();
		var objTelDos = $("#teldos");
		this.restartClass();
		var pTelDos = $("#ptelefono2");
		var expresionTelefono = /^[0-9\+\-]*$/;
		if (capturar.tel==="") {
			alert("Hola");
			this.statusTelefono = 1988;
			this.funcParrafos()
		} else if(capturar.tel.length <= 6){
			alert("crack, maquina");
			objTelDos.addClass("corto");
			pTelDos.addClass("pcorto").hide();
			this.statusTelefono = 0400;
			this.funcParrafos()
		}else if(!expresionTelefono.test(capturar.tel)){
			alert("narnia");
			objTelDos.addClass("inex");
			pTelDos.addClass("pinex").hide();
			this.statusTelefono = 0401;
			this.funcParrafos()
		} else if(capturar.tel.length >= 19){
			alert("Mandarina");
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
	statusTelMail : 0400,
	valMail() {
		capturar.mailCapture();
		var objMail = $("#correo");
		this.restartClass();
		var pMail = $("#pmail");
		var expresionMail =/\w+@\w+\.+[a-z]/;
		if (capturar.mail==="") {
			alert("Hola");
			objMail.addClass("vacio");
			pMail.addClass("pvacio").hide();
			this.statusMail = 0401;
			this.funcParrafos()
		}else if(!expresionMail.test(capturar.mail)){
			alert("narnia");
			objMail.addClass("inex");
			pMail.addClass("pinex").hide();
			this.statusMail = 0401;
			this.funcParrafos()
		} else if(capturar.mail.length <= 6){
			alert("crack, maquina");
			objMail.addClass("corto");
			pMail.addClass("pcorto").hide();
			this.statusMail = 0400;
			this.funcParrafos()
		} else if(capturar.mail.length >= 25){
			alert("Mandarina");
			objMail.addClass("largo");
			pMail.addClass("plargo").hide();
			this.statusMail = 0400;
			this.funcParrafos()
		} else {
			this.statusMail = 1988;
			$("#divmail2").slideDown()
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
			alert("Hola");
			this.statusMailDos = 1988;
			this.funcParrafos()
		}else if(!expresionMailDos.test(capturar.mailDos)){
			alert("narnia");
			objMailDos.addClass("inex");
			pMailDos.addClass("pinex").hide();
			this.statusMailDos = 0401;
			this.funcParrafos()
		} else if(capturar.mailDos.length <= 6){
			alert("crack, maquina");
			objMailDos.addClass("corto");
			pMailDos.addClass("pcorto").hide();
			this.statusMailDos = 0400;
			this.funcParrafos()
		} else if(capturar.mailDos.length >= 25){
			alert("Mandarina");
			objMailDos.addClass("largo");
			pMailDos.addClass("plargo").hide();
			this.statusMailDos = 0400;
			this.funcParrafos()
		} else {
			this.statusMailDos = 1988;
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
			console.log("parpito es real");
			$("#pisolado").show();
		} else {
			$("#pisolado").hide();
		}
	}
	// valVenAlqu() {
	// }
};

// ------------------------------------------------------------------------------------------------------------
function checkear() {
	alert("No hay patos en angola (mentira)");
	return false
};
