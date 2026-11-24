let datosActualesBD = [];

document.addEventListener('DOMContentLoaded', () => {
    const selectTemporada = document.getElementById('select-temporada');
    const btnReset = document.getElementById('btn-reset-tabla');

    cargarDatosDesdeBD(selectTemporada.value);

    selectTemporada.addEventListener('change', (e) => {
        cargarDatosDesdeBD(e.target.value);
    });

    btnReset.addEventListener('click', () => {
        cargarDatosDesdeBD(selectTemporada.value);
    });
});

async function cargarDatosDesdeBD(temporada) {
    const tbody = document.getElementById('cuerpo-tabla-cocientes');
    tbody.innerHTML = '<tr><td colspan="7">Cargando datos oficiales desde MySQL...</td></tr>';

    try {
        const respuesta = await fetch(`api_cocientes.php?temporada=${encodeURIComponent(temporada)}`);
        if (!respuesta.ok) throw new Error('Error en la respuesta del servidor');
        
        const datos = await respuesta.json();
        datosActualesBD = datos.map(item => ({
            ...item,
            puntos_totales: parseInt(item.puntos_totales),
            partidos_jugados: parseInt(item.partidos_jugados),
            cociente: parseFloat(item.cociente)
        }));

        renderizarTabla();
    } catch (error) {
        console.error(error);
        tbody.innerHTML = `<tr><td colspan="7" style="color:red;">No se pudo conectar con api_cocientes.php. Asegúrate de ejecutarlo en un servidor local (XAMPP/WAMP) con la base de datos creada.</td></tr>`;
    }
}

function renderizarTabla() {
    const tbody = document.getElementById('cuerpo-tabla-cocientes');
    tbody.innerHTML = '';

    // Ordenar de mayor a menor cociente dinámicamente
    datosActualesBD.sort((a, b) => b.cociente - a.cociente);

    const totalEquipos = datosActualesBD.length;

    datosActualesBD.forEach((club, index) => {
        const tr = document.createElement('tr');
        
        // Asignar color y etiqueta según los últimos 3 lugares de la lista mostrada
        let claseFila = '';
        let etiquetaMulta = club.monto_multa;

        if (index === totalEquipos - 1) {
            claseFila = 'zona-descenso';
        } else if (index === totalEquipos - 2) {
            claseFila = 'zona-multa-media';
        } else if (index === totalEquipos - 3 && totalEquipos > 3) {
            claseFila = 'zona-multa-baja';
        }

        tr.className = claseFila;

        tr.innerHTML = `
            <td><strong>${club.posicion_cociente}°</strong></td>
            <td>
                <div class="celda-equipo">
                    <img src="${club.escudo_url}" alt="${club.equipo}" onerror="this.src='https://via.placeholder.com/35/0c6e32/FFFFFF?text=MX'">
                    <span>${club.equipo}</span>
                </div>
            </td>
            <td>
                <input type="number" class="input-sim" value="${club.puntos_totales}" min="0" max="250" 
                    onchange="recalcularCociente(${index}, 'puntos', this.value)">
            </td>
            <td>
                <input type="number" class="input-sim" value="${club.partidos_jugados}" min="1" max="150" 
                    onchange="recalcularCociente(${index}, 'partidos', this.value)">
            </td>
            <td class="cociente-valor">${club.cociente.toFixed(4)}</td>
            <td><strong>${etiquetaMulta}</strong></td>
            <td>
                <button class="btn-ver-historia" onclick="abrirModalHistoria(${index})">
                    Ver Consecuencias
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function recalcularCociente(index, campo, nuevoValor) {
    const valor = parseInt(nuevoValor);
    if (isNaN(valor) || valor < 0) return;

    if (campo === 'puntos') {
        datosActualesBD[index].puntos_totales = valor;
    } else if (campo === 'partidos' && valor > 0) {
        datosActualesBD[index].partidos_jugados = valor;
    }

    // Fórmula oficial de la Liga MX: Puntos Totales / Partidos Jugados (últimos 6 torneos)
    datosActualesBD[index].cociente = datosActualesBD[index].puntos_totales / datosActualesBD[index].partidos_jugados;
    
    renderizarTabla();
}

function abrirModalHistoria(index) {
    const club = datosActualesBD[index];
    if (!club) return;

    document.getElementById('modal-escudo').src = club.escudo_url;
    document.getElementById('modal-nombre-equipo').innerText = `${club.equipo} (${club.temporada_cierre})`;
    document.getElementById('modal-badge-multa').innerText = `Sanción Económica: ${club.monto_multa}`;
    document.getElementById('modal-ascenso').innerText = club.equipo_ascenso_afectado;
    document.getElementById('modal-consecuencias').innerText = club.consecuencias_historicas;
    document.getElementById('modal-perdidas').innerText = club.torneos_futuros_perdidos;

    document.getElementById('modal-cociente').style.display = 'flex';
}

function cerrarModalCociente() {
    document.getElementById('modal-cociente').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal-cociente');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};