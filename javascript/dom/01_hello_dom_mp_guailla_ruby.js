console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Centro de Monitoreo de Flota";

const estado = document.getElementById("estado");
const boton = document.getElementById("botonPortal");
boton.addEventListener("click", function() {
    console.log("Ejecutando click");
    estado.textContent = "¡Ruta Activada!";
    console.log("Texto cambiado en el elemento estado");
    alert("Proceso de activación de la ruta terminado");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function() {
    mensaje.textContent = "Conductor listo para la ruta!";
});

let viajes = 0;
const contador = document.getElementById("contador");
const nuevoViaje = document.getElementById("nuevoViaje");
nuevoViaje.addEventListener("click", function() {
    viajes += 1;
    contador.textContent = viajes;
});