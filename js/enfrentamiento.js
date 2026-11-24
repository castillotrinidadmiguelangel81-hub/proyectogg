(function () {
  const $ = id => document.getElementById(id);
  const API = 'enfrentamientos.php';   // lee la base de datos "ligamx" (tablas equipos y partidos)
  let EQUIPOS = [], COBERTURA = '', pedido = 0;
  const sel = [null, null];            // ids de los equipos elegidos

  const porId = id => EQUIPOS.find(e => e.id === id);
  const esc = t => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function el(tag, cls, txt) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt !== undefined) e.textContent = txt;
    return e;
  }
  async function api(params) {
    const r = await fetch(API + '?' + new URLSearchParams(params));
    if (!r.ok) throw new Error(r.status);
    return r.json();
  }
  function iniciales(n) {
    const w = n.split(' ');
    return (w.length > 1 ? w.map(x => x[0]).join('').slice(0, 3) : n.slice(0, 3)).toUpperCase();
  }
  function escudo(e) {
    const s = el('span', 'escudo');
    const ponIniciales = () => { s.textContent = iniciales(e.nombre); s.classList.add('sin-logo'); };
    if (e.logo) {
      const im = new Image();
      im.alt = '';
      im.onerror = () => { im.remove(); ponIniciales(); };
      im.src = 'img/' + e.logo;
      s.appendChild(im);
    } else ponIniciales();
    return s;
  }

  const lista = $('lista-equipos');
  function construirLista() {
    EQUIPOS.forEach(e => {
      const li = document.createElement('li');
      const b = el('button', 'equipo');
      b.type = 'button';
      b.dataset.id = e.id;
      b.append(escudo(e), el('span', 'nombre', e.nombre), el('span', 'tag'));
      li.appendChild(b);
      lista.appendChild(li);
    });
  }
  lista.addEventListener('click', e => {
    const b = e.target.closest('.equipo');
    if (b) elegir(+b.dataset.id);
  });
  [0, 1].forEach(k => $('ranura' + (k + 1)).addEventListener('click', () => { sel[k] = null; pintar(); }));

  function elegir(id) {
    if (sel[0] !== null && sel[1] !== null) { sel[0] = id; sel[1] = null; return pintar(); }
    const k = sel[0] === null ? 0 : 1;
    if (id === sel[1 - k]) return pintar('Elige un equipo diferente al ya seleccionado.');
    sel[k] = id;
    pintar();
  }

  const fecha = s => { const [y, m, d] = s.split('-'); return d + '/' + m + '/' + y; };
  const fase = f => /^J\d+$/.test(f) ? 'Jornada ' + f.slice(1) : f;

  function pintar(aviso) {
    const ay = $('ayuda');
    ay.className = 'ayuda' + (aviso ? ' aviso' : '');
    ay.textContent = aviso || (sel[0] === null && sel[1] === null ? 'Elige el Equipo 1 en la lista.'
      : sel[0] === null ? 'Elige el Equipo 1.'
      : sel[1] === null ? 'Ahora elige el Equipo 2.'
      : 'Para otro duelo, elige un equipo de la lista y se reinicia el enfrentamiento.');
    [0, 1].forEach(k => {
      const r = $('ranura' + (k + 1)), e = sel[k] === null ? null : porId(sel[k]);
      r.replaceChildren();
      r.classList.toggle('vacia', !e);
      const txt = el('span');
      txt.append(el('span', 'rol', 'Equipo ' + (k + 1)), el('span', 'nombre', e ? e.nombre : 'Sin elegir'));
      if (e) { r.append(escudo(e), txt); r.title = 'Quitar este equipo'; }
      else { r.append(txt); r.removeAttribute('title'); }
    });
    lista.querySelectorAll('.equipo').forEach(b => {
      const id = +b.dataset.id;
      b.classList.toggle('e1', id === sel[0]);
      b.classList.toggle('e2', id === sel[1]);
      b.querySelector('.tag').textContent = id === sel[0] ? 'Equipo 1' : id === sel[1] ? 'Equipo 2' : '';
    });
    resultados();
  }

  async function resultados() {
    const cont = $('resultado'), mi = ++pedido;
    if (sel[0] === null || sel[1] === null) {
      cont.replaceChildren(el('p', 'vacio', 'Elige dos equipos para ver todos los partidos que han jugado entre sí.'));
      return;
    }
    const [a, b] = sel, A = porId(a).nombre, B = porId(b).nombre;
    cont.replaceChildren(el('p', 'vacio', 'Cargando partidos...'));
    let ps;
    try { ps = (await api({ accion: 'partidos', a, b })).partidos; }
    catch (e) { if (mi === pedido) cont.replaceChildren(el('p', 'vacio', 'No se pudieron cargar los partidos desde la base de datos.')); return; }
    if (mi !== pedido) return;
    if (!ps.length) {
      cont.replaceChildren(el('p', 'vacio', A + ' y ' + B + ' no tienen partidos registrados entre sí en las temporadas ' + COBERTURA + '.'));
      return;
    }
    let ga = 0, gb = 0, wa = 0, wb = 0, em = 0;
    const filas = ps.map(p => {
      const gl = p.goles_local, gv = p.goles_visitante, pl = p.penales_local || 0, pv = p.penales_visitante || 0;
      const loc = p.local_id, vis = p.visitante_id;
      ga += loc === a ? gl : gv; gb += loc === a ? gv : gl;
      let ganador = gl > gv ? loc : gv > gl ? vis : null;
      if (ganador === null) { em++; ganador = pl > pv ? loc : pv > pl ? vis : null; }   // penales: gana en la tabla, empate en el resumen
      else if (ganador === a) wa++; else wb++;
      const nota = [];
      if (p.tiempo_extra) nota.push('Tiempo extra');
      if (pl || pv) nota.push(pl !== pv ? 'Pen. ' + pl + '-' + pv : 'Penales');
      if (p.adjudicado) nota.push('Adjudicado');
      const cls = id => ganador === id ? 'gana' : '';
      return '<tr><td class="f">' + fecha(p.fecha) + '</td>'
        + '<td class="t">' + esc(p.torneo) + ' ' + esc(p.temporada) + '<small>' + esc(fase(p.fase)) + '</small></td>'
        + '<td class="loc ' + cls(loc) + '">' + esc(p.local) + '</td>'
        + '<td class="m"><span class="marcador">' + gl + ' - ' + gv + '</span>' + (nota.length ? '<small>' + nota.join(', ') + '</small>' : '') + '</td>'
        + '<td class="vis ' + cls(vis) + '">' + esc(p.visitante) + '</td></tr>';
    }).join('');
    const n = ps.length, pc = x => (100 * x / n).toFixed(2) + '%';
    cont.innerHTML = '<div class="resumen"><h2>' + esc(A) + ' vs ' + esc(B) + '</h2>'
      + '<p class="nota">' + n + ' partidos, temporadas ' + COBERTURA + ' (liguilla incluida). Los partidos definidos en penales cuentan como empate.</p>'
      + '<div class="cifras"><div class="c1"><b>' + wa + '</b><span>Victorias de ' + esc(A) + '</span></div>'
      + '<div><b>' + em + '</b><span>Empates</span></div>'
      + '<div class="c2"><b>' + wb + '</b><span>Victorias de ' + esc(B) + '</span></div></div>'
      + '<div class="barra-prop" aria-hidden="true"><i class="b1" style="width:' + pc(wa) + '"></i><i class="bx" style="width:' + pc(em) + '"></i><i class="b2" style="width:' + pc(wb) + '"></i></div>'
      + '<p class="goles">Goles: ' + esc(A) + ' ' + ga + ' - ' + gb + ' ' + esc(B) + '</p></div>'
      + '<div class="tabla-cont"><table><thead><tr><th>Fecha</th><th>Torneo</th><th class="loc">Local</th><th>Marcador</th><th>Visitante</th></tr></thead><tbody>' + filas + '</tbody></table></div>';
  }

  pintar();
  api({ accion: 'equipos' })
    .then(d => { EQUIPOS = d.equipos; COBERTURA = d.cobertura; construirLista(); pintar(); })
    .catch(() => {
      const ay = $('ayuda');
      ay.className = 'ayuda aviso';
      ay.textContent = 'No se pudo leer la base de datos. Abre la página desde http://localhost/ con Apache y MySQL encendidos en XAMPP e importa enfrentamientos.sql.';
    });
})();
