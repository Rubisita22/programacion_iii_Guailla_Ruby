const energia = document.getElementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent = "Batería: 100%";
dimension.textContent = "Troncal: Corredor Central";
portal.textContent = "Despacho: activado";

// Selección a través del nombre de la clase
const personaje = document.querySelector(".personaje");
personaje.textContent = "Carlos Mendoza (Supervisor)";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Unidad Articulada";

const universo = document.querySelector("#universo");
universo.textContent = "Preparando Corredor Urbano";

const estadoConductor = document.querySelector("#morty .estado");
estadoConductor.textContent = "Listo para Iniciar Ruta";

const terminales = document.querySelectorAll(".planetas");
console.log(terminales);
console.log(terminales.length);

console.log(terminales[0].textContent);
console.log(terminales[1].textContent);
console.log(terminales[2].textContent);
console.log(terminales[3].textContent);

for (let i = 0; i < terminales.length; i++) {
    console.log(terminales[i].textContent);
}

console.log("Con forEach");
terminales.forEach(function(terminal) {
    console.log(terminal.textContent);
});

console.log("Con for of");
for (let terminal of terminales) {
    console.log(terminal.textContent);
}