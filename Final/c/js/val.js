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
		this.inText = $("#texto").val()
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
		if (capture.inNombre==="") {
			this.statusNombre = 0400
		} else {
			this.statusNombre = 1345
		}
	},
	funcApellido() {
		capture.valorizar();
		if (capture.inApellido==="") {
			this.statusApellido = 0400
		} else {
			this.statusApellido = 1345
		}
	},
	funcTelefono() {
		
	},
	funcMail() {
		
	},
	funcText() {
		
	},
	funcValidar(){
		objetos= $(".sector");
		objetos.removeClass("");
		this.funcNombre();
		this.funcApellido();
		this.funcTelefono();
		this.funcMail();
		this.funcText()
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
	return false//SegundoNivel.valorSegundoNivel
}