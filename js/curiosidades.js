// Base de datos de 25 hechos históricos verificados y meticulosamente seleccionados de la Liga MX
const datosCuriosos = [
    {
        titulo: "El Máximo Goleador Histórico",
        texto: "Evanivaldo Castro 'Cabinho' posee un récord que parece imposible de romper. Anotó 312 goles en la Primera División de México jugando para Pumas, Atlante, León y Tigres.",
        imagen: "img/cabinho.jpg"
    },
    {
        titulo: "El Récord de Goles en un Torneo Corto",
        texto: "En el Apertura 2002, el paraguayo José Saturnino Cardozo anotó la increíble cantidad de 29 goles en 19 jornadas con el Toluca. Nadie ha estado cerca de igualarlo.",
        imagen: "img/cardozo.jpg"
    },
    {
        titulo: "El Muro en la Portería",
        texto: "Durante el Torneo Apertura 2008, el arquero del Toluca, Hernán Cristante, impuso el récord de más minutos sin recibir gol: 772 minutos consecutivos.",
        imagen: "img/cristante.jpg"
    },
    {
        titulo: "El Rey de Copas",
        texto: "Las Águilas del Club América son el equipo más laureado en la historia del fútbol profesional mexicano, ostentando 16 títulos de Primera División.",
        imagen: "img/america_16.jpg"
    },
    {
        titulo: "Campeón con Menos Puntos",
        texto: "En el torneo Apertura 2004, los Pumas de la UNAM hicieron historia al clasificar a la Liguilla como novenos (por grupos) con tan solo 23 puntos. Llegaron a la final y fueron campeones.",
        imagen: "img/pumas_2004.jpg"
    },
    {
        titulo: "Campeón en Tres Divisiones",
        texto: "Los Tecos de la UAG tienen un logro único en México: son el único club en la historia que ha ganado campeonatos en la Tercera División, Segunda División y Primera División (1993-94).",
        imagen: "img/tecos_campeon.jpg"
    },
    {
        titulo: "La Mayor Goleada de la Historia",
        texto: "El 26 de mayo de 1946, los Tiburones Rojos de Veracruz le propinaron una paliza histórica a los Rayados de Monterrey, derrotándolos 14-0.",
        imagen: "img/veracruz_goleada.jpg"
    },
    {
        titulo: "El Coleccionista de Botines",
        texto: "Nadie ha ganado más títulos de goleo individual que 'Cabinho'. Logró ser campeón de goleo en 8 ocasiones (4 con Pumas, 3 con Atlante y 1 con León).",
        imagen: "img/goleo.jpg"
    },
    {
        titulo: "Los Reyes del 'Campeonísimo'",
        texto: "Sabás Ponce y José 'Jamaicón' Villegas comparten el récord de más títulos de liga ganados como jugadores. Ambos levantaron 8 copas en la época dorada de las Chivas.",
        imagen: "img/campeonisimo.jpg"
    },
    {
        titulo: "El Subcampeonísimo",
        texto: "Cruz Azul ostenta el triste récord de ser el equipo que más finales de Liga MX ha perdido en la historia, acumulando 11 subcampeonatos (el más reciente en el Clausura 2024).",
        imagen: "img/cruz_azul.jpg"
    },
    {
        titulo: "Los Inamovibles",
        texto: "Desde que se profesionalizó el fútbol mexicano en 1943, solo dos equipos han disputado absolutamente todas las temporadas en Primera División sin descender jamás: América y Chivas.",
        imagen: "img/clasico.jpg"
    },
    {
        titulo: "El Primer Bicampeón (Torneos Cortos)",
        texto: "En el año 2004, bajo el mando de Hugo Sánchez, los Pumas se convirtieron en el primer equipo en lograr el Bicampeonato desde que se instauró el formato de Torneos Cortos.",
        imagen: "img/hugo_pumas.jpg"
    },
    {
        titulo: "Los Maestros del Banquillo",
        texto: "Ricardo 'Tuca' Ferretti e Ignacio Trelles comparten el trono como los directores técnicos con más títulos de liga en la historia de México, con 7 campeonatos cada uno.",
        imagen: "img/tecnicos.jpg"
    },
    {
        titulo: "El Estadio en las Nubes",
        texto: "El Estadio Nemesio Diez, casa del Toluca, es el inmueble de la Liga MX situado a mayor altitud, elevándose a aproximadamente 2,660 metros sobre el nivel del mar.",
        imagen: "img/nemesio.jpg"
    },
    {
        titulo: "El Jugador Incombustible",
        texto: "El histórico portero Óscar 'El Conejo' Pérez mantiene el récord absoluto de más partidos disputados en la Liga MX, con un total de 740 encuentros jugados a lo largo de su longeva carrera.",
        imagen: "img/conejo.jpg"
    },
    {
        titulo: "El Equipo Fugaz",
        texto: "Los Colibríes de Cuernavaca tienen el récord de menor tiempo de vida en Primera División. Solo existieron durante 6 meses en el Torneo Clausura 2003 antes de descender y desaparecer.",
        imagen: "img/colibries.jpg"
    },
    {
        titulo: "El Primer Campeón Profesional",
        texto: "En la temporada 1943-1944 se instauró el fútbol profesional en México. El Asturias FC se proclamó como el primer monarca de esta nueva era al vencer al España.",
        imagen: "img/asturias.jpg"
    },
    {
        titulo: "El Récord de Puntos (17 Jornadas)",
        texto: "En torneos cortos de 17 jornadas, el récord de puntos es de 42. Lo logro Cruz Azul en el torneo Apertura 2024.",
        imagen: "img/record_puntos.jpg"
    },
    {
        titulo: "La Racha de Victorias Perfecta",
        texto: "León (C-2019) y Cruz Azul (G-2021) comparten la imbatible racha de 12 victorias consecutivas en fase regular de la Primera División.",
        imagen: "img/victorias.jpg"
    },
    {
        titulo: "La Tradición 100% Mexicana",
        texto: "El Club Deportivo Guadalajara (Chivas) ha mantenido inquebrantable su política de jugar exclusivamente con futbolistas de nacionalidad mexicana por nacimiento desde hace más de un siglo.",
        imagen: "img/chivas_mex.jpg"
    },
    {
        titulo: "Del Ascenso a la Gloria",
        texto: "Pachuca (Invierno 1999) y León (Apertura 2013) lograron la hazaña histórica de coronarse campeones de la Liga MX al año siguiente de haber conseguido su ascenso desde la Segunda División.",
        imagen: "img/ascenso_campeon.jpg"
    },
    {
        titulo: "El Origen de la Regla 20/11",
        texto: "Instaurada en el Torneo Apertura 2005, la regla obligaba a los clubes a alinear a jugadores menores de 20 años y 11 meses por un mínimo de 1,000 minutos, dando origen a talentos como 'Chicharito' y Guardado.",
        imagen: "img/regla2011.jpg"
    },
    {
        titulo: "El Portero Goleador",
        texto: "El acapulqueño Jorge Campos no solo fue un atajador brillante, sino que anotó 34 goles oficiales en la Primera División Mexicana (varios jugando como delantero y otros de tiro libre/penal).",
        imagen: "img/campos.jpg"
    },
    {
        titulo: "El Remate de Moisés Muñoz",
        texto: "En la Final del Clausura 2013, el portero del América remató de cabeza al minuto 92:14. El balón desvió en Alejandro Castro y obligó los penales, donde América sería campeón.",
        imagen: "img/moises.jpg"
    },
    {
        titulo: "El Árbitro de Hierro",
        texto: "Armando Archundia ostenta el récord de la liga como el árbitro central que más partidos oficiales pitó en el fútbol mexicano, sumando un total de 591 encuentros dirigidos.",
        imagen: "img/archundia.jpg"
    }
];

let datoActualIndex = -1;

function mostrarDatoAleatorio() {
    let nuevoIndex;
    // Evita que el mismo dato se repita dos veces seguidas
    do {
        nuevoIndex = Math.floor(Math.random() * datosCuriosos.length);
    } while (nuevoIndex === datoActualIndex && datosCuriosos.length > 1);
    
    datoActualIndex = nuevoIndex;
    const dato = datosCuriosos[datoActualIndex];
    
    document.getElementById("drawer-titulo").innerText = dato.titulo;
    document.getElementById("drawer-texto").innerText = dato.texto;
    
    // Asignación de imagen (Asegúrate de colocar imágenes reales en la ruta o cambiar src temporal)
    const imgElement = document.getElementById("drawer-img");
    imgElement.src = dato.imagen; 
    
    // Si la imagen falla en cargar, usa un placeholder para evitar espacios vacíos en tu diseño
    imgElement.onerror = function() {
        this.src = 'https://via.placeholder.com/350x220/006847/FFFFFF?text=Liga+MX+Curiosidad';
    };

    abrirDrawer();
}

function abrirDrawer() {
    document.getElementById("overlay-drawer").classList.add("activo");
    document.getElementById("drawer-izquierdo").classList.add("abierto");
}

function cerrarDrawer() {
    document.getElementById("overlay-drawer").classList.remove("activo");
    document.getElementById("drawer-izquierdo").classList.remove("abierto");
}