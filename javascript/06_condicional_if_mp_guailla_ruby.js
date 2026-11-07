console.log("Evaluación de Operación de Transporte");

let pasajerosObjetivo = 200;
let pasajerosRegistrados = 150;
let combustibleInicial = 1000;
let combustibleGastado = 800;
let conductorHerido = "si";
let unidadAveriada = "no";
let bonificacion = 0;

let porcentajeCumplimiento = (pasajerosRegistrados / pasajerosObjetivo) * 100;
let combustibleRestante = combustibleInicial - combustibleGastado;

console.log("Resultados de la operación:");

if (porcentajeCumplimiento >= 90) {
    console.log("Operación cumplida con éxito");
} else if (porcentajeCumplimiento >= 70) {
    console.log("Operación cumplida parcialmente");
} else if (porcentajeCumplimiento >= 50) {
    console.log("Operación regular, se requiere mejorar");
} else {
    console.log("Operación fallida");
}

console.log("Evaluación de bonificación por desempeño");

if (porcentajeCumplimiento >= 90 && combustibleRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Retorno a la terminal de origen");

if (conductorHerido === "no" && unidadAveriada === "no") {
    console.log("Retorno seguro a la terminal.");
} else if (conductorHerido === "si" && unidadAveriada === "no") {
    console.log("Retorno a la terminal con precaución, el conductor requiere atención.");
} else if (conductorHerido === "no" && unidadAveriada === "si") {
    console.log("Retorno a la terminal con precaución, la unidad está averiada.");
} else {
    console.log("Retorno a la terminal con precaución, el conductor requiere atención y la unidad está averiada.");
}

console.log("Resumen del turno de operación");
console.log("Pasajeros Objetivo:", pasajerosObjetivo);
console.log("Pasajeros Registrados:", pasajerosRegistrados);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible Inicial:", combustibleInicial);
console.log("Combustible Consumido:", combustibleGastado);
console.log("Combustible Restante:", combustibleRestante);
console.log("Conductor Requiere Atención:", conductorHerido);
console.log("Unidad Averiada:", unidadAveriada);
console.log("Bonificación Otorgada:", bonificacion);