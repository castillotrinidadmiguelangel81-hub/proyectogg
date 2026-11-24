CREATE DATABASE IF NOT EXISTS ligamx_portal CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE ligamx_portal;

CREATE TABLE IF NOT EXISTS tabla_cocientes_historica (
    id_registro INT AUTO_INCREMENT PRIMARY KEY,
    temporada_cierre VARCHAR(50) NOT NULL,
    posicion_cociente INT NOT NULL,
    equipo VARCHAR(100) NOT NULL,
    escudo_url VARCHAR(150) NOT NULL,
    puntos_totales INT NOT NULL,
    partidos_jugados INT NOT NULL,
    cociente DECIMAL(6,4) NOT NULL,
    estatus ENUM('Salvado', 'Multa Baja', 'Multa Media', 'Multa Alta / Descenso') NOT NULL,
    monto_multa VARCHAR(100) DEFAULT 'Sin multa',
    equipo_ascenso_afectado VARCHAR(150) NOT NULL,
    consecuencias_historicas TEXT NOT NULL,
    torneos_futuros_perdidos TEXT NOT NULL
);

INSERT INTO tabla_cocientes_historica 
(temporada_cierre, posicion_cociente, equipo, escudo_url, puntos_totales, partidos_jugados, cociente, estatus, monto_multa, equipo_ascenso_afectado, consecuencias_historicas, torneos_futuros_perdidos) 
VALUES
-- TEMPORADA 2022-2023 (Cierre Clausura 2023)
('Clausura 2023', 18, 'Querétaro', 'img/queretaro.jpg', 94, 102, 0.9216, 'Multa Alta / Descenso', '$80,000,000 MXN (Antes 120 MDP)', 'Tapatío (Campeón de Campeones Expansión MX 22-23)', 
'Al quedar último del cociente, Querétaro no pudo disputar el Repechaje del Clausura 2023 a pesar de haber terminado en el lugar 10 de la tabla general. Por reglamento, su lugar fue cedido al lugar 13 (Santos Laguna).', 
'De haber descendido en 2023, se habría perdido su histórica participación en la Leagues Cup 2023 donde llegó hasta Cuartos de Final, siendo el equipo mexicano sorpresa del certamen.'),

('Clausura 2023', 17, 'Mazatlán FC', 'img/mazatlan.png', 103, 102, 1.0098, 'Multa Media', '$47,000,000 MXN (Ajustada a 33 MDP)', 'Celaya / Atlante (Subcampeones de Expansión)', 
'Tras caer en la última jornada, el dueño Ricardo Salinas Pliego bajó al vestidor y descontó/cobró 30 mil dólares a los jugadores por el fracaso deportivo que lo obligó a pagar la multa millonaria de la porcentual.', 
'Se habría perdido la Leagues Cup 2024 donde alcanzó los Octavos de Final eliminando a Cruz Azul, además de frenar la consolidación de la plaza en Sinaloa.'),

('Clausura 2023', 16, 'Xolos de Tijuana', 'img/tijuana.jpg', 105, 102, 1.0294, 'Multa Baja', '$33,000,000 MXN', 'No aplica (3er lugar de multa)', 
'Tijuana pagó la multa más baja por segundo año consecutivo debido a la acumulación de malos torneos desde 2020.', 
'Evitó perder la inversión de infraestructura en el Estadio Caliente y la posterior llegada de Juan Carlos Osorio en 2024 que devolvió al club a Liguilla.'),

('Clausura 2023', 15, 'FC Juárez', 'img/juarez.jpg', 108, 102, 1.0588, 'Salvado', 'Sin multa', 'No aplica', 
'Logró salvarse de pagar multa en las últimas jornadas del Clausura 2023 tras haber pagado la multa máxima un año antes.', 
'Mantuvo la franquicia en Primera División.'),

-- TEMPORADA 2021-2022 (Cierre Clausura 2022)
('Clausura 2022', 18, 'FC Juárez', 'img/juarez.jpg', 94, 100, 0.9400, 'Multa Alta / Descenso', '$80,000,000 MXN', 'Atlante (Campeón de Campeones Expansión MX 21-22)', 
'FC Juárez finalizó último de la porcentual. El Atlante había ganado el Campeón de Campeones de la Liga de Expansión, por lo que los Potros habrían regresado a Primera División en lugar de los Bravos.', 
'Juárez se habría perdido el Repechaje del Apertura 2022 (su primera fase final en la historia de Liga MX) y la venta récord de jugadores como Gabriel "Toro" Fernández.'),

('Clausura 2022', 17, 'Xolos de Tijuana', 'img/tijuana.jpg', 101, 100, 1.0100, 'Multa Media', '$47,000,000 MXN', 'Atlético Morelia (Campeón Clausura 2022)', 
'Grupo Caliente tuvo que desembolsar 47 millones de pesos para mantener limpia la franquicia fronteriza.', 
'Mantuvieron su lugar en el máximo circuito.'),

('Clausura 2022', 16, 'Toluca', 'img/toluca.jpg', 110, 100, 1.1000, 'Multa Baja', '$33,000,000 MXN', 'No aplica', 
'Uno de los clubes más ganadores de México cayó hasta el antepenúltimo lugar porcentual tras el desastroso Clausura 2022 bajo el mando de Ignacio Ambriz.', 
'De haber existido descenso para el 16° o si hubiera caído dos puestos más, Toluca se habría perdido el Subcampeonato del Apertura 2022 donde llegó a la Final ante Pachuca.'),

-- TEMPORADA 2020-2021 (Cierre Guardianes 2021)
('Guardianes 2021', 18, 'Atlético de San Luis', 'img/sanluis.jpg', 63, 62, 1.0161, 'Multa Alta / Descenso', '$120,000,000 MXN', 'Tepatitlán FC / Atlético Morelia (Finalistas Campeón de Campeones)', 
'Se estrenó el sistema de multas millonarias. El Atlético de Madrid tuvo que pagar 120 millones de pesos para evitar el descenso administrativo de su filial mexicana.', 
'San Luis se habría perdido sus mejores torneos en Liga MX: Semifinales en el Apertura 2023 (eliminando a Monterrey) y Semifinales en el Apertura 2024 (eliminando a Tigres).'),

('Guardianes 2021', 17, 'Atlas', 'img/atlas.jpg', 107, 101, 1.0594, 'Multa Media', '$70,000,000 MXN', 'Tampico Madero (Campeón Guardianes 2020 Expansión)', 
'Grupo Orlegi pagó 70 millones de pesos de multa por el penúltimo lugar de los Zorros.', 
'¡Suceso histórico! Si hubiera existido descenso para los últimos dos lugares o si Atlas caía un puesto más, se habría perdido el histórico BICAMPEONATO (Apertura 2021 y Clausura 2022) rompiendo 70 años de sequía.'),

('Guardianes 2021', 16, 'FC Juárez', 'img/juarez.jpg', 108, 101, 1.0693, 'Multa Baja', '$50,000,000 MXN', 'No aplica', 
'Pagó la primera multa baja instaurada por la Asamblea de Dueños tras la pandemia.', 
'Continuó su proyecto en la frontera.');