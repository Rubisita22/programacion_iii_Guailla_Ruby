let ruta = 4;
switch (ruta) {
    case 1:
        console.log("Estás en la Ruta Troncal Norte");
        break;
    case 2:
        console.log("Estás en la Ruta Troncal Sur");
        break;
    case 3:
        console.log("Estás en la Ruta Ecovía Central");
        break;
    case 4:
        console.log("Estás en la Ruta Expresa Aeropuerto");
        break;
    default:
        console.log("No se reconoce esa ruta en el sistema");
}

let tipoUnidad = "Bus Articulado";
switch (tipoUnidad) {
    case "Bus Articulado":
    case "Bus Biarticulado":
        console.log("¡Unidad de alta capacidad! Asignar a carril exclusivo.");
        break;
    case "Bus Alimentador":
        console.log("¡Unidad de integración! Asignar a zonas periféricas.");
        break;
    default:
        console.log("Tipo de unidad no identificado, verificar con el taller.");
}

let nivelCombustible = 50;
switch (true) {
    case (nivelCombustible >= 0 && nivelCombustible <= 25):
        console.log("Combustible en reserva, enviar unidad a reabastecimiento.");
        break;
    case (nivelCombustible > 25 && nivelCombustible <= 50):
        console.log("Combustible medio, apto para rutas cortas.");
        break;
    case (nivelCombustible > 50 && nivelCombustible <= 75):
        console.log("Combustible óptimo para el turno actual.");
        break;
    case (nivelCombustible > 75 && nivelCombustible <= 100):
        console.log("Tanque lleno, unidad lista para ruta de larga distancia.");
        break;
    default:
        console.log("Medición inválida o nivel de combustible fuera de rango.");
}

console.log("Calculadora de Tarifas y Capacidad");
let numero1 = 10;
let numero2 = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = numero1 - numero2;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        console.log("Resultado de la multiplicación:", resultado);
        break;
    case "division":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log("Resultado de la división:", resultado);
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación no reconocida.");
}