<?php
	$header .= "Content-Type: text/plain; charset=UTF-8";
	$destinatari  = "juanmpozzo@outlook.com";
	$name = $_POST["nombre"];
	$lastName = $_POST["apellido"];
	$tel = $_POST["telefono"];
	$mail = $_POST["correo"];
	$urgen = $_POST["urg"];
	$mensajer = $_POST["mensaje"];
	$correoaenviar = "Nombre y apellido: ". $name." ".$lastName."\nTelefono: ".$tel." o ".$telSec."\nCorreo: ".$mail." o ".$mailSec."\nTipo de propiedad: ".$tipePropi."\nDirección: ".$street." (".$zone.") ".$address.", piso: ".$floor."º ".$side." (".$aptNapt.")\n".$mensajer;
	$asunto = "Contacto ".$urgen;
	mail($destinatari, $asunto, $correoaenviar, $header);
?>