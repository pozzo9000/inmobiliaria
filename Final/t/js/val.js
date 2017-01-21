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

	valNombre() {
		capturar.nomCapture();
		var objNomb = $("#nomb");
		var expresionNombre = /^[A-Za-z\u00C0-\u017F]*$/
		if (capturar.nombre==="") {
			alert("Hola")
		} else if(capturar.nombre.length <= 3){
			alert("crack, maquina")
		}else if(!expresionNombre.test(capturar.nombre)){
			alert("narnia")
		} else if(capturar.nombre.length >= 10){
			alert("Mandarina")
		} else {
			alert("Peque")
		}
	}
};
// ------------------------------------------------------------------------------------------------------------
function checkear() {
	alert("No hay patos en angola (creo)");
	return false
}