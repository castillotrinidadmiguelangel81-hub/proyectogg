<?php
session_start();
require 'conexion3.php';
header('Content-Type: application/json');

if (!isset($_SESSION['id_usuario'])) {
    echo json_encode(['status' => 'error', 'msg' => 'No has iniciado sesión.']);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);
$id_usuario = $_SESSION['id_usuario'];
$clasificados_json = json_encode($data['clasificados'] ?? [], JSON_UNESCAPED_UNICODE);

try {
    $stmtBuscar = $conexion->prepare("SELECT id_liga FROM liga WHERE id_usuario = ? LIMIT 1");
    $stmtBuscar->bind_param("i", $id_usuario);
    $stmtBuscar->execute();
    $resLiga = $stmtBuscar->get_result();

    if ($filaLiga = $resLiga->fetch_assoc()) {
        $id_liga = $filaLiga['id_liga'];
    } else {
        $stmtCrear = $conexion->prepare("INSERT INTO liga (id_usuario, equipo, GF, GC, DG, puntos) VALUES (?, 'Liga de Usuario', 0, 0, 0, 0)");
        $stmtCrear->bind_param("i", $id_usuario);
        $stmtCrear->execute();
        $id_liga = $stmtCrear->insert_id;
    }

    $stmt = $conexion->prepare("
        INSERT INTO simulador (id_liga, id_usuario, clasificados, ganador_cf1, ganador_cf2, ganador_cf3, ganador_cf4, ganador_sf1, ganador_sf2, ganador_final) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->bind_param("iissssssss", 
        $id_liga, 
        $id_usuario, 
        $clasificados_json,
        $data['ganador_cf1'], 
        $data['ganador_cf2'], 
        $data['ganador_cf3'], 
        $data['ganador_cf4'], 
        $data['ganador_sf1'], 
        $data['ganador_sf2'], 
        $data['ganador_final']
    );

    $stmt->execute();
    echo json_encode(['status' => 'success', 'msg' => 'Resultados guardados exitosamente.']);

} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'msg' => 'Error al guardar: ' . $e->getMessage()]);
}
?>