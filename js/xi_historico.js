(() => {
    // Formación 4-3-3. pos = posición exacta que acepta el hueco, l = línea para las medias.
    const FORMACION = [
        { pos: 'POR', l: 'POR', x: 50, y: 90 },
        { pos: 'LI',  l: 'DEF', x: 12, y: 72 }, { pos: 'DFC', l: 'DEF', x: 37, y: 75 },
        { pos: 'DFC', l: 'DEF', x: 63, y: 75 }, { pos: 'LD',  l: 'DEF', x: 88, y: 72 },
        { pos: 'MCD', l: 'MED', x: 50, y: 61 }, { pos: 'MC',  l: 'MED', x: 50, y: 47 }, { pos: 'MCO', l: 'MED', x: 50, y: 33 },
        { pos: 'EI',  l: 'DEL', x: 17, y: 17 }, { pos: 'DC',  l: 'DEL', x: 50, y: 9 },  { pos: 'ED',  l: 'DEL', x: 83, y: 17 }
    ];

    const porId = Object.fromEntries(JUGADORES_XI.map(j => [j.id, j]));
    const alineacion = Array(FORMACION.length).fill(null); // id del jugador en cada hueco
    let seleccionado = null;  // jugador elegido con toque/clic
    let arrastrando = null;   // { id, desde } mientras se arrastra
    let timer;

    const $ = id => document.getElementById(id);
    const lista = $('xi-lista'), cancha = $('xi-cancha'), aviso = $('xi-aviso'), stats = $('xi-stats');

    function mostrarAviso(msg, tipo) {
        aviso.textContent = msg;
        aviso.className = 'xi-aviso ' + tipo;
        clearTimeout(timer);
        timer = setTimeout(() => { aviso.className = 'xi-aviso'; aviso.textContent = ''; }, 4500);
    }

    function colocar(id, i, desde) {
        const j = porId[id], hueco = FORMACION[i];
        if (j.pos !== hueco.pos) {
            mostrarAviso(`No es posible agregar a ${j.corto} a la posición ${hueco.pos}: no le corresponde (es ${j.pos}).`, 'error');
            return;
        }
        const previo = alineacion[i];
        if (desde != null) { // mover entre huecos: el que estaba se intercambia si le corresponde
            alineacion[desde] = previo && porId[previo].pos === FORMACION[desde].pos ? previo : null;
        }
        alineacion[i] = id;
        seleccionado = null;
        aviso.className = 'xi-aviso';
        render();
    }

    function quitar(i) { alineacion[i] = null; render(); }

    function limpiarMarcas() {
        cancha.querySelectorAll('.ok, .no').forEach(el => el.classList.remove('ok', 'no'));
    }
    function renderLista() {
        const q = $('xi-buscar').value.trim().toLowerCase(), lin = $('xi-linea').value;
        const usados = new Set(alineacion);
        const items = JUGADORES_XI.filter(j => !usados.has(j.id) && (!lin || j.linea === lin) && j.nombre.toLowerCase().includes(q));
        lista.innerHTML = items.map(j => `
            <li class="xi-jug${j.id === seleccionado ? ' sel' : ''}" draggable="true" data-id="${j.id}">
                <span class="xi-pos">${j.pos}</span>
                <span class="xi-info"><b>${j.nombre}</b>${j.nota ? `<em>${j.nota}</em>` : ''}<small>${j.club}</small></span>
                <span class="xi-ovr">${j.media}</span>
            </li>`).join('') || '<li class="xi-vacio">No hay jugadores disponibles.</li>';
    }

    function renderCancha() {
        cancha.innerHTML = FORMACION.map((h, i) => {
            const j = alineacion[i] && porId[alineacion[i]];
            return `<div class="xi-slot${j ? ' lleno' : ''}" data-i="${i}" style="left:${h.x}%;top:${h.y}%">
                <div class="xi-disco"${j ? ' draggable="true"' : ''}>${j ? `<b>${j.media}</b><small>${h.pos}</small>` : `<span>${h.pos}</span>`}</div>
                ${j ? `<span class="xi-nom">${j.corto}</span><button class="xi-quitar" type="button" aria-label="Quitar a ${j.corto}">×</button>` : ''}
            </div>`;
        }).join('');
    }

    function renderStats() {
        const completo = alineacion.every(Boolean);
        const estabaOculto = stats.hidden;
        stats.hidden = !completo;
        if (!completo) return;
        const media = v => v.reduce((a, b) => a + b, 0) / v.length;
        const linea = l => media(FORMACION.flatMap((h, i) => h.l === l ? [porId[alineacion[i]].media] : []));
        $('m-def').textContent = linea('DEF').toFixed(1);
        $('m-med').textContent = linea('MED').toFixed(1);
        $('m-del').textContent = linea('DEL').toFixed(1);
        $('m-glo').textContent = media(alineacion.map(id => porId[id].media)).toFixed(1); // los 11 jugadores
        if (estabaOculto) stats.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function render() { renderLista(); renderCancha(); renderStats(); }

    /* ---------- Lista de jugadores ---------- */
    lista.addEventListener('dragstart', e => {
        const li = e.target.closest('.xi-jug');
        if (!li) return;
        arrastrando = { id: +li.dataset.id, desde: null };
        e.dataTransfer.setData('text/plain', li.dataset.id);
        e.dataTransfer.effectAllowed = 'move';
    });
    lista.addEventListener('click', e => {
        const li = e.target.closest('.xi-jug');
        if (!li) return;
        const id = +li.dataset.id;
        seleccionado = seleccionado === id ? null : id;
        if (seleccionado) mostrarAviso(`Seleccionaste a ${porId[id].corto} (${porId[id].pos}). Toca su posición en la cancha.`, 'info');
        renderLista();
    });
    ['xi-buscar', 'xi-linea'].forEach(id => $(id).addEventListener('input', renderLista));

    // Soltar un jugador de la cancha sobre la lista lo devuelve a la lista
    const panel = $('xi-lista-panel');
    panel.addEventListener('dragover', e => { if (arrastrando && arrastrando.desde != null) e.preventDefault(); });
    panel.addEventListener('drop', e => {
        e.preventDefault();
        const a = arrastrando; arrastrando = null;
        if (a && a.desde != null) quitar(a.desde);
    });

    const huecoDe = e => e.target.closest('.xi-slot');
    cancha.addEventListener('dragstart', e => {
        const s = huecoDe(e);
        if (!s || !alineacion[s.dataset.i]) return;
        arrastrando = { id: alineacion[s.dataset.i], desde: +s.dataset.i };
        e.dataTransfer.setData('text/plain', String(arrastrando.id));
        e.dataTransfer.effectAllowed = 'move';
    });
    cancha.addEventListener('dragover', e => {
        const s = huecoDe(e);
        if (!s || !arrastrando) return;
        e.preventDefault();
        limpiarMarcas();
        s.classList.add(porId[arrastrando.id].pos === FORMACION[s.dataset.i].pos ? 'ok' : 'no');
    });
    cancha.addEventListener('dragleave', limpiarMarcas);
    cancha.addEventListener('drop', e => {
        e.preventDefault();
        const s = huecoDe(e), a = arrastrando;
        arrastrando = null;
        limpiarMarcas();
        if (s && a) colocar(a.id, +s.dataset.i, a.desde);
    });
    cancha.addEventListener('click', e => {
        const s = huecoDe(e);
        if (!s) return;
        const i = +s.dataset.i;
        if (e.target.closest('.xi-quitar')) return quitar(i);
        if (seleccionado) colocar(seleccionado, i, null);
    });
    document.addEventListener('dragend', () => { arrastrando = null; limpiarMarcas(); });

    $('xi-reiniciar').addEventListener('click', () => {
        alineacion.fill(null);
        seleccionado = null;
        aviso.className = 'xi-aviso';
        render();
    });

    render();
})();
