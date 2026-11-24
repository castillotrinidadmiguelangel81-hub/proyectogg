<?php
session_start();
require 'conexion3.php';
header('Content-Type: application/json');

if (!isset($_SESSION['id_usuario'])) {
    echo json_encode(['status' => 'error', 'msg' => 'No has iniciado sesión.']);
    exit;
}

$id_usuario = $_SESSION['id_usuario'];

$stmt = $conexion->prepare("DELETE FROM simulador WHERE id_usuario = ?");
$stmt->bind_param("i", $id_usuario);

if ($stmt->execute()) {
    $eliminados = $stmt->affected_rows;
    if ($eliminados > 0) {
        echo json_encode(['status' => 'success', 'msg' => "Se eliminaron $eliminados simulador(es) guardado(s)."]);
    } else {
        echo json_encode(['status' => 'info', 'msg' => 'No tenías simuladores guardados para borrar.']);
    }
} else {
    echo json_encode(['status' => 'error', 'msg' => 'Error al eliminar: ' . $stmt->error]);
}

$stmt->close();
$conexion->close();
?>