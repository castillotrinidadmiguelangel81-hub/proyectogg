<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Soporte</title>
     <link rel="stylesheet" href="css/estilos_form.css">
</head>
<body>
    <a href="index.html" target="_blank" class="btn-enlace">Regresar</a>

    <!-- Puedes cambiar "procesar_ticket.php" por el nombre de tu archivo PHP controlador -->
    <form action="insertar2.php" method="post">
        
        <!-- Nombre -->
        <label for="nombre">Nombre *</label><br>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required>
        <br><br>

        <!-- Correo -->
       <!-- Cambiar name="correo" por name="email" -->
<label for="correo">Correo *</label><br>
<input type="email" id="correo" name="email" placeholder="correo@ejemplo.com" required>

        <br><br>

        <!-- Asunto -->
        <label for="asunto">Asunto *</label><br>
        <input type="text" id="asunto" name="asunto" placeholder="Resumen del problema" required>
        <br><br>

        <!-- Categoría -->
        <label for="categoria">Categoría</label><br>
        <select id="categoria" name="categoria">
            <option value="soporte_tecnico">Soporte Técnico</option>
            <option value="facturacion">Facturación</option>
            <option value="ventas">Ventas</option>
        </select>
        <br><br>

        <!-- Prioridad -->
        <label for="prioridad">Prioridad</label><br>
        <select id="prioridad" name="prioridad">
            <option value="baja">Baja</option>
            <option value="media" selected>Media</option>
            <option value="alta">Alta</option>
        </select>
        <br><br>

        <!-- Mensaje -->
        <label for="mensaje">Mensaje *</label><br>
        <textarea id="mensaje" name="mensaje" placeholder="Escribe aquí los detalles..." rows="5" required></textarea>
        <br><br>
       
        <!-- Botón de envío -->
        <input type="submit" value="Enviar Ticket">
    </form>   

</body>
</html>