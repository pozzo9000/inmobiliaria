<<?php 
	$destino = "juanmpozzo@outlook.com";
	$tema = $_POST["tema"];
	$nombre = $_POST["nombre-f"];
	$lastName = $_POST["apellido-p"];
	$correo = $_POST["correo"];
	$telefono = $_POST["telefono"];
	$mensaje = $_POST["mensaje"];
	$contenido = "Nombre: ". $nombre." ".$lastName . "\nCorreo: " . $correo . "\nTelefono : " . $telefono . "\n". $mensaje;
	mail($destino, $tema, $contenido);
 ?>