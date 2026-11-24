document.addEventListener("DOMContentLoaded", () => {
    const storage = JSON.parse(localStorage.getItem("quinelaLigaMX_v3"));
    
    if (!storage || !storage.jornadas) {
        alert("Aún no tienes datos en la quiniela. Genera resultados primero.");
        return;
    }

    const EQUIPOS = [
        { id: "america", nombre: "América" }, { id: "toluca", nombre: "Toluca" },
        { id: "chivas", nombre: "Chivas" }, { id: "cruzazul", nombre: "Cruz Azul" },
        { id: "leon", nombre: "León" }, { id: "atlas", nombre: "Atlas" },
        { id: "monterrey", nombre: "Monterrey" }, { id: "queretaro", nombre: "Querétaro" },
        { id: "santos", nombre: "Santos" }, { id: "sanluis", nombre: "San Luis" },
        { id: "tijuana", nombre: "Tijuana" }, { id: "pumas", nombre: "Pumas" },
        { id: "puebla", nombre: "Puebla" }, { id: "tigres", nombre: "Tigres" },
        { id: "atlante", nombre: "Atlante" }, { id: "pachuca", nombre: "Pachuca" },
        { id: "necaxa", nombre: "Necaxa" }, { id: "juarez", nombre: "Juárez" }
    ];

    const porId = {};
    EQUIPOS.forEach(e => porId[e.id] = e);

    const tabla = {};
    const fila = id => tabla[id] || (tabla[id] = { id, pts: 0, g: 0 });

    storage.jornadas.forEach(j => {
        if (!j.partidos) return;
        j.partidos.forEach(p => {
            if (!(p.a && p.b && p.res)) return;
            const A = fila(p.a), B = fila(p.b);
            if (p.res === "L") { A.pts += 3; A.g++; }
            else if (p.res === "V") { B.pts += 3; B.g++; }
            else { A.pts++; B.pts++; }
        });
    });

    let clasificadosActuales = Object.values(tabla)
        .sort((x, y) => y.pts - x.pts || y.g - x.g || porId[x.id].nombre.localeCompare(porId[y.id].nombre))
        .slice(0, 8)
        .map(eq => porId[eq.id].nombre);

    if (clasificadosActuales.length < 8) {
        alert("Necesitas al menos 8 equipos con resultados en tu quiniela para jugar la Liguilla.");
        return;
    }

    const botones = document.querySelectorAll('.slot-equipo');
    const btnGuardar = document.getElementById('btn-guardar-bd');
    const resultadosBD = {};

    // Función para colocar los 8 equipos en Cuartos de Final y limpiar el resto del bracket
    function cargarCrucesIniciales(lista8) {
        clasificadosActuales = lista8;

        botones.forEach(b => {
            b.textContent = '';
            b.classList.add('vacio');
            b.classList.remove('seleccionado');
        });
        Object.keys(resultadosBD).forEach(k => delete resultadosBD[k]);
        if (btnGuardar) btnGuardar.disabled = true;

        const cruces = [
            { l: lista8[0], v: lista8[7], idL: 'cf1-L', idV: 'cf1-V' },
            { l: lista8[1], v: lista8[6], idL: 'cf2-L', idV: 'cf2-V' },
            { l: lista8[2], v: lista8[5], idL: 'cf3-L', idV: 'cf3-V' },
            { l: lista8[3], v: lista8[4], idL: 'cf4-L', idV: 'cf4-V' }
        ];

        cruces.forEach(cruce => {
            const btnL = document.getElementById(cruce.idL);
            const btnV = document.getElementById(cruce.idV);
            btnL.textContent = cruce.l;
            btnL.classList.remove('vacio');
            btnV.textContent = cruce.v;
            btnV.classList.remove('vacio');
        });
    }

    // Cargar inicialmente los de la quiniela actual
    cargarCrucesIniciales(clasificadosActuales);

    botones.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('vacio') || this.id === 'campeon') return;

            const rivalId = this.id.endsWith('-L') ? this.id.replace('-L', '-V') : this.id.replace('-V', '-L');
            const rivalBtn = document.getElementById(rivalId);
            
            if (rivalBtn) rivalBtn.classList.remove('seleccionado');
            this.classList.add('seleccionado');

            const targetId = this.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            
            targetEl.textContent = this.textContent;
            targetEl.classList.remove('vacio');

            const fase = this.id.split('-')[0];
            resultadosBD[fase] = this.textContent;

            limpiarRondasSiguientes(targetId);

            if (targetId === 'campeon') {
                resultadosBD['final'] = this.textContent;
                btnGuardar.disabled = false;
            }
        });
    });

    function limpiarRondasSiguientes(idActual) {
        let current = document.getElementById(idActual);
        while (current && current.hasAttribute('data-target')) {
            const nextId = current.getAttribute('data-target');
            const nextEl = document.getElementById(nextId);
            if (nextEl) {
                nextEl.textContent = '';
                nextEl.classList.add('vacio');
                nextEl.classList.remove('seleccionado');
                const btnSave = document.getElementById('btn-guardar-bd');
                if (btnSave) btnSave.disabled = true;
            }
            current = nextEl;
        }
    }

    btnGuardar.addEventListener('click', () => {
        const payload = {
            clasificados: clasificadosActuales, // Se guardan los 8 equipos exactos de esta simulación
            ganador_cf1: resultadosBD['cf1'],
            ganador_cf2: resultadosBD['cf2'],
            ganador_cf3: resultadosBD['cf3'],
            ganador_cf4: resultadosBD['cf4'],
            ganador_sf1: resultadosBD['sf1'],
            ganador_sf2: resultadosBD['sf2'],
            ganador_final: resultadosBD['final']
        };

        fetch('guardar_simulador.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                alert(data.msg);
                window.location.href = 'index.html';
            } else {
                alert(data.msg);
            }
        })
        .catch(() => {
            alert('Error al guardar en la base de datos.');
        });
    });

    function restaurarSimulador(g) {
        // Si el simulador guardado trae sus 8 clasificados originales, los cargamos primero
        if (g.clasificados && g.clasificados.length === 8) {
            cargarCrucesIniciales(g.clasificados);
        }

        const orden = [
            ['cf1', g.ganador_cf1], ['cf2', g.ganador_cf2],
            ['cf3', g.ganador_cf3], ['cf4', g.ganador_cf4],
            ['sf1', g.ganador_sf1], ['sf2', g.ganador_sf2],
            ['final', g.ganador_final]
        ];
        let incompleto = false;

        orden.forEach(([fase, ganador]) => {
            if (!ganador) { incompleto = true; return; }
            const candidatos = [
                document.getElementById(fase + '-L'),
                document.getElementById(fase + '-V')
            ];
            const btn = candidatos.find(b => b && !b.classList.contains('vacio') && b.textContent === ganador);
            if (btn) btn.click();
            else incompleto = true;
        });

        if (incompleto) {
            alert("Este simulador fue guardado antes de actualizar la base de datos y algunos equipos ya no coinciden.");
        }
    }

    function mostrarPreguntaGuardado(listaSimuladores) {
        const fondo = document.createElement('div');
        fondo.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;z-index:9999;';

        const caja = document.createElement('div');
        caja.style.cssText = 'background:#fff;color:#222;padding:24px;border-radius:12px;max-width:440px;width:90%;text-align:center;font-family:inherit;box-shadow:0 10px 30px rgba(0,0,0,.4);';

        caja.innerHTML = '<h3 style="margin:0 0 8px;">Tus simuladores guardados</h3>' +
                         '<p style="margin:0 0 15px;font-size:14px;color:#555;">Selecciona uno para cargarlo o empieza uno nuevo:</p>';

        const listaDiv = document.createElement('div');
        listaDiv.style.cssText = 'max-height:240px;overflow-y:auto;margin-bottom:16px;text-align:left;border:1px solid #eee;border-radius:8px;padding:6px;';

        listaSimuladores.forEach((sim, index) => {
            const itemBtn = document.createElement('button');
            const numero = listaSimuladores.length - index;
            const campeon = sim.ganador_final || 'Sin campeón';
            const fecha = sim.fecha_guardado ? ` (${sim.fecha_guardado})` : '';

            itemBtn.innerHTML = `<strong>Simulador #${numero}</strong> — Campeón: <span style="color:#1b7f3b;font-weight:bold;">${campeon}</span><br><small style="color:#666;">Guardado el${fecha}</small>`;
            itemBtn.style.cssText = 'display:block;width:100%;text-align:left;padding:10px 12px;margin-bottom:6px;background:#f9f9f9;border:1px solid #ddd;border-radius:6px;cursor:pointer;font-size:14px;transition:background 0.2s;';
            
            itemBtn.onmouseover = () => itemBtn.style.background = '#eef7f0';
            itemBtn.onmouseout = () => itemBtn.style.background = '#f9f9f9';

            itemBtn.addEventListener('click', () => {
                fondo.remove();
                restaurarSimulador(sim);
            });

            listaDiv.appendChild(itemBtn);
        });

        const btnNuevo = document.createElement('button');
        btnNuevo.textContent = 'Empezar uno nuevo';
        btnNuevo.style.cssText = 'width:100%;padding:10px 18px;border:none;border-radius:8px;cursor:pointer;font-size:15px;font-weight:bold;background:#222;color:#fff;';
        btnNuevo.addEventListener('click', () => fondo.remove());

        caja.appendChild(listaDiv);
        caja.appendChild(btnNuevo);
        fondo.appendChild(caja);
        document.body.appendChild(fondo);
    }

    fetch('obtener_simulador.php')
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success' && data.simuladores && data.simuladores.length > 0) {
                mostrarPreguntaGuardado(data.simuladores);
            }
        })
        .catch(() => { /* sin conexion al servidor: simulador nuevo */ });
        const btnBorrar = document.getElementById('btn-borrar-simuladores');

if (btnBorrar) {
    btnBorrar.addEventListener('click', () => {
        if (!confirm("¿Estás seguro de eliminar TODOS tus simuladores guardados? Esta acción no se puede deshacer.")) {
            return;
        }

        fetch('borrar_simuladores.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
            alert(data.msg);
        })
        .catch(err => {
            alert('Error de conexión al intentar borrar los registros.');
        });
    });
}
});