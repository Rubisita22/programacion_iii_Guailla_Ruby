let conductor = "Carlos Mendoza";
let edad = 42;
let rutaBase = "Troncal Norte";
let energia = 100;
let averia = false;

let unidad = {
    conductor: "Carlos Mendoza",
    edad: 42,
    rutaBase: "Troncal Norte",
    energia: 100,
    averia: false
};

console.log("Información de la unidad de transporte:");
console.log("Nombre del conductor: " + unidad.conductor);
console.log("Edad del conductor: " + unidad["edad"]);
console.log("Ruta base: " + unidad["rutaBase"]);
console.log("Nivel de batería: " + unidad.energia + "%");
console.log("Estado de la unidad: " + (unidad.averia ? "Averiada" : "Operativa"));

console.log("Agregar una nueva propiedad a la unidad");
unidad.modelo = "Bus Articulado E-400";
console.log("Modelo de la unidad: " + unidad.modelo);
unidad["capacidadPasajeros"] = 120;
console.log("Capacidad de pasajeros: " + unidad["capacidadPasajeros"]);
console.log("Unidad de transporte", unidad);

console.log("Actualizar el nivel de batería de la unidad");
unidad.energia = 80;
console.log("Nuevo nivel de batería: " + unidad.energia + "%");
unidad["averia"] = true;
console.log("Nuevo estado de la unidad: " + (unidad.averia ? "Averiada" : "Operativa"));
console.log("Unidad de transporte", unidad);

console.log("Eliminar una propiedad de la unidad");
delete unidad.capacidadPasajeros;
console.log("Propiedad 'capacidadPasajeros' eliminada.");
console.log("Unidad de transporte", unidad);

console.log("Recorrer las propiedades de la unidad");
for (let propiedad in unidad) {
    console.log(propiedad + ": " + unidad[propiedad]);
}

let inventario = {
    tarjetas: 10,
    chalecos: 5,
    extintores: 6
};
let total = 0;
for (let objeto in inventario) {
    total += inventario[objeto];
}
console.log("Total inventario: " + total);