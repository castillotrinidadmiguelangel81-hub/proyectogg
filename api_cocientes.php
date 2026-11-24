<?php
header('Content-Type: application/json; charset=utf-8');

$host = "localhost";
$user = "root";
$pass = "";
$db   = "ligamx_portal";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Error de conexión a la base de datos"]);
    exit;
}

$conn->set_charset("utf8mb4");

$temporada = isset($_GET['temporada']) ? $conn->real_escape_string($_GET['temporada']) : 'Clausura 2023';

$sql = "SELECT * FROM tabla_cocientes_historica WHERE temporada_cierre = '$temporada' ORDER BY cociente DESC";
$result = $conn->query($sql);

$datos = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $datos[] = $row;
    }
}

echo json_encode($datos);
$conn->close();
?>