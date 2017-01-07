function moneda_click()
{

var strmoneda = document.cargadatos.moneda.options[document.cargadatos.moneda.selectedIndex].value;
var stroperacion 

if (document.cargadatos.mnivel1[0].checked) 
   {
   stroperacion = 'V';	  
   }
else if (document.cargadatos.mnivel1[1].checked) 
   {
   stroperacion = 'A';
   }
else if (document.cargadatos.mnivel1[2].checked) 
   {
   stroperacion = 'C';
   }
else if (document.cargadatos.mnivel1[3].checked) 
   {
   stroperacion = 'T';
   }

getmontos(stroperacion,strmoneda);	

}

function RadioVenta_Click()
{

var strmoneda = document.cargadatos.moneda.options[document.cargadatos.moneda.selectedIndex].value;

document.cargadatos.txtindex.value = "0"

getmontos('V',strmoneda);	

}

function RadioAlquiler_Click()
{
var strmoneda = document.cargadatos.moneda.options[document.cargadatos.moneda.selectedIndex].value;

document.cargadatos.txtindex.value = "1"

getmontos('A',strmoneda);

}

function RadioTiempoCompartido_Click()
{
var strmoneda = document.cargadatos.moneda.options[document.cargadatos.moneda.selectedIndex].value;

document.cargadatos.txtindex.value = "2"

getmontos('C',strmoneda);

}

function RadioAlquilerTemporada_Click()
{
var strmoneda = document.cargadatos.moneda.options[document.cargadatos.moneda.selectedIndex].value;

document.cargadatos.txtindex.value = "3"

getmontos('T',strmoneda);

}

function CboNivel1_Change()
{


   var StrBarrio = document.FrmAsk.nivel1.options[document.FrmAsk.nivel1.selectedIndex].value

   getbarrios(StrBarrio,'2')
	
}

function CboNivel2_Change()
{

   var StrBarrio = document.FrmAsk.nivel2.options[document.FrmAsk.nivel2.selectedIndex].value

   getbarrios(StrBarrio,'3')

}

function CboNivel3_Change(BLoadCombo)
{

   var StrBarrio = document.FrmAsk.nivel3.options[document.FrmAsk.nivel3.selectedIndex].value

   getbarrios(StrBarrio,'4')

}
