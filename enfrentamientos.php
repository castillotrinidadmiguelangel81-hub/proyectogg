<?php
// Conexión: valores por defecto de XAMPP. Cámbialos si tu MySQL usa otro usuario o contraseña.
$host = '127.0.0.1'; $usuario = 'root'; $clave = ''; $bd = 'ligamx';

header('Content-Type: application/json; charset=utf-8');
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $db = new mysqli($host, $usuario, $clave, $bd);
    $db->set_charset('utf8mb4');
    $accion = $_GET['accion'] ?? '';

    if ($accion === 'equipos') {
        // Solo equipos con partidos registrados, en orden alfabético
        $eq = $db->query("SELECT e.id, e.nombre, e.logo FROM equipos e
                          WHERE EXISTS (SELECT 1 FROM partidos p WHERE p.local_id = e.id OR p.visitante_id = e.id)
                          ORDER BY e.nombre")->fetch_all(MYSQLI_ASSOC);
        foreach ($eq as &$e) { $e['id'] = (int)$e['id']; }
        unset($e);
        $c = $db->query("SELECT MIN(temporada) AS a, MAX(temporada) AS z FROM partidos")->fetch_assoc();
        echo json_encode(['equipos' => $eq, 'cobertura' => $c['a'] . ' a ' . $c['z']], JSON_UNESCAPED_UNICODE);

    } elseif ($accion === 'partidos') {
        $a = (int)($_GET['a'] ?? 0);
        $b = (int)($_GET['b'] ?? 0);
        $st = $db->prepare("SELECT p.fecha, p.temporada, p.torneo, p.fase, p.local_id, p.visitante_id,
                                   l.nombre AS local, v.nombre AS visitante,
                                   p.goles_local, p.goles_visitante, p.penales_local, p.penales_visitante,
                                   p.tiempo_extra, p.adjudicado
                            FROM partidos p
                            JOIN equipos l ON l.id = p.local_id
                            JOIN equipos v ON v.id = p.visitante_id
                            WHERE (p.local_id = ? AND p.visitante_id = ?) OR (p.local_id = ? AND p.visitante_id = ?)
                            ORDER BY p.fecha DESC, p.id DESC");
        $st->bind_param('iiii', $a, $b, $b, $a);
        $st->execute();
        $rows = $st->get_result()->fetch_all(MYSQLI_ASSOC);
        foreach ($rows as &$r) {
            foreach (['local_id','visitante_id','goles_local','goles_visitante','tiempo_extra','adjudicado'] as $k) { $r[$k] = (int)$r[$k]; }
            foreach (['penales_local','penales_visitante'] as $k) { $r[$k] = $r[$k] === null ? null : (int)$r[$k]; }
        }
        unset($r);
        echo json_encode(['partidos' => $rows], JSON_UNESCAPED_UNICODE);

    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Acción no válida']);
    }
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo consultar la base de datos']);
}
