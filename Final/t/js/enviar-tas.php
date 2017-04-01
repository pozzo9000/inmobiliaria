<?php
	$header .= "Content-Type: text/plain; charset=UTF-8";
	$destinatari  = "back.on.board@outlook.com";
	$name = $_POST["nombre"];
	$lastName = $_POST["apellido"];
	$tel = $_POST["telefono"];
	$telSec = $_POST["telefonodos"];
	$mail = $_POST["correo"];
	$mailSec = $_POST["correodos"];
	$tipePropi = $_POST["tipodepropiedad"];
	$sendRent = $_POST["ventaoalquiler"];
	$zone = $_POST["zona"];
	$street = $_POST["calle"];
	$address = $_POST["altura"];
	$floor = $_POST["piso"];
	$side = $_POST["lado"];
	$aptNapt = $_POST["apttoono"];
	$mensajer = $_POST["mensaje"];
	$correoaenviar = "Nombre y apellido: ". $name." ".$lastName."\nTelefono: ".$tel." o ".$telSec."\nCorreo: ".$mail." o ".$mailSec."\nTipo de propiedad: ".$tipePropi."\nDirección: ".$street." (".$zone.") ".$address.", piso: ".$floor."º ".$side." (".$aptNapt.")\n".$mensajer;
	$asunto = "Tasación de un/una ".$tipePropi;
	mail($destinatari, $asunto, $correoaenviar, $header);
?>