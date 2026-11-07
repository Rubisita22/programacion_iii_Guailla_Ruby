console.log("Despachando unidades desde la terminal...");
let unidad = 1;
while (unidad <= 5) {
    console.log("Despachando unidad " + unidad + ".");
    unidad++;
}
console.log("Todas las unidades han sido despachadas.");

console.log("Cuenta regresiva para la salida del Bus Expreso");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para la salida del Bus Expreso");
    i--;
}

console.log("Recarga de batería del Bus Eléctrico");
let bateria = 50;
let recarga = 10;
let totalRecarga = 0;
while (bateria < 100) {
    bateria += recarga;
    totalRecarga += recarga;
    console.log("Cargando batería de la unidad. Nivel de carga actual: " + bateria + "%");
}
console.log("Batería completamente cargada después de " + totalRecarga + "% de recarga.");

console.log("Consumo de combustible en la ruta troncal");
let combustible = 100;
let consumo = 10;
let viajes = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Viaje " + viajes + ". Combustible restante: " + combustible + " unidades");
    if (combustible < 50) {
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");
    }
}
console.log("No hay suficiente combustible para otro viaje.");
console.log("Total de viajes realizados: " + viajes);

console.log("Operación de unidades en carril exclusivo con Do...While");
let energiaUnidad = 50;
do { 
    console.log("Unidad operando en carril exclusivo. Nivel de energía actual: " + energiaUnidad + "%");
    energiaUnidad -= 15;
} while (energiaUnidad > 0);
console.log("No hay suficiente energía para activar más salidas.");

console.log("Presupuesto para adquisición de nuevo autobús");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Fondo acumulado: " + ahorro + " unidades");
} while (ahorro < meta);
console.log("Meta alcanzada en " + semanas + " semanas. La empresa puede adquirir el nuevo autobús.");