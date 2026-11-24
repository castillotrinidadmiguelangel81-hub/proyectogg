document.addEventListener("DOMContentLoaded", () => {

    
    const EQUIPOS = [
        { id: "america",   nombre: "América",   sig: "AME", color: "#f2c200" },
        { id: "toluca",    nombre: "Toluca",    sig: "TOL", color: "#c8102e" },
        { id: "chivas",    nombre: "Chivas",    sig: "CHI", color: "#c8102e" },
        { id: "cruzazul",  nombre: "Cruz Azul", sig: "CAZ", color: "#1b4fa0" },
        { id: "leon",      nombre: "León",      sig: "LEO", color: "#1f7a3a" },
        { id: "atlas",     nombre: "Atlas",     sig: "ATS", color: "#b3121f" },
        { id: "monterrey", nombre: "Monterrey", sig: "MTY", color: "#0b2a5b" },
        { id: "queretaro", nombre: "Querétaro", sig: "QRO", color: "#1c5fa8" },
        { id: "santos",    nombre: "Santos",    sig: "SAN", color: "#2e8b57" },
        { id: "sanluis",   nombre: "San Luis",  sig: "SLP", color: "#d4a017" },
        { id: "tijuana",   nombre: "Tijuana",   sig: "TIJ", color: "#8b0000" },
        { id: "pumas",     nombre: "Pumas",     sig: "PUM", color: "#bfa100" },
        { id: "puebla",    nombre: "Puebla",    sig: "PUE", color: "#2a5db0" },
        { id: "tigres",    nombre: "Tigres",    sig: "TIG", color: "#e0a800" },
        { id: "atlante",   nombre: "Atlante",   sig: "ATL", color: "#a31621" },
        { id: "pachuca",   nombre: "Pachuca",   sig: "PAC", color: "#1d3f8a" },
        { id: "necaxa",    nombre: "Necaxa",    sig: "NEC", color: "#c1121f" },
        { id: "juarez",    nombre: "Juárez",    sig: "JUA", color: "#3a7d2c" }
    ];

    const porId = {};
    EQUIPOS.forEach(e => porId[e.id] = e);

    const NUM_PARTIDOS = 9;
    const TOTAL_JORNADAS = 17;

    
    const nuevosPartidos = () =>
        Array.from({ length: NUM_PARTIDOS }, () => ({ a: null, b: null, res: null }));
    const nuevasJornadas = () =>
        Array.from({ length: TOTAL_JORNADAS }, () => ({ partidos: nuevosPartidos(), guardada: false }));

    let jornadas = nuevasJornadas();
    let actual = 0;                       
    let partidos = jornadas[actual].partidos;

    const bloqueada = () => jornadas[actual].guardada;

    
    const lista = document.getElementById("lista-equipos");
    const contPartidos = document.getElementById("partidos");
    const tbody = document.getElementById("tabla-usuario");
    const btnGuardar = document.getElementById("btn-guardar");
    const btnLimpiar = document.getElementById("btn-limpiar");
    const btnReiniciar = document.getElementById("btn-reiniciar");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const numJornada = document.getElementById("num-jornada");
    const btnPrevPie = document.getElementById("btn-prev-pie");
    const btnNextPie = document.getElementById("btn-next-pie");
    const numJornadaPie = document.getElementById("num-jornada-pie");
    const tituloPartidos = document.getElementById("titulo-partidos");
    const notaPartidos = document.getElementById("nota-partidos");
    const msg = document.getElementById("msg-guardado");

    function mensaje(texto, ok = true) {
        msg.style.color = ok ? "#218838" : "#c00";
        msg.textContent = texto;
    }

    
    const escudoHTML = e =>
        `<img class="escudo" src="../img/${e.id}.jpg" alt="${e.nombre}" data-id="${e.id}" draggable="false">`;

    document.addEventListener("error", ev => {
        const img = ev.target;
        if (img.tagName === "IMG" && img.classList.contains("escudo")) {
            const e = porId[img.dataset.id];
            const span = document.createElement("span");
            span.className = "badge";
            span.style.background = e.color;
            span.textContent = e.sig;
            img.replaceWith(span);
        }
    }, true);

    
    EQUIPOS.forEach(e => {
        const li = document.createElement("li");
        li.className = "team-item";
        li.draggable = true;
        li.dataset.id = e.id;
        li.innerHTML = `${escudoHTML(e)}<span>${e.nombre}</span>`;
        li.addEventListener("dragstart", ev => {
            if (bloqueada()) { ev.preventDefault(); return; }
            ev.dataTransfer.setData("text/plain", e.id);
            ev.dataTransfer.effectAllowed = "move";
            li.classList.add("dragging");
        });
        li.addEventListener("dragend", () => li.classList.remove("dragging"));
        lista.appendChild(li);
    });

    
    const clave = s => (s === 0 ? "a" : "b");

    function ubicacion(id) {
        for (let m = 0; m < NUM_PARTIDOS; m++) {
            if (partidos[m].a === id) return { m, s: 0 };
            if (partidos[m].b === id) return { m, s: 1 };
        }
        return null;
    }
    function yaSeEnfrentaron(id1, id2) {
        if (!id1 || !id2) return false;
        const parNuevo = [id1, id2].sort().join("-");

        for (let i = 0; i < TOTAL_JORNADAS; i++) {
            // Revisa jornadas ya guardadas y la jornada actual
            if (!jornadas[i].guardada && i !== actual) continue;

            for (let m = 0; m < NUM_PARTIDOS; m++) {
                // Si es la jornada actual, ignoramos el partido donde estamos soltando
                const p = jornadas[i].partidos[m];
                if (p.a && p.b) {
                    const parExistente = [p.a, p.b].sort().join("-");
                    if (parNuevo === parExistente) {
                        return i + 1; // Devuelve el número de jornada donde ya jugaron
                    }
                }
            }
        }
        return false;
    }
function colocar(id, m, s) {
        if (bloqueada()) return;
        const destino = partidos[m];
        const origen = ubicacion(id);
        const rivalEnDestino = destino[clave(s === 0 ? 1 : 0)];

        // Validar si el equipo que arrastras y el rival que ya está en esa tarjeta ya jugaron antes
        if (rivalEnDestino && rivalEnDestino !== id) {
            const jornadaPrevia = yaSeEnfrentaron(id, rivalEnDestino);
            if (jornadaPrevia) {
                mensaje(`⚠️ ${porId[id].nombre} y ${porId[rivalEnDestino].nombre} ya se enfrentaron en la Jornada ${jornadaPrevia}.`, false);
                return;
            }
        }

        if (origen) {
            if (origen.m === m && origen.s === s) return;
            const origenPartido = partidos[origen.m];
            const previo = destino[clave(s)];
            const rivalEnOrigen = origenPartido[clave(origen.s === 0 ? 1 : 0)];

            // Validar también el intercambio inverso si había un equipo previo en el destino
            if (previo && rivalEnOrigen && previo !== rivalEnOrigen) {
                const jornadaPreviaInversa = yaSeEnfrentaron(previo, rivalEnOrigen);
                if (jornadaPreviaInversa) {
                    mensaje(`⚠️ No se puede intercambiar: ${porId[previo].nombre} y ${porId[rivalEnOrigen].nombre} ya jugaron en la Jornada ${jornadaPreviaInversa}.`, false);
                    return;
                }
            }

            destino[clave(s)] = id;
            origenPartido[clave(origen.s)] = previo;
            origenPartido.res = null;
        } else {
            destino[clave(s)] = id;
        }

        msg.textContent = "";
        destino.res = null;
        render();
    }

    
    contPartidos.addEventListener("dragstart", ev => {
        const slot = ev.target.closest && ev.target.closest(".slot.lleno");
        if (!slot || bloqueada()) { ev.preventDefault(); return; }
        const p = partidos[+slot.dataset.m];
        ev.dataTransfer.setData("text/plain", p[clave(+slot.dataset.s)]);
        ev.dataTransfer.effectAllowed = "move";
        slot.classList.add("dragging");
    });

    contPartidos.addEventListener("dragend", () => {
        contPartidos.querySelectorAll(".dragging").forEach(el => el.classList.remove("dragging"));
    });

    contPartidos.addEventListener("dragover", ev => {
        const slot = ev.target.closest(".slot");
        if (!slot || bloqueada()) return;
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
        slot.classList.add("hover");
    });

    contPartidos.addEventListener("dragleave", ev => {
        const slot = ev.target.closest(".slot");
        if (slot && !slot.contains(ev.relatedTarget)) slot.classList.remove("hover");
    });

    contPartidos.addEventListener("drop", ev => {
        const slot = ev.target.closest(".slot");
        if (!slot || bloqueada()) return;
        ev.preventDefault();
        slot.classList.remove("hover");
        const id = ev.dataTransfer.getData("text/plain");
        if (porId[id]) colocar(id, +slot.dataset.m, +slot.dataset.s);
    });

    contPartidos.addEventListener("click", ev => {
        if (bloqueada()) return;
        const quitar = ev.target.closest(".quitar");
        if (quitar) {
            const m = +quitar.dataset.m;
            partidos[m][clave(+quitar.dataset.s)] = null;
            partidos[m].res = null;
            render();
            return;
        }
        const btn = ev.target.closest(".btn-pronostico");
        if (btn && !btn.disabled) {
            const p = partidos[+btn.dataset.m];
            p.res = (p.res === btn.dataset.r) ? null : btn.dataset.r;
            render();
        }
    });

    
    function slotHTML(m, s, lock) {
        const id = partidos[m][clave(s)];
        if (!id) return `<div class="slot" data-m="${m}" data-s="${s}">${s === 0 ? "Equipo 1" : "Equipo 2"}</div>`;
        const e = porId[id];
        return `<div class="slot lleno ${lock ? "bloq" : ""}" ${lock ? "" : 'draggable="true"'} data-m="${m}" data-s="${s}">
                    ${escudoHTML(e)}<span>${e.nombre}</span>
                    ${lock ? "" : `<button class="quitar" data-m="${m}" data-s="${s}" title="Quitar">✕</button>`}
                </div>`;
    }

    function renderPartidos() {
        const lock = bloqueada();
        contPartidos.innerHTML = partidos.map((p, m) => {
            const completo = p.a && p.b;
            const nA = completo ? porId[p.a].nombre : "Local";
            const nB = completo ? porId[p.b].nombre : "Visitante";
            const op = (r, texto, extra = "") =>
                `<button class="btn-pronostico ${extra} ${p.res === r ? "selected" : ""}"
                         data-m="${m}" data-r="${r}" ${completo && !lock ? "" : "disabled"}>${texto}</button>`;
            return `<div class="partido-card ${lock ? "bloq" : ""}">
                        <div class="partido-num">Partido ${m + 1}</div>
                        <div class="vs-row">${slotHTML(m, 0, lock)}<span class="vs-badge">VS</span>${slotHTML(m, 1, lock)}</div>
                        <div class="opciones-quiniela">
                            ${op("L", completo ? `Gana ${nA}` : "Gana local")}
                            ${op("E", "Empate", "empate")}
                            ${op("V", completo ? `Gana ${nB}` : "Gana visitante")}
                        </div>
                    </div>`;
        }).join("");
    }

    
    function calcularTabla() {
        const t = {};
        const fila = id => t[id] || (t[id] = { id, pj: 0, g: 0, e: 0, p: 0, pts: 0 });

        jornadas.forEach((j, idx) => {
            if (!(j.guardada || idx === actual)) return;
            j.partidos.forEach(p => {
                if (p.a) fila(p.a);
                if (p.b) fila(p.b);
                if (!(p.a && p.b && p.res)) return;
                const A = fila(p.a), B = fila(p.b);
                A.pj++; B.pj++;
                if (p.res === "L") { A.g++; A.pts += 3; B.p++; }
                else if (p.res === "V") { B.g++; B.pts += 3; A.p++; }
                else { A.e++; B.e++; A.pts++; B.pts++; }
            });
        });

        return Object.values(t).sort((x, y) =>
            y.pts - x.pts || y.g - x.g || porId[x.id].nombre.localeCompare(porId[y.id].nombre));
    }

    function renderTabla() {
        const filas = calcularTabla();
        if (filas.length === 0) {
            tbody.innerHTML = '<tr class="fila-vacia"><td colspan="7">Arrastra equipos a los partidos para ver la tabla.</td></tr>';
            return;
        }
        tbody.innerHTML = filas.map((f, i) => {
            const e = porId[f.id];
            return `<tr>
                <td><strong>${i + 1}</strong></td>
                <td class="club">${escudoHTML(e)}${e.nombre}</td>
                <td>${f.pj}</td><td>${f.g}</td><td>${f.e}</td><td>${f.p}</td>
                <td><strong>${f.pts}</strong></td>
            </tr>`;
        }).join("");
    }

    function renderLista() {
        const lock = bloqueada();
        const usados = new Set();
        partidos.forEach(p => { if (p.a) usados.add(p.a); if (p.b) usados.add(p.b); });
        lista.querySelectorAll(".team-item").forEach(li => {
            li.classList.toggle("usado", usados.has(li.dataset.id));
            li.classList.toggle("bloqueado", lock);
            li.draggable = !lock;
        });
    }

    function renderControles() {
        const lock = bloqueada();
        numJornada.textContent = `Jornada ${actual + 1} de ${TOTAL_JORNADAS}${lock ? " 🔒 Guardada" : ""}`;
        tituloPartidos.textContent = `Jornada ${actual + 1}: ${NUM_PARTIDOS} partidos`;
        notaPartidos.textContent = lock
            ? "Esta jornada ya está guardada y bloqueada: no se puede modificar."
            : "Arrastra un equipo a cada espacio. Arrastra de un espacio a otro para intercambiarlos, o usa la ✕ para quitarlo.";
        numJornadaPie.textContent = numJornada.textContent;
        btnPrev.disabled = btnPrevPie.disabled = actual === 0;
        btnNext.disabled = btnNextPie.disabled = !(lock && actual < TOTAL_JORNADAS - 1);
        btnGuardar.disabled = lock;
        btnLimpiar.disabled = lock;
        btnGuardar.textContent = lock ? "Jornada guardada 🔒" : "Guardar tu quinela";
    }

    function render() {
        renderControles();
        renderPartidos();
        renderTabla();
        renderLista();
    }

    
    function irA(n) {
        actual = n;
        partidos = jornadas[actual].partidos;
        msg.textContent = "";
        render();
    }

    const anterior = () => { if (actual > 0) irA(actual - 1); };
    const siguiente = () => { if (bloqueada() && actual < TOTAL_JORNADAS - 1) irA(actual + 1); };

    
    [btnPrev, btnPrevPie].forEach(b => b.addEventListener("click", anterior));
    [btnNext, btnNextPie].forEach(b => b.addEventListener("click", siguiente));

    
    const CLAVE = "quinelaLigaMX_v3";

    function persistir() {
        try {
            localStorage.setItem(CLAVE, JSON.stringify({ jornadas }));
            return true;
        } catch (err) {
            return false;
        }
    }

    btnGuardar.addEventListener("click", () => {
        if (bloqueada()) return;

        const faltan = partidos.filter(p => !(p.a && p.b && p.res)).length;
        if (faltan > 0) {
            mensaje(`Faltan ${faltan} partido(s) por completar: cada partido necesita sus dos equipos y un resultado.`, false);
            return;
        }
        for (let m = 0; m < NUM_PARTIDOS; m++) {
            const p = partidos[m];
            // Temporalmente marcamos como no guardada la actual para no compararla consigo misma
            const parActual = [p.a, p.b].sort().join("-");
            for (let j = 0; j < TOTAL_JORNADAS; j++) {
                if (j === actual || !jornadas[j].guardada) continue;
                const repetido = jornadas[j].partidos.some(prev => 
                    prev.a && prev.b && [prev.a, prev.b].sort().join("-") === parActual
                );
                if (repetido) {
                    mensaje(`❌ El partido ${porId[p.a].nombre} vs ${porId[p.b].nombre} ya se jugó en la Jornada ${j + 1}.`, false);
                    return;
                }
            }
        }
        if (!confirm(`Al guardar, la Jornada ${actual + 1} se bloqueará y ya no podrás modificarla. ¿Guardar?`)) return;

        jornadas[actual].guardada = true;
        const ok = persistir();
        render();

        const hayMas = actual < TOTAL_JORNADAS - 1;
        if (!ok) {
            mensaje("La jornada se bloqueó, pero no se pudo guardar en este navegador.", false);
        } else {
            mensaje(`✅ Jornada ${actual + 1} guardada y bloqueada.` +
                (hayMas ? " Pulsa \"Jornada siguiente\" para continuar." : " ¡Completaste todas las jornadas!"));
        }
    });

    btnLimpiar.addEventListener("click", () => {
        if (bloqueada()) return;
        jornadas[actual].partidos = nuevosPartidos();
        partidos = jornadas[actual].partidos;
        msg.textContent = "";
        render();
    });

    btnReiniciar.addEventListener("click", () => {
        if (!confirm("Esto borrará TODAS las jornadas guardadas y sus puntos. ¿Continuar?")) return;
        try { localStorage.removeItem(CLAVE); } catch (err) {  }
        jornadas = nuevasJornadas();
        irA(0);
        mensaje("Se reiniciaron todas las jornadas.");
    });

    
    try {
        const g = JSON.parse(localStorage.getItem(CLAVE));
        if (g && Array.isArray(g.jornadas) && g.jornadas.length === TOTAL_JORNADAS) {
            jornadas = g.jornadas.map(j => {
                const vistos = new Set();
                const limpio = id => (porId[id] && !vistos.has(id) && vistos.add(id)) ? id : null;
                const ps = (Array.isArray(j.partidos) && j.partidos.length === NUM_PARTIDOS)
                    ? j.partidos.map(p => {
                        const a = limpio(p.a), b = limpio(p.b);
                        return { a, b, res: (a && b && ["L", "E", "V"].includes(p.res)) ? p.res : null };
                    })
                    : nuevosPartidos();
                return { partidos: ps, guardada: !!j.guardada };
            });
            const primeraLibre = jornadas.findIndex(j => !j.guardada);
            actual = primeraLibre === -1 ? TOTAL_JORNADAS - 1 : primeraLibre;
            partidos = jornadas[actual].partidos;
            if (actual > 0 || jornadas[0].guardada) mensaje("Se cargó tu avance guardado.");
        }
    } catch (err) { }

    render();
});