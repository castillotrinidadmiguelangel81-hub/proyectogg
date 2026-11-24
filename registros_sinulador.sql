CREATE DATABASE registros_simulador;
USE registros_simulador;

CREATE TABLE inicio_sesion (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(50) NOT NULL
);

CREATE TABLE liga (
    id_liga INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL, 
    equipo VARCHAR(50) NOT NULL,
    GF INT DEFAULT 0,
    GC INT DEFAULT 0,
    DG INT DEFAULT 0,
    puntos INT DEFAULT 0,
    FOREIGN KEY (id_usuario) REFERENCES inicio_sesion(id_usuario) ON DELETE CASCADE
);

CREATE TABLE simulador (
    id_simulador INT AUTO_INCREMENT PRIMARY KEY,
    id_liga INT NOT NULL,
    id_usuario INT NOT NULL,
    ganador_cf1 VARCHAR(50),
    ganador_cf2 VARCHAR(50),
    ganador_cf3 VARCHAR(50),
    ganador_cf4 VARCHAR(50),
    ganador_sf1 VARCHAR(50),
    ganador_sf2 VARCHAR(50),
    ganador_final VARCHAR(50),
    FOREIGN KEY (id_liga) REFERENCES liga(id_liga) ON DELETE CASCADE,
    FOREIGN KEY (id_usuario) REFERENCES inicio_sesion(id_usuario) ON DELETE CASCADE
);
ALTER TABLE inicio_sesion ADD COLUMN contrasena VARCHAR(255) NOT NULL AFTER nombre_usuario;
INSERT INTO inicio_sesion (nombre_usuario, contrasena) VALUES ('admin', 'admin');
INSERT INTO liga (id_usuario, equipo, GF, GC, DG, puntos) VALUES (1, 'Liga General', 0, 0, 0, 0);

ALTER TABLE simulador ADD COLUMN fecha_guardado TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE simulador ADD COLUMN clasificados TEXT AFTER id_usuario;
