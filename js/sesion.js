document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form-sesion');
    const btnSubmit = document.getElementById('btn-submit');
    const linkToggle = document.getElementById('link-toggle');
    const tituloForm = document.getElementById('titulo-form');
    const textoToggle = document.getElementById('texto-toggle');
    const msgError = document.getElementById('msg-error');

    function alternarFormulario() {
        msgError.textContent = '';
        if (btnSubmit.getAttribute('data-accion') === 'login') {
            btnSubmit.setAttribute('data-accion', 'registrar');
            btnSubmit.textContent = 'Crear mi cuenta';
            tituloForm.textContent = 'Registro';
            textoToggle.innerHTML = '¿Ya tienes cuenta? <span id="link-toggle">Inicia sesión aquí</span>';
        } else {
            btnSubmit.setAttribute('data-accion', 'login');
            btnSubmit.textContent = 'Entrar a mi cuenta';
            tituloForm.textContent = 'Iniciar Sesión';
            textoToggle.innerHTML = '¿No tienes cuenta? <span id="link-toggle">Regístrate aquí</span>';
        }
        document.getElementById('link-toggle').addEventListener('click', alternarFormulario);
    }

    linkToggle.addEventListener('click', alternarFormulario);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const accion = btnSubmit.getAttribute('data-accion');
        const nombreUsuario = document.getElementById('nombre_usuario').value.trim();
        const contrasena = document.getElementById('contrasena').value.trim();

        fetch('procesar_sesion.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ accion: accion, nombre_usuario: nombreUsuario, contrasena: contrasena })
        })
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                msgError.style.color = '#006B47';
                msgError.textContent = data.msg;
                setTimeout(() => window.location.href = 'simulador_oficial.html', 1500);
            } else {
                msgError.style.color = '#CE1126';
                msgError.textContent = data.msg;
            }
        })
        .catch(err => {
            msgError.textContent = 'Error de conexión.';
        });
    });
});