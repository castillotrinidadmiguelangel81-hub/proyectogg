const datosMermeladeros = {
    identidad: `
        <div class="mrm-identidad-grid">
            <img src="img/mermeladeros.jpg" alt="Escudo Mermeladeros FC" class="mrm-logo-escudo" onerror="this.src='img/ligamx.png'">
            <div class="mrm-identidad-texto">
                <h3>El Origen del Escudo de Mermeladeros FC</h3>
                <p>El emblema de <strong>Mermeladeros FC</strong> fusiona la tradición artesanal mexicana con el humor caracteristico del grupo que lo conforma, el logo utiliza los colores morados tipicos de la mermelada de zarzampora con el dorado y negro para generar contraste.</p>
                <p>En el escudo podemos ver dos estrellas que representan los titulos de cachorros fc, club que funciona como cantera del actual equipo y de donde muchos jugadores del primer equipo tuvieron esos dos titulos de liga, es una manera de honrar al club que dio a conocer a varios de nuestros jugadores.</p>
            </div>
        </div>
    `,
    convocados: [
        { dorsal: "2", pos: "POR", nombre: "David 'El abuelo' Pamatz", desc: "El unico wey que se queda en su posicion (es portero) parece mas defensa que portero porque las unicas que le llegan las barre en vez de atajarlas, fundador del equipo y creador de esta pagina" },
        { dorsal: "4", pos: "DEF", nombre: "Eduardo 'El unico bueno' Amador", desc: "Central impasable como los hay pocos es papa de Lalo y  nos hecha la mano cuando el rival es dificil, tiene un record impensable jamas ha ganado un partido con nostros, siempre que esta en cancha se pierde" },
        { dorsal: "8", pos: "DEF", nombre: "Eduardo 'sixsevenboy' Zaid", desc: "Niño con aura y una defensa buena pero para el otro equipo definitivamente un jugador de futbol" },
        { dorsal: "19", pos: "MED", nombre: "Angel Barrera", desc: "Extremo desequilibrante para nuestro propio equipo, por banda derecha con velocidad letal (para nosotros) al contragolpe." },
        { dorsal: "6", pos: "MED", nombre: "Haziel Cossio", desc: "El equilibrio del mediocampo; recupera balones y distribuye con precisión, de él no podemos hablar mal porque es el unico que resuelve partidos cuando el esta mermeladeros se vuelve importante y de temer." },
        { dorsal: "292", pos: "MED", nombre: "Oliver 'ardillita' Aban ", desc: "El Terror de la pelota cuando maradona dijo que cuidaramos la pelota era de él, jugadores como el los hay pocos y esperemos esa tendencian siga." },
        { dorsal: "10", pos: "MED", nombre: "Alberto 'Cuervo' Galicia", desc: "Dice que sabe jugar por llegar a 3ra division mexicana pero cada partido demuestra mas el porque le cobramos arbitraje." },
        { dorsal: "14", pos: "MED", nombre: "Gabo 'Vivian'", desc: "Una vez llevo 7000 pesos para salir al centro con su novia nada más que agregar." },
        { dorsal: "15", pos: "DEL", nombre: "Angel Flores", desc: "El arte de jugar enculado nos lo demuestra este hombre con cada jugada que logra (a medias), porfavor SAMANTHA no lo dejes que sino perdemos un jugador." },
        { dorsal: "9", pos: "DEL", nombre: "Derek Ramos", desc: "Referente en el área rival; letal de cabeza y con olfato goleador nato, vision de juego impecable, tiro de larga distancia, cobrador de penaltis, cobrador de tiros libres excepcional (Todo eso le falta)." }
    ],
    debut: `
        <div class="mrm-debut-box">
            <h3>🏟️ El Día que Comenzó la Leyenda: El Debut Oficial</h3>
            <p>Con una afición expectante y muchos escépticos alrededor del proyecto, <strong>Mermeladeros FC</strong> saltó a la cancha por primera vez demostrando personalidad desde el silbatazo inicial.</p>
            <p>Lejos de mostrar nerviosismo de novato, el equipo impuso condiciones con presión alta y toque rápido. Aquel primer encuentro sirvió para enviar un mensaje claro a toda la liga: el club no venía solo a participar, sino a competir de tú a tú contra los históricos como paris monstro y titanes, lamentablemente esas ganas se quedaron en el primer partido, ayer los golearon 11-3.</p>
        </div>
    `,
    partidos: [
        {
            rival: "Mermeladeros FC vs los weyes del farsa",
            marcador: "3 - 1",
            tipo: "mrm-victoria",
            estado: "Victoria Contundente",
            cronica: "Dominio absoluto de principio a fin. Tras abrir el marcador, el equipo supo manejar los tiempos y liquidó el encuentro en la segunda mitad con dos contragolpes letales 2 goles de Haziel y 1 de beto sellaron la contundente vistoria."
        },
        {
            rival: "Mermeladeros FC vs NenesTwitter",
            marcador: "4 - 3",
            tipo: "mrm-victoria",
            estado: "Victoria Épica",
            cronica: "Un partido no apto para cardíacos. Con el empate a 3 en el tiempo agregado, un disparo de media distancia al minuto 93 desató la locura en la tribuna para sellar los tres puntos, con su primer hatricki en el bernabeu Cuervo se consolido como referente en mermeladeros."
        },
        {
            rival: "Arsenal vs Mermeladeros FC",
            marcador: "3 - 4",
            tipo: "mrm-derrota",
            estado: "Derrota con Cara en Alto",
            cronica: "A pesar de caer en un duelo vibrante de siete goles, Mermeladeros nunca bajó los brazos, recortando una desventaja de dos tantos en los minutos finales y quedándose a un paso de la igualada con un poste de Haziel que se grito mas que varios goles, aun asi es la mayor hazaña de mermeladeros ya que se le compitio a un buen equipo como lo era arsenal."
        }
    ],
    fichajes: [
        { jugador: "Sebastián Juarez", rol: "Refuerzo Estelar (Defensa)", detalle: "Llegó para potenciar la defensa con el papa de Lalo que era el unico bueno de este equipo, lamentablemente tiene los mismos partidos que mundiales de Cristiano." },
        { jugador: "Leonardo 'El perez' Duende", rol: "Refuerzo Emocional", detalle: "Aportó nada, hey pero las risas no faltaron" }
    ],
    goleo: [
        { nombre: "Angel Flores", goles: 7, pj: 6 },
        { nombre: "Haziel Cossio", goles: 6, pj: 3 },
        { nombre: "Alberto 'Cuervo' Galicia", goles: 6, pj: 6 },
        { nombre: "Angel Barrera", goles: 2, pj: 7 },
        { nombre: "Eduardo 'Sixsevenboy' Zaid", goles: 1, pj: 7 }
    ]
};

function renderizarSeccionMermeladeros(tab) {
    const contenedor = document.getElementById("mrm-panel-contenido");
    if (!contenedor) return;

    contenedor.style.animation = "none";
    contenedor.offsetHeight;
    contenedor.style.animation = null;

    if (tab === "identidad") {
        contenedor.innerHTML = datosMermeladeros.identidad;
    } else if (tab === "convocados") {
        const cards = datosMermeladeros.convocados.map(j => `
            <div class="mrm-card-jugador">
                <span class="mrm-dorsal">#${j.dorsal}</span>
                <span class="mrm-pos-tag">${j.pos}</span>
                <h4>${j.nombre}</h4>
                <p>${j.desc}</p>
            </div>
        `).join("");
        contenedor.innerHTML = `<div class="mrm-grid-jugadores">${cards}</div>`;
    } else if (tab === "debut") {
        contenedor.innerHTML = datosMermeladeros.debut;
    } else if (tab === "partidos") {
        const lista = datosMermeladeros.partidos.map(p => `
            <div class="mrm-partido-item">
                <div class="mrm-partido-cabecera">
                    <div>
                        <strong>${p.rival}</strong>
                        <div style="font-size: 0.85rem; color: #666;">${p.estado}</div>
                    </div>
                    <span class="mrm-marcador-pill ${p.tipo}">${p.marcador}</span>
                </div>
                <p>${p.cronica}</p>
            </div>
        `).join("");
        contenedor.innerHTML = `<div class="mrm-lista-partidos">${lista}</div>`;
    } else if (tab === "fichajes-goleo") {
        const maxGoles = Math.max(...datosMermeladeros.goleo.map(g => g.goles));
        const listaFichajes = datosMermeladeros.fichajes.map(f => `
            <div class="mrm-fichaje-item">
                <strong>${f.jugador}</strong> <span style="color:#9b1b30; font-size:0.85rem;">(${f.rol})</span>
                <p style="font-size:0.9rem; color:#555; margin-top:4px;">${f.detalle}</p>
            </div>
        `).join("");

        const filasGoleo = datosMermeladeros.goleo.map((g, idx) => {
            const porcentaje = Math.round((g.goles / maxGoles) * 100);
            return `
                <tr>
                    <td><strong>${idx + 1}</strong></td>
                    <td>
                        ${g.nombre}
                        <div class="mrm-barra-gol" style="width: ${porcentaje}%;"></div>
                    </td>
                    <td>${g.pj}</td>
                    <td><strong>${g.goles}</strong></td>
                </tr>
            `;
        }).join("");

        contenedor.innerHTML = `
            <div class="mrm-dos-columnas">
                <div class="mrm-sub-caja">
                    <h3>🤝 Mercado de Fichajes</h3>
                    ${listaFichajes}
                </div>
                <div class="mrm-sub-caja">
                    <h3>👟 Tabla de Goleo Interno</h3>
                    <table class="mrm-tabla-goleo">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Jugador</th>
                                <th>PJ</th>
                                <th>Goles</th>
                            </tr>
                        </thead>
                        <tbody>${filasGoleo}</tbody>
                    </table>
                </div>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".mrm-tab-btn");
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            botones.forEach(b => b.classList.remove("mrm-activa"));
            btn.classList.add("mrm-activa");
            renderizarSeccionMermeladeros(btn.dataset.tab);
        });
    });

    renderizarSeccionMermeladeros("identidad");
});