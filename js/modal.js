const datosEquipos = {
    america: {
        nombre: "Club América",
        imagen: "../img/america.jpg",
        info: `
            <p><strong>Participaciones:</strong> 7 (1998, 2000, 2002, 2004, 2007, 2008, 2011)</p>
            <p><strong>Mejor resultado:</strong> Semifinales (2000, 2002, 2008)</p>
            <p><strong>Partidos jugados:</strong> 72</p>
            <p><strong>Dato destacado:</strong> Es el equipo mexicano con más victorias (37) en la historia de la competición sudamericana.</p>
        `
    },
    chivas: {
        nombre: "Guadalajara",
        imagen: "img/chivas.png",
        info: `
            <p><strong>Participaciones:</strong> 7 (1998, 2005, 2006, 2008, 2009, 2010, 2012)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2010)</p>
            <p><strong>Partidos jugados:</strong> 64</p>
            <p><strong>Dato destacado:</strong> Llegó a la final jugando exclusivamente con futbolistas mexicanos, perdiendo ante el Inter de Porto Alegre.</p>
        `
    },
    cruzazul: {
        nombre: "Cruz Azul",
        imagen: "img/cruzazul.png",
        info: `
            <p><strong>Participaciones:</strong> 3 (2001, 2003, 2012)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2001)</p>
            <p><strong>Partidos jugados:</strong> 44</p>
            <p><strong>Dato destacado:</strong> Primer club mexicano en llegar a la final. Venció a Boca Juniors en La Bombonera, cayendo finalmente en tanda de penales.</p>
        `
    },
    tigres: {
        nombre: "Tigres UANL",
        imagen: "img/tigres.png",
        info: `
            <p><strong>Participaciones:</strong> 4 (2005, 2006, 2012, 2015)</p>
            <p><strong>Mejor resultado:</strong> Subcampeón (2015)</p>
            <p><strong>Partidos jugados:</strong> 34</p>
            <p><strong>Dato destacado:</strong> En 2015 invirtió fuertemente en su plantilla llegando a la final contra River Plate.</p>
        `
    },
    pumas: {
        nombre: "Pumas UNAM",
        imagen: "img/pumas.png",
        info: `
            <p><strong>Participaciones:</strong> 3 (2003, 2006, 2016)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2016)</p>
            <p><strong>Partidos jugados:</strong> 24</p>
            <p><strong>Dato destacado:</strong> Su mejor torneo fue en 2016, donde cayó agónicamente en penales frente a Independiente del Valle.</p>
        `
    },
    toluca: {
        nombre: "Deportivo Toluca",
        imagen: "img/toluca.png",
        info: `
            <p><strong>Participaciones:</strong> 3 (2007, 2013, 2016)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2007, 2016)</p>
            <p><strong>Partidos jugados:</strong> 22</p>
            <p><strong>Dato destacado:</strong> En 2016 logró terminar la fase de grupos invicto liderando el llamado "Grupo de la Muerte".</p>
        `
    },
    monterrey: {
        nombre: "Rayados de Monterrey",
        imagen: "img/monterrey.png",
        info: `
            <p><strong>Participaciones:</strong> 2 (1999, 2010)</p>
            <p><strong>Mejor resultado:</strong> Fase de grupos (1999, 2010)</p>
            <p><strong>Partidos jugados:</strong> 12</p>
            <p><strong>Dato destacado:</strong> Aunque dominó Concacaf, en Libertadores no logró superar la primera ronda en sus dos participaciones.</p>
        `
    },
    atlas: {
        nombre: "Atlas",
        imagen: "img/atlas.png",
        info: `
            <p><strong>Participaciones:</strong> 3 (2000, 2008, 2015)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2000, 2008)</p>
            <p><strong>Partidos jugados:</strong> 28</p>
            <p><strong>Dato destacado:</strong> En el año 2000, desplegaron un fútbol espectacular bajo el mando de Ricardo La Volpe, cayendo ante Palmeiras.</p>
        `
    },
    morelia: {
        nombre: "Monarcas Morelia",
        imagen: "img/morelia.png",
        info: `
            <p><strong>Participaciones:</strong> 4 (2002, 2010, 2014, 2015)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2002)</p>
            <p><strong>Partidos jugados:</strong> 14</p>
            <p><strong>Dato destacado:</strong> A pesar de sus 4 apariciones, en 2014 y 2015 fue eliminado en la ronda previa (repechaje).</p>
        `
    },
    necaxa: {
        nombre: "Necaxa",
        imagen: "img/necaxa.png",
        info: `
            <p><strong>Participaciones:</strong> 2 (1999, 2007)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (1999, 2007)</p>
            <p><strong>Partidos jugados:</strong> 14</p>
            <p><strong>Dato destacado:</strong> Destacó en 2007 eliminando a equipos sudamericanos de tradición antes de caer contra Nacional de Uruguay.</p>
        `
    },
    pachuca: {
        nombre: "Pachuca",
        imagen: "img/pachuca.png",
        info: `
            <p><strong>Participaciones:</strong> 2 (2005, 2009)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2005)</p>
            <p><strong>Partidos jugados:</strong> 10</p>
            <p><strong>Dato destacado:</strong> Pese a ser el único equipo mexicano en ganar la Copa Sudamericana, en Libertadores tuvo pasos discretos.</p>
        `
    },
    sanluis: {
        nombre: "San Luis",
        imagen: "img/sanluis.png",
        info: `
            <p><strong>Participaciones:</strong> 3 (2009, 2010, 2011)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2010)</p>
            <p><strong>Partidos jugados:</strong> 14</p>
            <p><strong>Dato destacado:</strong> En 2009 tuvo que retirarse en octavos por el brote de H1N1. Conmebol le respetó el lugar directo a octavos en 2010.</p>
        `
    },
    santos: {
        nombre: "Santos Laguna",
        imagen: "img/santos.png",
        info: `
            <p><strong>Participaciones:</strong> 2 (2004, 2014)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2004, 2014)</p>
            <p><strong>Partidos jugados:</strong> 16</p>
            <p><strong>Dato destacado:</strong> En 2004 fue eliminado dramáticamente en tanda de penales por River Plate con decisiones arbitrales polémicas.</p>
        `
    },
    tijuana: {
        nombre: "Xolos de Tijuana",
        imagen: "img/tijuana.png",
        info: `
            <p><strong>Participaciones:</strong> 1 (2013)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2013)</p>
            <p><strong>Partidos jugados:</strong> 10</p>
            <p><strong>Dato destacado:</strong> Rozó las semifinales, pero un penal fallado por Duvier Riascos al minuto 93 ante el eventual campeón Atlético Mineiro los eliminó.</p>
        `
    },
    leon: {
        nombre: "Club León",
        imagen: "img/leon.png",
        info: `
            <p><strong>Participaciones:</strong> 2 (2013, 2014)</p>
            <p><strong>Mejor resultado:</strong> Octavos de final (2014)</p>
            <p><strong>Partidos jugados:</strong> 10</p>
            <p><strong>Dato destacado:</strong> En 2014 logró la hazaña de vencer al Flamengo en el mismísimo Estadio Maracaná.</p>
        `
    },
    jaguares: {
        nombre: "Jaguares de Chiapas",
        imagen: "img/jaguares.png",
        info: `
            <p><strong>Participaciones:</strong> 1 (2011)</p>
            <p><strong>Mejor resultado:</strong> Cuartos de final (2011)</p>
            <p><strong>Partidos jugados:</strong> 10</p>
            <p><strong>Dato destacado:</strong> Sorprendió al continente llegando a cuartos en su debut absoluto, eliminados por Cerro Porteño.</p>
        `
    },
    puebla: {
        nombre: "Puebla",
        imagen: "img/puebla.png",
        info: `
            <p><strong>Participaciones:</strong> 1 (2016)</p>
            <p><strong>Mejor resultado:</strong> Primera Fase (2016)</p>
            <p><strong>Partidos jugados:</strong> 2</p>
            <p><strong>Dato destacado:</strong> Su única participación terminó rápido al ser eliminados en la ronda previa al empatar ante Racing Club.</p>
        `
    },
    tecos: {
        nombre: "Estudiantes Tecos",
        imagen: "img/tecos.png",
        info: `
            <p><strong>Participaciones:</strong> 1 (2010)</p>
            <p><strong>Mejor resultado:</strong> Primera Fase (2010)</p>
            <p><strong>Partidos jugados:</strong> 2</p>
            <p><strong>Dato destacado:</strong> Perdieron en la fase preliminar frente a Juan Aurich de Perú, impidiendo su paso a grupos.</p>
        `
    }
};

const datosPartidos = {
    chivas_boca: {
        nombre: "La Goleada Histórica",
        imagen: "img/chivas.jpg",
        info: `
            <p><strong>Fecha:</strong> 2 de Junio de 2005</p>
            <p><strong>Contexto histórico:</strong> Partido de ida de los Cuartos de Final. Boca Juniors llegaba como el amplio favorito del certamen, pero el Estadio Jalisco presenció uno de los mayores bailes ofensivos de un equipo mexicano contra un gigante sudamericano.</p>
            <p><strong>Jugadores sobresalientes:</strong> Adolfo "Bofo" Bautista, Ramón Morales, Oswaldo Sánchez, Martín Palermo (Boca).</p>
            <p><strong>Consecuencias:</strong> Chivas ganó 4-0. Esto generó tanta frustración en el equipo argentino que en el partido de vuelta en La Bombonera se desató una trifulca que culminó con el técnico de Boca escupiendo al Bofo Bautista.</p>
        `
    },
    cruzazul_rosario: {
        nombre: "El Pase a la Primera Final",
        imagen: "img/cruzazul.jpg",
        info: `
            <p><strong>Fecha:</strong> 30 de Mayo de 2001</p>
            <p><strong>Contexto histórico:</strong> Semifinal de ida. Los clubes mexicanos solían estancarse en semifinales, pero Cruz Azul jugó con enorme autoridad contra Rosario Central, demostrando que México podía competir por la copa.</p>
            <p><strong>Jugadores sobresalientes:</strong> José Saturnino Cardozo (refuerzo), Francisco Palencia, Oscar "Conejo" Pérez.</p>
            <p><strong>Consecuencias:</strong> La victoria 2-0 en casa, seguida de un empate 3-3 en Argentina, convirtió a Cruz Azul en el primer equipo mexicano en la historia en alcanzar la final de la Copa Libertadores, ganando el respeto de todo el continente.</p>
        `
    }
};

function abrirModalEquipo(id) {
    const data = datosEquipos[id];
    if (data) {
        document.getElementById('modal-titulo').innerText = data.nombre;
        
        const imgEl = document.getElementById('modal-imagen');
        imgEl.src = data.imagen;
        imgEl.className = 'modal-logo-equipo'; // Asigna clase redonda/pequeña
        
        document.getElementById('modal-info').innerHTML = data.info;
        document.getElementById('ventana-modal').style.display = 'flex';
    }
}

function abrirModalPartido(id) {
    const data = datosPartidos[id];
    if (data) {
        document.getElementById('modal-titulo').innerText = data.nombre;
        
        const imgEl = document.getElementById('modal-imagen');
        imgEl.src = data.imagen;
        imgEl.className = 'modal-img-partido'; // Asigna clase rectangular/grande
        
        document.getElementById('modal-info').innerHTML = data.info;
        document.getElementById('ventana-modal').style.display = 'flex';
    }
}

function cerrarModal() {
    document.getElementById('ventana-modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('ventana-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}