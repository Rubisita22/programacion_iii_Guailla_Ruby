console.log("Operadores Aritméticos - Sistema de Transporte");
let pasajerosSuben = 10;
let pasajerosBajan = 5;

console.log("Suma total de eventos:", pasajerosSuben + pasajerosBajan);
console.log("Diferencia de pasajeros:", pasajerosSuben - pasajerosBajan);
console.log("Proyección (x2 vueltas):", pasajerosSuben * 2);
console.log("Promedio por puerta:", pasajerosSuben / 2);
console.log("Pasajeros sobrantes por asiento par (Módulo):", pasajerosSuben % 2);

console.log("\nOperadores de Comparación");
console.log("Subieron los mismos que bajaron:", pasajerosSuben == pasajerosBajan);
console.log("Difieren pasajeros que suben y bajan:", pasajerosSuben != pasajerosBajan);
console.log("Subieron más de los que bajaron:", pasajerosSuben > pasajerosBajan);
console.log("Subieron menos de los que bajaron:", pasajerosSuben < pasajerosBajan);
console.log("Subieron al menos la misma cantidad:", pasajerosSuben >= pasajerosBajan);
console.log("Subieron como máximo la misma cantidad:", pasajerosSuben <= pasajerosBajan);

console.log("\nOperadores Lógicos");
let unidadEnServicio = true;
let tanqueLleno = false;

console.log("¿Unidad lista para ruta larga? (AND):", unidadEnServicio && tanqueLleno);
console.log("¿Unidad apta para ruta corta? (OR):", unidadEnServicio || tanqueLleno);
console.log("¿Unidad fuera de servicio? (NOT):", !unidadEnServicio);
console.log("¿Tanque incompleto? (NOT):", !tanqueLleno);

console.log("\nOperadores de Asignación");
let flotaActiva = 10;
console.log("Valor inicial de flota activa:", flotaActiva);

flotaActiva += 5;
console.log("Después de incorporar 5 buses (+=):", flotaActiva);

flotaActiva -= 3;
console.log("Después de enviar 3 al taller (-=):", flotaActiva);

flotaActiva *= 2;
console.log("Después de duplicar cobertura (*=):", flotaActiva);

flotaActiva /= 4;
console.log("Después de dividir en 4 sectores (/=):", flotaActiva);

flotaActiva %= 3;
console.log("Sobresaliente tras agrupar de a 3 (%=):", flotaActiva);

console.log("\nOperadores de Incremento y Decremento");
let contadorPasajeros = 10;
console.log("Valor inicial de pasajeros:", contadorPasajeros);

contadorPasajeros++;
console.log("Pasajero sube por puerta frontal (++):", contadorPasajeros);

contadorPasajeros--;
console.log("Pasajero baja por puerta trasera (--):", contadorPasajeros);

console.log("\nOperadores de Concatenación");
let codigoBus = "Bus-A102";
let rutaAsignada = "Troncal Norte";

let registroBus = codigoBus + " en " + rutaAsignada;
console.log("Registro de operación:", registroBus);

console.log("\nOperadores de Comparación Estricta");
let velocidadRegistrada = 10;
let velocidadTexto = "10";

console.log("Velocidad estrictamente igual (===):", velocidadRegistrada === velocidadTexto);
console.log("Velocidad estrictamente diferente (!==):", velocidadRegistrada !== velocidadTexto);

console.log("\nOperadores Ternarios");
let velocidadActual = 65;
let estadoVelocidad = (velocidadActual > 50) ? "Alerta: Exceso de velocidad" : "Velocidad dentro del límite";
console.log("Estado de la unidad:", estadoVelocidad);

console.log("\nCálculo de Recaudación por Tarifa ($0.35)");
let tarifa = 0.35;
console.log(`1 pasajero x $0.35 = $${(tarifa * 1).toFixed(2)}`);
console.log(`2 pasajeros x $0.35 = $${(tarifa * 2).toFixed(2)}`);
console.log(`3 pasajeros x $0.35 = $${(tarifa * 3).toFixed(2)}`);
console.log(`4 pasajeros x $0.35 = $${(tarifa * 4).toFixed(2)}`);
console.log(`5 pasajeros x $0.35 = $${(tarifa * 5).toFixed(2)}`);
console.log(`6 pasajeros x $0.35 = $${(tarifa * 6).toFixed(2)}`);
console.log(`7 pasajeros x $0.35 = $${(tarifa * 7).toFixed(2)}`);
console.log(`8 pasajeros x $0.35 = $${(tarifa * 8).toFixed(2)}`);
console.log(`9 pasajeros x $0.35 = $${(tarifa * 9).toFixed(2)}`);
console.log(`10 pasajeros x $0.35 = $${(tarifa * 10).toFixed(2)}`);

console.log("\nDistribución de Pasajeros por Fila (4 asientos)");
let capacidadFila = 4;
console.log(`4 pasajeros / 4 por fila = ${4 / capacidadFila} fila completa`);
console.log(`8 pasajeros / 4 por fila = ${8 / capacidadFila} filas completas`);
console.log(`12 pasajeros / 4 por fila = ${12 / capacidadFila} filas completas`);
console.log(`16 pasajeros / 4 por fila = ${16 / capacidadFila} filas completas`);
console.log(`20 pasajeros / 4 por fila = ${20 / capacidadFila} filas completas`);
console.log(`24 pasajeros / 4 por fila = ${24 / capacidadFila} filas completas`);
console.log(`28 pasajeros / 4 por fila = ${28 / capacidadFila} filas completas`);
console.log(`32 pasajeros / 4 por fila = ${32 / capacidadFila} filas completas`);
console.log(`36 pasajeros / 4 por fila = ${36 / capacidadFila} filas completas`);
console.log(`40 pasajeros / 4 por fila = ${40 / capacidadFila} filas completas`);