let cargas = [30, 50, 70, 40];
let posicion = 2;
let nuevaCarga = 100;

if (posicion >= 0 && posicion < cargas.length) {
    cargas[posicion] = nuevaCarga;
} else {
    console.log("Posicion no valida");
}

for (let i = 0; i < cargas.length; i++) {
    console.log("Posicion", i);
    console.log("Carga:", cargas[i]);
}

console.log(cargas);

let operadores = [
    { id: 1, nombre: "Ruby", eficiencia: 99, turno: 1 },
    { id: 2, nombre: "Guailla", eficiencia: 99, turno: 2 },
    { id: 3, nombre: "Anabell", eficiencia: 99, turno: 3 }
];

for (let operador of operadores) {
    console.log("ID:", operador.id);
    console.log("Nombre:", operador.nombre);
    console.log("Eficiencia:", operador["eficiencia"]);
    console.log("Turno:", operador["turno"]);
}

console.log("Despacho organiza sus rutas");
let rutas = [
    {
        conductor: "Carlos Mendoza",
        pasajeros: [30, 50, 60]
    },
    {
        conductor: "Ana Torres",
        pasajeros: [20, 30, 30]
    },
    {
        conductor: "Luis Paredes",
        pasajeros: [90, 80, 70]
    }
];

for (let ruta of rutas) {
    let totalPasajeros = 0;
    console.log("Conductor:", ruta.conductor);
    for (let cantidad of ruta.pasajeros) {
        console.log("Pasajeros en tramo", cantidad);
        totalPasajeros += cantidad;
    }
    console.log("Total pasajeros transportados por", ruta.conductor, "son:", totalPasajeros);
}

let pasajerosOriginales = [30, 50, 70, 40];
let pasajerosProyectados = pasajerosOriginales.map(elemento => {
    return elemento * 2;
});

console.log(pasajerosProyectados);

let validos = pasajerosOriginales.filter(viaje => viaje >= 50);
console.log("Viajes validos:", validos);

let resultado = pasajerosOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
}, 0);
console.log("Total acumulado:", resultado);