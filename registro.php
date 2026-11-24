<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>registro.php</title>
     <link rel="stylesheet" href="css/estilos_form.css">
</head>
<body>
<nav>
        <a href="index.html"> Inicio </a>
        <a href="contacto.php">Contacto </a>
</nav>
   <h1>Usuario registrado con exito</h1>
   <?php
include("conexion.php");

    $nombre = $_GET['nombre'];
    $correo = $_GET['correo'];
    $telefono = $_GET['telefono'];
    $consulta = "INSERT INTO registro (nombre, correo, telefono) VALUES ('$nombre', '$correo', '$telefono')";

    mysqli_query($conexion, $consulta);
   ?>

</body>
</html>