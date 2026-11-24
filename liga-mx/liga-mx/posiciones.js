const $ = id => document.getElementById(id);
const selTemp = $('temporada'), selTorneo = $('torneo'), inpEquipo = $('equipo'), out = $('resultado');
 
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 
async function api(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error('Error del servidor');
  return r.json();
}
 
async function cargarTemporadas() {
  try {
    const temps = await api('api.php?accion=temporadas');
    selTemp.innerHTML = '<option value="">— Elige temporada —</option>' +
      temps.map(t => `<option>${esc(t)}</option>`).join('');
  } catch { out.innerHTML = '<p class="msg">No se pudo conectar con la base de datos.</p>'; }
}
 
selTemp.addEventListener('change', async () => {
  inpEquipo.value = ''; inpEquipo.disabled = true;
  if (!selTemp.value) {
    selTorneo.disabled = true;
    selTorneo.innerHTML = '<option value="">Elige temporada primero</option>';
    out.innerHTML = '<p class="msg">Selecciona una temporada para comenzar.</p>';
    return;
  }
  const torneos = await api('api.php?accion=torneos&temporada=' + encodeURIComponent(selTemp.value));
  selTorneo.innerHTML = '<option value="">— Apertura o Clausura —</option>' +
    torneos.map(t => `<option>${esc(t)}</option>`).join('');
  selTorneo.disabled = false;
  out.innerHTML = '<p class="msg">Ahora elige el torneo.</p>';
});
 
selTorneo.addEventListener('change', () => {
  inpEquipo.value = '';
  inpEquipo.disabled = !selTorneo.value;
  mostrarTabla();
});
 
let timer;
inpEquipo.addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(mostrarTabla, 250); });
 
async function mostrarTabla() {
  if (!selTemp.value || !selTorneo.value) return;
  const q = new URLSearchParams({ temporada: selTemp.value, torneo: selTorneo.value, equipo: inpEquipo.value });
  const filas = await api('api.php?accion=tabla&' + q);
  if (!filas.length) { out.innerHTML = '<p class="msg">No se encontraron resultados.</p>'; return; }
  out.innerHTML = `<table>
    <thead><tr><th>#</th><th class="equipo">Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>Pts</th></tr></thead>
    <tbody>${filas.map(f => `<tr class="${f.posicion <= 8 ? 'liguilla' : ''}">
      <td>${f.posicion}</td><td class="equipo">${esc(f.equipo)}</td><td>${f.pj}</td><td>${f.g}</td><td>${f.e}</td><td>${f.p}</td>
      <td>${f.gf}</td><td>${f.gc}</td><td>${f.dg > 0 ? '+' : ''}${f.dg}</td><td class="pts">${f.pts}</td></tr>`).join('')}
    </tbody></table>`;
}
 
cargarTemporadas();