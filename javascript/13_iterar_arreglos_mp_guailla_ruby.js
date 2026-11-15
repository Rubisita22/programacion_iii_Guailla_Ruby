console.log("Gestión de Transporte Público: Funciones en JavaScript");

function despacharUnidad() {
    console.log("Unidad despachada. Iniciando recorrido en la ruta.");
}
despacharUnidad();
despacharUnidad();
despacharUnidad();
despacharUnidad();

function conductorUnidad(nombre) {
    console.log("El conductor " + nombre + " está a bordo de la unidad.");
}

conductorUnidad("Carlos Mendoza");
conductorUnidad("Ana Torres");

function recargarBateria(cargaActual, recarga) {
    let cargaTotal = cargaActual + recarga;
    if (cargaTotal > 100) {
        cargaTotal = 100;
    }
    console.log("Batería del bus recargada. Nivel de carga: " + cargaTotal + "%");
    return cargaTotal;
}

let bateriaBus = 50;
bateriaBus = recargarBateria(bateriaBus, 30);
bateriaBus = recargarBateria(bateriaBus, 40);

console.log("Calcular tarifas con descuento");
function calcularTarifaDescuento(tarifa, descuento) {
    let tarifaFinal = tarifa - (tarifa * (descuento / 100));
    return tarifaFinal;
}

let tarifaBase = 100;
let porcentajeDescuento = 20;
let tarifaConDescuento = calcularTarifaDescuento(tarifaBase, porcentajeDescuento);
console.log("Tarifa original: " + tarifaBase + ", Tarifa con descuento: " + tarifaConDescuento);

function evaluarCombustibleEvaluacion(combustible, correctas, totalPreguntas) {
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (combustible < 20) {
        console.log("Advertencia: Combustible bajo. Nivel actual: " + combustible + "%");
    }
    if (porcentajeCorrectas >= 70) {
        console.log("Evaluación aprobada con un " + porcentajeCorrectas + "% de respuestas correctas.");
    } else {
        console.log("Evaluación reprobada con un " + porcentajeCorrectas + "% de respuestas correctas.");
    }
}
evaluarCombustibleEvaluacion(15, 8, 10);
evaluarCombustibleEvaluacion(50, 6, 10);

let pasajerosPorRuta = [15, 30, 25, 40, 10];

function calcularTotalPasajeros(arregloPasajeros) {
    let total = 0;

    for (let i = 0; i < arregloPasajeros.length; i++) {
        total += arregloPasajeros[i];
    }

    return total;
}

let totalPasajeros = calcularTotalPasajeros(pasajerosPorRuta);
console.log("El total de pasajeros transportados es: " + totalPasajeros);

let pasajerosPorViaje = [15, 60, 25, 70, 55];
function contarViajesExitosos(arregloViajes) {
    let viajesExitosos = 0;

    for (let i = 0; i < arregloViajes.length; i++) {
        if (arregloViajes[i] > 50) {
            viajesExitosos++;
        }
    }

    return viajesExitosos;
}

let exitosos = contarViajesExitosos(pasajerosPorViaje);
console.log("Cantidad de viajes exitosos: " + exitosos);