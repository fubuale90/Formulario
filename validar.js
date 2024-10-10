document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const controlInput = document.getElementById("control");

    form.addEventListener("submit", function(event) {
        const controlValue = controlInput.value;

        // Extraemos los primeros 4 dígitos del número de control
        const primerosCuatroDigitos = parseInt(controlValue.substring(0, 4), 10);

        // Validación para que el número de control esté entre 1584 y 2484 y tenga un máximo de 8 caracteres
        if (isNaN(primerosCuatroDigitos) || primerosCuatroDigitos < 1584 || primerosCuatroDigitos > 2484 || controlValue.length > 8) {
            alert("Ingrese un número de control válido.");
            event.preventDefault(); // Previene el envío del formulario
        }
    });
});
