<?php
header('Content-Type: application/json; charset=utf-8');
$host = 'localhost';
$bd   = 'ligamx';
$user = 'root';
$pass = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$bd;charset=utf8mb4", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo conectar a la base de datos']);
    exit;
}

$accion    = $_GET['accion']    ?? '';
$temporada = $_GET['temporada'] ?? '';
$torneo    = $_GET['torneo']    ?? '';
$equipo    = trim($_GET['equipo'] ?? '');

switch ($accion) {
    case 'temporadas':
        $st = $pdo->query('SELECT DISTINCT temporada FROM posiciones ORDER BY temporada DESC');
        echo json_encode($st->fetchAll(PDO::FETCH_COLUMN));
        break;

    case 'torneos':
        $st = $pdo->prepare('SELECT DISTINCT torneo FROM posiciones WHERE temporada = ? ORDER BY torneo');
        $st->execute([$temporada]);
        echo json_encode($st->fetchAll(PDO::FETCH_COLUMN));
        break;

    case 'tabla':
        $sql = 'SELECT posicion, equipo, pj, g, e, p, gf, gc, (gf - gc) AS dg, pts
                FROM posiciones WHERE temporada = ? AND torneo = ?';
        $params = [$temporada, $torneo];
        if ($equipo !== '') {
            $sql .= ' AND equipo LIKE ?';
            $params[] = '%' . $equipo . '%';
        }
        $sql .= ' ORDER BY posicion';
        $st = $pdo->prepare($sql);
        $st->execute($params);
        echo json_encode($st->fetchAll());
        break;

    default:
        http_response_code(400);
        echo json_encode(['error' => 'Acción no válida']);
}