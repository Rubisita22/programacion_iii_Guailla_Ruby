console.log("Ciclo For");

for (let i = 1; i <= 5; i++) {
    console.log("Iteración número:", i);
}

console.log("Fin del ciclo For");   

console.log("Cuenta regresiva despacho de la unidad con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡Despacho de la unidad de transporte!");
    } else {
        console.log("Faltan " + i + " segundos para el despacho de la unidad");
    }
}

console.log("Nivel de batería / combustible del Bus");
let energia = 50;
for (let i = 0; i <= 100; i += 10) {
    if (energia + i <= 100) {
        console.log("Nivel de carga actual: " + (energia + i) + "%");
    }
}

let consumoPorRuta = 10;
let totalConsumido = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalConsumido += consumoPorRuta;
    console.log("Viaje " + viaje);
    console.log("Total consumido: " + totalConsumido + " unidades de combustible");
}
console.log("Total consumido: " + totalConsumido + " unidades");

console.log("Promedio de pasajeros transportados");
let totalPasajeros = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let pasajeros = dia * 5 + 5;
    totalPasajeros += pasajeros;
    console.log("Día " + dia + ": " + pasajeros + " pasajeros transportados");
}

console.log("Total de pasajeros transportados: " + totalPasajeros);
console.log("Promedio de pasajeros por día: " + (totalPasajeros / dias).toFixed(2));

console.log("Unidades en Mantenimiento o Servicio");
let enServicio = 0;
let enTaller = 0;
for (let unidad = 1; unidad <= 10; unidad++) {
    if (unidad % 2 === 0) {
        console.log("Unidad " + unidad + " está en taller");
        enTaller++;
    } else {
        console.log("Unidad " + unidad + " está en servicio");
        enServicio++;
    }
}
console.log("Total de unidades en servicio: " + enServicio);
console.log("Total de unidades en taller: " + enTaller);

console.log("Recaudación de Pasajes por Día");
let pasajesRecolectados = [35, 60, 45, 80, 20, 90, 55];
let total = 0;
let viajesExitosos = 0;
for (let i = 0; i < pasajesRecolectados.length; i++) {
    total += pasajesRecolectados[i];
    if (pasajesRecolectados[i] >= 50) {
        viajesExitosos++;
    }
    console.log("Día " + (i + 1) + ": " + pasajesRecolectados[i] + " pasajes validados");
}
console.log("Total de pasajes recolectados: " + total);
console.log("Número de días con alto flujo: " + viajesExitosos);

console.log("Recorrer Unidades con for ...of");
const flota = ["Bus A-101", "Bus A-102", "Bus B-201", "Bus B-202", "Bus C-301"];
for (let unidad of flota) {
    console.log("Unidad: " + unidad);
}

let bus = {
    codigo: "Bus A-102",
    combustible: 100,
    velocidad: 60,
    personal: ["Carlos Mendoza", "Ana Torres", "Luis Paredes"]
};
console.log("Recorrer propiedades de un objeto con for ...in");
for (let propiedad in bus) {
    console.log(propiedad + ": " + bus[propiedad]);
    if (propiedad === "personal") {
        console.log("Personal asignado a la unidad:");
        for (let miembro of bus[propiedad]) {
            console.log("- " + miembro);
        }
    }
}
for (let operador of bus.personal) {
    console.log("Operador: " + operador);
}

let rutas = [
    { nombre: "Ruta 1", pasajes: 90, meta: 100, operador: "Carlos Mendoza" },
    { nombre: "Ruta 2", pasajes: 80, meta: 100, operador: "Ana Torres" },
    { nombre: "Ruta 3", pasajes: 95, meta: 100, operador: "Luis Paredes" }
];

let exitosas = 0;
for (let ruta of rutas) {
    let porcentaje = (ruta.pasajes / ruta.meta) * 100;
    console.log(ruta.nombre + " completada por " + ruta.operador + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(ruta.nombre + " no alcanzó la meta de pasajes validados.");
    }
}
console.log("Número de rutas exitosas: " + exitosas);