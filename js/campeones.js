(() => {
  'use strict';
  const DATOS = [
    ['2003-04', 'apertura', 'Apertura 2003', 'Pachuca', 'Tigres'],
    ['2003-04', 'clausura', 'Clausura 2004', 'Pumas', 'Chivas'],
    ['2004-05', 'apertura', 'Apertura 2004', 'Pumas', 'Monterrey'],
    ['2004-05', 'clausura', 'Clausura 2005', 'América', 'Tecos'],
    ['2005-06', 'apertura', 'Apertura 2005', 'Toluca', 'Monterrey'],
    ['2005-06', 'clausura', 'Clausura 2006', 'Pachuca', 'San Luis'],
    ['2006-07', 'apertura', 'Apertura 2006', 'Chivas', 'Toluca'],
    ['2006-07', 'clausura', 'Clausura 2007', 'Pachuca', 'América'],
    ['2007-08', 'apertura', 'Apertura 2007', 'Atlante', 'Pumas'],
    ['2007-08', 'clausura', 'Clausura 2008', 'Santos', 'Cruz Azul'],
    ['2008-09', 'apertura', 'Apertura 2008', 'Toluca', 'Cruz Azul'],
    ['2008-09', 'clausura', 'Clausura 2009', 'Pumas', 'Pachuca'],
    ['2009-10', 'apertura', 'Apertura 2009', 'Monterrey', 'Cruz Azul'],
    ['2009-10', 'clausura', 'Bicentenario 2010', 'Toluca', 'Santos'],
    ['2010-11', 'apertura', 'Apertura 2010', 'Monterrey', 'Santos'],
    ['2010-11', 'clausura', 'Clausura 2011', 'Pumas', 'Morelia'],
    ['2011-12', 'apertura', 'Apertura 2011', 'Tigres', 'Santos'],
    ['2011-12', 'clausura', 'Clausura 2012', 'Santos', 'Monterrey'],
    ['2012-13', 'apertura', 'Apertura 2012', 'Tijuana', 'Toluca'],
    ['2012-13', 'clausura', 'Clausura 2013', 'América', 'Cruz Azul'],
    ['2013-14', 'apertura', 'Apertura 2013', 'León', 'América'],
    ['2013-14', 'clausura', 'Clausura 2014', 'León', 'Pachuca'],
    ['2014-15', 'apertura', 'Apertura 2014', 'América', 'Tigres'],
    ['2014-15', 'clausura', 'Clausura 2015', 'Santos', 'Querétaro'],
    ['2015-16', 'apertura', 'Apertura 2015', 'Tigres', 'Pumas'],
    ['2015-16', 'clausura', 'Clausura 2016', 'Pachuca', 'Monterrey'],
    ['2016-17', 'apertura', 'Apertura 2016', 'Tigres', 'América'],
    ['2016-17', 'clausura', 'Clausura 2017', 'Chivas', 'Tigres'],
    ['2017-18', 'apertura', 'Apertura 2017', 'Tigres', 'Monterrey'],
    ['2017-18', 'clausura', 'Clausura 2018', 'Santos', 'Toluca'],
    ['2018-19', 'apertura', 'Apertura 2018', 'América', 'Cruz Azul'],
    ['2018-19', 'clausura', 'Clausura 2019', 'Tigres', 'León'],
    ['2019-20', 'apertura', 'Apertura 2019', 'Monterrey', 'América'],
    ['2019-20', 'clausura', 'Clausura 2020', null, null, 'Cancelado por el de COVID-19'],
    ['2020-21', 'apertura', 'Guard1anes 2020', 'León', 'Pumas'],
    ['2020-21', 'clausura', 'Guard1anes 2021', 'Cruz Azul', 'Santos'],
    ['2021-22', 'apertura', 'Apertura 2021', 'Atlas', 'León'],
    ['2021-22', 'clausura', 'Clausura 2022', 'Atlas', 'Pachuca'],
    ['2022-23', 'apertura', 'Apertura 2022', 'Pachuca', 'Toluca'],
    ['2022-23', 'clausura', 'Clausura 2023', 'Tigres', 'Chivas'],
    ['2023-24', 'apertura', 'Apertura 2023', 'América', 'Tigres'],
    ['2023-24', 'clausura', 'Clausura 2024', 'América', 'Cruz Azul'],
    ['2024-25', 'apertura', 'Apertura 2024', 'América', 'Monterrey'],
    ['2024-25', 'clausura', 'Clausura 2025', 'Toluca', 'América'],
    ['2025-26', 'apertura', 'Apertura 2025', 'Toluca', 'Tigres'],
    ['2025-26', 'clausura', 'Clausura 2026', 'Cruz Azul', 'Pumas'],
    ['2026-27', 'apertura', 'Apertura 2026', null, null, 'Torneo en disputa']
  ];
  const EQUIPOS = {
    'Pachuca':   ['#1d4ed8', '#ffffff', 'PAC'],
    'Pumas':     ['#0b2a5b', '#e8c15a', 'PUM'],
    'América':   ['#ffd400', '#0a2a6b', 'AME'],
    'Toluca':    ['#b3122a', '#ffffff', 'TOL'],
    'Chivas':    ['#ce1126', '#ffffff', 'CHV'],
    'Atlante':   ['#1f3f94', '#ffffff', 'ATE'],
    'Santos':    ['#0a8f45', '#ffffff', 'SAN'],
    'Monterrey': ['#0a2a5e', '#ffffff', 'MTY'],
    'Tigres':    ['#f5a800', '#0a2a6b', 'TIG'],
    'Tijuana':   ['#1a1a1a', '#e11d2e', 'TIJ'],
    'León':      ['#00843d', '#ffd400', 'LEO'],
    'Cruz Azul': ['#0033a0', '#ffffff', 'CAZ'],
    'Atlas':     ['#9f1239', '#ffffff', 'ATS']
  };

  const CARPETA_LOGOS = 'img/';
 const archivoLogo = nombre =>
  nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, '') + '.jpg';
  const torneos = DATOS.map(([temporada, tipo, torneo, campeon, subcampeon, nota]) =>
    ({ temporada, tipo, torneo, campeon, subcampeon, nota }));
  const grupos = {
    apertura: torneos.filter(t => t.tipo === 'apertura'),
    clausura: torneos.filter(t => t.tipo === 'clausura')
  };

  const seccion  = document.getElementById('campeones');
  if (!seccion) return;
  const pista    = document.getElementById('camp-pista');
  const ventana  = seccion.querySelector('.camp-ventana');
  const btnPrev  = document.getElementById('camp-prev');
  const btnNext  = document.getElementById('camp-next');
  const rango    = document.getElementById('camp-rango');
  const progreso = document.getElementById('camp-progreso');
  const tabs     = seccion.querySelectorAll('.camp-tab');

  let tipo = 'apertura';
  let indice = 0;

  const lista = () => grupos[tipo];
  const visibles = () => parseInt(getComputedStyle(pista).getPropertyValue('--vis'), 10) || 1;
  const maximo = () => Math.max(0, lista().length - visibles());

  function tarjeta(t) {
    const cabecera = `<header class="camp-banda"><strong>${t.torneo}</strong><small>Temporada ${t.temporada}</small></header>`;
    if (!t.campeon) {
      return `<div class="camp-slide"><article class="camp-card pendiente">${cabecera}
        <div class="camp-cuerpo"><div class="camp-insignia">?</div><h3>${t.nota}</h3></div></article></div>`;
    }
    const [fondo, texto, siglas] = EQUIPOS[t.campeon];
    return `<div class="camp-slide"><article class="camp-card" style="--c1:${fondo};--c2:${texto}">${cabecera}
      <div class="camp-cuerpo">
        <div class="camp-insignia" aria-hidden="true">${siglas}<img class="camp-logo" src="${CARPETA_LOGOS}${archivoLogo(t.campeon)}" alt="" onload="this.parentNode.classList.add('con-logo')" onerror="this.remove()"></div>
        <h3>${t.campeon}</h3>
        <p class="camp-titulo">🏆 Campeón</p>
        <p class="camp-final">Subcampeón: ${t.subcampeon}</p>
      </div></article></div>`;
  }

  function actualizar() {
    const l = lista(), v = visibles();
    indice = Math.min(indice, maximo());
    pista.style.setProperty('--i', indice);
    btnPrev.disabled = indice === 0;
    btnNext.disabled = indice >= maximo();
    const ultimo = Math.min(indice + v, l.length) - 1;
    rango.textContent = `Temporadas ${l[indice].temporada} a ${l[ultimo].temporada}`;
    progreso.style.width = `${((ultimo + 1) / l.length) * 100}%`;
  }

  function mostrar(nuevoTipo) {
    tipo = nuevoTipo;
    indice = 0;
    pista.innerHTML = lista().map(tarjeta).join('');
    tabs.forEach(b => {
      const activa = b.dataset.tipo === tipo;
      b.classList.toggle('activa', activa);
      b.setAttribute('aria-selected', activa);
    });
    pista.classList.remove('cambia');
    void pista.offsetWidth;
    pista.classList.add('cambia');
    actualizar();
  }
  const mover = d => { indice = Math.max(0, Math.min(indice + d, maximo())); actualizar(); };
  tabs.forEach(b => {
    b.querySelector('.camp-cuenta').textContent = `(${grupos[b.dataset.tipo].filter(t => t.campeon).length})`;
    b.addEventListener('click', () => mostrar(b.dataset.tipo));
  });
  btnPrev.addEventListener('click', () => mover(-1));
  btnNext.addEventListener('click', () => mover(1));
  seccion.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') mover(-1);
    if (e.key === 'ArrowRight') mover(1);
  });
  let inicioX = null;
  ventana.addEventListener('pointerdown', e => { inicioX = e.clientX; });
  ventana.addEventListener('pointerup', e => {
    if (inicioX !== null && Math.abs(e.clientX - inicioX) > 40) mover(e.clientX < inicioX ? 1 : -1);
    inicioX = null;
  });
  window.addEventListener('resize', actualizar);

  mostrar('apertura');
})();