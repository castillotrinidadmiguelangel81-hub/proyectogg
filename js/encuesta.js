document.addEventListener("DOMContentLoaded", () => {
    const CLAVE_ENCUESTA = "encuestaLigaMX_v1";

    const encuestaConfig = {
        id: "cuarto_grande_2026",
        pregunta: "¿Quién merece hoy ser considerado el verdadero cuarto grande?",
        opciones: [
            { id: "pumas", texto: "Pumas UNAM", votosBase: 2 },
            { id: "tigres", texto: "Tigres UANL", votosBase: 52 },
            { id: "toluca", texto: "Deportivo Toluca", votosBase: 89 },
            { id: "pachuca", texto: "Pachuca", votosBase: 27 }
        ]
    };

    const elPregunta = document.getElementById("encuesta-pregunta");
    const form = document.getElementById("form-encuesta");
    const contOpciones = document.getElementById("encuesta-opciones");
    const contResultados = document.getElementById("encuesta-resultados");

    elPregunta.textContent = encuestaConfig.pregunta;

    let estado = JSON.parse(localStorage.getItem(CLAVE_ENCUESTA));

    if (!estado || estado.id !== encuestaConfig.id) {
        estado = {
            id: encuestaConfig.id,
            votoUsuario: null,
            conteo: {}
        };
        encuestaConfig.opciones.forEach(op => {
            estado.conteo[op.id] = op.votosBase;
        });
    }

    function mostrarResultados() {
        form.style.display = "none";
        contResultados.style.display = "block";

        const totalVotos = Object.values(estado.conteo).reduce((acc, val) => acc + val, 0);

        contResultados.innerHTML = encuestaConfig.opciones.map(op => {
            const votos = estado.conteo[op.id] || 0;
            const porcentaje = totalVotos > 0 ? Math.round((votos / totalVotos) * 100) : 0;
            const esMio = estado.votoUsuario === op.id;

            return `
                <div class="barra-item ${esMio ? "mi-voto" : ""}">
                    <div class="barra-info">
                        <span>${op.texto} ${esMio ? "✓" : ""}</span>
                        <span>${porcentaje}%</span>
                    </div>
                    <div class="barra-fondo">
                        <div class="barra-relleno" style="width: 0%" data-width="${porcentaje}%"></div>
                    </div>
                </div>
            `;
        }).join("") + `<p class="encuesta-total">Total: ${totalVotos} votos</p>`;

        requestAnimationFrame(() => {
            contResultados.querySelectorAll(".barra-relleno").forEach(barra => {
                barra.style.width = barra.getAttribute("data-width");
            });
        });
    }

    function mostrarFormulario() {
        contOpciones.innerHTML = encuestaConfig.opciones.map(op => `
            <label class="encuesta-opcion-label">
                <input type="radio" name="voto_liga" value="${op.id}" required>
                <span>${op.texto}</span>
            </label>
        `).join("");
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const seleccionado = form.querySelector('input[name="voto_liga"]:checked');
        if (!seleccionado) return;

        const idElegido = seleccionado.value;
        estado.conteo[idElegido] = (estado.conteo[idElegido] || 0) + 1;
        estado.votoUsuario = idElegido;

        localStorage.setItem(CLAVE_ENCUESTA, JSON.stringify(estado));
        mostrarResultados();
    });

    if (estado.votoUsuario) {
        mostrarResultados();
    } else {
        mostrarFormulario();
    }
});