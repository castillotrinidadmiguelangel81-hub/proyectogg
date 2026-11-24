<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CONEXION.PHP</title>
     <link rel="stylesheet" href="css/estilos_form.css">
</head>
<body>
    <?php
    $conexion = mysqli_connect("localhost","root","","dat2");
    if($conexion){
        echo "Conexion exitosa";
    }else{
        echo "Conexion fallida";
    }
    ?>
</body>
</html>