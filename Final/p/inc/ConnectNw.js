function RequestURL(sURL)
{

parent.frames.server.location.href = sURL;

}


function getmontos(sOperacion,sMoneda)
{

RequestURL('http://' + location.hostname + '/buscador/data/data.asp?sch=montos&operacion=' + sOperacion + '&moneda=' + sMoneda)

}

function getmontos_USA(sOperacion,sMoneda)
{

RequestURL('http://' + location.hostname + '/buscador/data/data.asp?sch=montos_USA&operacion=' + sOperacion + '&moneda=' + sMoneda)

}

function getbarrios(sBarrio,nNivel)
{

RequestURL('http://' + location.hostname + '/buscador/data/data.asp?sch=barrios&nivel=' + nNivel + "&Barrio=" + sBarrio)

}


function getbarriospedido(sBarrio,nNivel)
{

RequestURL('http://' + location.hostname + '/buscador/data/data.asp?sch=barriosregistro&nivel=' + nNivel + "&Barrio=" + sBarrio)

}


function getbarriosrubropedido(sBarrio,nNivel)
{

RequestURL('http://' + location.hostname + '/buscador/data/data.asp?sch=barriospedido&nivel=' + nNivel + "&Barrio=" + sBarrio)

}


function IDX()
{

var snivel1 = document.FrmDatos.TxtCboNivel1.value
var snivel2 = document.FrmDatos.TxtCboNivel2.value
var snivel3 = document.FrmDatos.TxtCboNivel3.value

RequestURL('http://' + location.hostname + '/buscador/data/data.asp?sch=rbarriosregistro&nivel1=' + snivel1 + "&nivel2=" + snivel2 + "&nivel3=" + snivel3 )

}


function IDXPedido(snivel1,snivel2,snivel3,snivel4)
{

RequestURL('http://' + location.hostname + '/buscador/data/data.asp?sch=rbarriospedido&nivel1=' + snivel1 + "&nivel2=" + snivel2 + "&nivel3=" + snivel3 + "&nivel4=" + snivel4)

}

