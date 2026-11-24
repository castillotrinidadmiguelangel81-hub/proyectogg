<?php
session_start();
require 'conexion3.php';
header('Content-Type: application/json');

if (!isset($_SESSION['id_usuario'])) {
    echo json_encode(['status' => 'error', 'msg' => 'No has iniciado sesión.']);
    exit;
}

$id_usuario = $_SESSION['id_usuario'];

$stmt = $conexion->prepare("
    SELECT id_simulador, clasificados, ganador_cf1, ganador_cf2, ganador_cf3, ganador_cf4,
           ganador_sf1, ganador_sf2, ganador_final,
           DATE_FORMAT(fecha_guardado, '%d/%m/%Y %H:%i') AS fecha_guardado
    FROM simulador
    WHERE id_usuario = ?
    ORDER BY id_simulador DESC
");
$stmt->bind_param("i", $id_usuario);
$stmt->execute();
$resultado = $stmt->get_result();

$simuladores = [];
while ($row = $resultado->fetch_assoc()) {
    $row['clasificados'] = $row['clasificados'] ? json_decode($row['clasificados'], true) : [];
    $simuladores[] = $row;
}

if (count($simuladores) > 0) {
    echo json_encode(['status' => 'success', 'simuladores' => $simuladores]);
} else {
    echo json_encode(['status' => 'empty', 'msg' => 'No hay simuladores guardados.']);
}
?>