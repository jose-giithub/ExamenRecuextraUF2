window.addEventListener("DOMContentLoaded", function() {
    console.log("DOM cargado");
    // Selecciona el botón SVG por su ID
    let boton = document.getElementById("boton");
    // Añade un evento de clic al botón SVG
    boton.addEventListener("click", function() {
        console.log("Click en el botón");
        playAudio();
    });
});

/**
 * Reproduce el archivo de audio especificado
 */
function playAudio() {
    // Crea una instancia de Audio
    let audio = new Audio('media/so-aterratge.mp3');
    // Reproduce el audio
    audio.play();
}
