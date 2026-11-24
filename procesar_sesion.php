<?php
session_start();
require 'conexion3.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$accion = $data['accion'] ?? '';
$nombre_usuario = $data['nombre_usuario'] ?? '';
$contrasena = $data['contrasena'] ?? '';

if (empty($nombre_usuario) || empty($contrasena)) {
    echo json_encode(['status' => 'error', 'msg' => 'Todos los campos son obligatorios']);
    exit;
}

if ($accion === 'registrar') {
    $stmt = $conexion->prepare("SELECT id_usuario FROM inicio_sesion WHERE nombre_usuario = ?");
    $stmt->bind_param("s", $nombre_usuario);
    $stmt->execute();
    
    if ($stmt->get_result()->num_rows > 0) {
        echo json_encode(['status' => 'error', 'msg' => 'El usuario ya existe. Por favor, inicia sesion.']);
        exit;
    }
    
    $hash = password_hash($contrasena, PASSWORD_DEFAULT);
    $stmt_insert = $conexion->prepare("INSERT INTO inicio_sesion (nombre_usuario, contrasena) VALUES (?, ?)");
    $stmt_insert->bind_param("ss", $nombre_usuario, $hash);
    
    if ($stmt_insert->execute()) {
        $_SESSION['id_usuario'] = $stmt_insert->insert_id;
        $_SESSION['nombre_usuario'] = $nombre_usuario;
        echo json_encode(['status' => 'success', 'msg' => 'Registro exitoso. Entrando...']);
    } else {
        echo json_encode(['status' => 'error', 'msg' => 'Error al registrar en la base de datos.']);
    }

} elseif ($accion === 'login') {
    $stmt = $conexion->prepare("SELECT id_usuario, contrasena FROM inicio_sesion WHERE nombre_usuario = ?");
    $stmt->bind_param("s", $nombre_usuario);
    $stmt->execute();
    $resultado = $stmt->get_result();
    
    if ($row = $resultado->fetch_assoc()) {
        if (password_verify($contrasena, $row['contrasena'])) {
            $_SESSION['id_usuario'] = $row['id_usuario'];
            $_SESSION['nombre_usuario'] = $nombre_usuario;
            echo json_encode(['status' => 'success', 'msg' => 'Sesion iniciada. Entrando...']);
        } else {
            echo json_encode(['status' => 'error', 'msg' => 'Contrasena incorrecta.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'msg' => 'Usuario no encontrado. Registrate primero.']);
    }
}
?>