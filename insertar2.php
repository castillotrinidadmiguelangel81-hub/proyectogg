<?php
// insertar.php - Guardar Ticket de Soporte con PDO
require_once 'conexion2.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitización para prevenir scripts maliciosos (XSS)
    $nombre    = htmlspecialchars(trim($_POST['nombre']), ENT_QUOTES, 'UTF-8');
    $email     = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $asunto    = htmlspecialchars(trim($_POST['asunto']), ENT_QUOTES, 'UTF-8');
    $categoria = $_POST['categoria'];
    $prioridad = $_POST['prioridad'];
    $mensaje   = htmlspecialchars(trim($_POST['mensaje']), ENT_QUOTES, 'UTF-8');

    if (!empty($nombre) && !empty($email) && !empty($mensaje)) {
        try {
            // Sentencia SQL preparada
            $sql = "INSERT INTO mensajes_contacto (nombre, email, asunto, categoria, prioridad, mensaje) 
                    VALUES (:nombre, :email, :asunto, :categoria, :prioridad, :mensaje)";
            
            $stmt = $pdo->prepare($sql);

            // Ejecución enviando arreglo asociativo directo
            $resultado = $stmt->execute([
                ':nombre'    => $nombre,
                ':email'     => $email,
                ':asunto'    => $asunto,
                ':categoria' => $categoria,
                ':prioridad' => $prioridad,
                ':mensaje'   => $mensaje
            ]);

            if ($resultado) {
                echo "¡Mensaje de soporte guardado con éxito!";
            }

        } catch (PDOException $e) {
            echo "Error al guardar el ticket: " . $e->getMessage();
        }
    }
}
header("Location: index.html");
exit();
?>