var txtNombre = document.getElementById("txt-nombre");
var txtDomicilio = document.getElementById("txt-domicilio");
var btnAceptar = document.getElementById("btn-aceptar");

btnAceptar.addEventListener('click', validarContenido);

function validarContenido() {

    var textoNombre = txtNombre.value;
    var textoDomicilio = txtDomicilio.value;

    // Instancia del modal de Bootstrap mediante JavaScript
    var modalElement = document.getElementById("modalError");
    var modalError = new bootstrap.Modal(modalElement);

    // Referencia al cuerpo del modal para modificar el mensaje dinámicamente
    var modalBody = document.getElementById("modalErrorBody");

    if (textoNombre.length === 0) {
        modalBody.textContent = "El campo Nombre no puede estar vacío. Por favor, ingresa un nombre válido.";
        modalError.show();
    } else if (textoDomicilio.length === 0) {
        modalBody.textContent = "El campo Domicilio no puede estar vacío. Por favor, ingresa un domicilio válido.";
        modalError.show();
    } else {
        alert("✅ ¡Contacto guardado correctamente!");
    }
}