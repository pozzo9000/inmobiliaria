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

	},
	telCapture() {

	},
	telDCapture() {

	},
	mailCapture() {

	},
	mailDCapture() {

	}
};
var validar = {
	statusNombre : 0400,

	valNombre() {
		capturar.nomCapture();
		var objNomb = $("#nomb")
		if (capturar.nombre==="") {
			
		}
	}
}
// ------------------------------------------------------------------------------------------------------------
function checkear() {
	alert("No hay patos en angola (creo)");
	return false
}