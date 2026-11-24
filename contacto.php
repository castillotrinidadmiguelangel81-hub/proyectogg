<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto.php</title>
     <link rel="stylesheet" href="css/estilos_form.css">
</head>
<body>
<nav>
    <a href="index.html">Inicio</a>
    <a href="contacto.php">Contacto</a>
<nav>
    <h1>REGISTRARME</h1>
    <form action="registro.php" method="get">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" 
        name="nombre">
        <br>
        <label for="email"> E-mail</label>
        <input type="email" name="correo">
        <br>
        <label for="tel"> Telefono</label>
        <input type="tel" name="telefono">
        <br>
       

        <input type="submit" value="Registrame">
</form>   
</body>
</html>