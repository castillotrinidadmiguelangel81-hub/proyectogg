const draggables = document.querySelectorAll('.equipo-draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', event => {
        if (!draggable.classList.contains('bloqueado')) {
            draggable.classList.add('dragging');
            event.dataTransfer.setData('text/plain', draggable.id);
        } else {
            event.preventDefault();
        }
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

dropzones.forEach(zone => {
    zone.addEventListener('dragover', e => {
        e.preventDefault();
        if (zone.children.length === 0) zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const id = e.dataTransfer.getData('text/plain');
        const element = document.getElementById(id);
        
        if (zone.children.length === 0 && element && !element.classList.contains('bloqueado')) {
            const clon = element.cloneNode(true);
            clon.id = clon.id + '-clon'; 
            clon.draggable = false;
            zone.appendChild(clon);
            
            const marcador = document.createElement('span');
            marcador.className = 'marcador';
            marcador.innerText = '0';
            zone.appendChild(marcador);

            element.classList.add('bloqueado');
            element.setAttribute('draggable', 'false');
        }
    });
});

function poissonRandom(lambda) {
    const L = Math.exp(-lambda);
    let p = 1.0;
    let k = 0;
    do {
        k++;
        p *= Math.random();
    } while (p > L && k <= 7);
    return k - 1;
}

function generarGoles(poderEq1, poderEq2, faseNum) {
    const ratio = poderEq1 / poderEq2;
    let lambda = 1.35 * Math.pow(ratio, 4);

    if (faseNum === 2) lambda *= 0.85; 
    if (faseNum === 3) lambda *= 0.70; 

    return poissonRandom(lambda);
}

function simularEnfrentamiento(slot1, slot2, destino, faseNum) {
    const img1 = slot1.querySelector('img');
    const img2 = slot2.querySelector('img');
    
    if (!img1 || !img2) return null;

    const poder1 = parseInt(img1.getAttribute('data-poder'));
    const poder2 = parseInt(img2.getAttribute('data-poder'));

    const ida = [generarGoles(poder1, poder2, faseNum), generarGoles(poder2, poder1, faseNum)];
    const vuelta = [generarGoles(poder2, poder1, faseNum), generarGoles(poder1, poder2, faseNum)];

    let total1 = ida[0] + vuelta[1];
    let total2 = ida[1] + vuelta[0];

    if (total1 === total2) {
        if (Math.random() < (poder1 / (poder1 + poder2))) {
            total1++; 
        } else {
            total2++;
        }
    }

    slot1.querySelector('.marcador').innerText = total1;
    slot2.querySelector('.marcador').innerText = total2;

    const ganador = total1 > total2 ? img1 : img2;
    
    const clonGanador = ganador.cloneNode(true);
    const destinoSlot = document.querySelector(destino);
    destinoSlot.innerHTML = '';
    destinoSlot.appendChild(clonGanador);

    const marcadorDestino = document.createElement('span');
    marcadorDestino.className = 'marcador';
    marcadorDestino.innerText = '0';
    destinoSlot.appendChild(marcadorDestino);

    return ganador.id;
}

document.getElementById('btn-simular-libre').addEventListener('click', () => {
    const cf = document.querySelectorAll('#cuartos .partido');
    
    let listos = 0;
    cf.forEach(partido => {
        if(partido.children[0].children.length > 0 && partido.children[1].children.length > 0) listos++;
    });

    if(listos < 4) {
        alert("Por favor arrastra a 8 equipos a los cuartos de final antes de simular.");
        return;
    }

    simularEnfrentamiento(cf[0].children[0], cf[0].children[1], '.destino-sf1-1', 1);
    simularEnfrentamiento(cf[1].children[0], cf[1].children[1], '.destino-sf1-2', 1);
    simularEnfrentamiento(cf[2].children[0], cf[2].children[1], '.destino-sf2-1', 1);
    simularEnfrentamiento(cf[3].children[0], cf[3].children[1], '.destino-sf2-2', 1);

    setTimeout(() => {
        const sf = document.querySelectorAll('#semis .partido');
        simularEnfrentamiento(sf[0].children[0], sf[0].children[1], '.destino-f-1', 2);
        simularEnfrentamiento(sf[1].children[0], sf[1].children[1], '.destino-f-2', 2);

        setTimeout(() => {
            const final = document.querySelectorAll('#final .partido');
            simularEnfrentamiento(final[0].children[0], final[0].children[1], '.destino-campeon', 3);
        }, 1000);
    }, 1000);
});

document.getElementById('btn-reiniciar-libre').addEventListener('click', () => {
    const slots = document.querySelectorAll('.slot-equipo');
    slots.forEach(slot => {
        slot.innerHTML = '';
    });

    draggables.forEach(draggable => {
        draggable.classList.remove('bloqueado');
        draggable.setAttribute('draggable', 'true');
    });
});