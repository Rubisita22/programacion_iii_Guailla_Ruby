console.log("Sistema de Control de Transporte Iniciado");
console.log("Declaración de Variables de Flota");

/*
  Comentarios de varias líneas:
  Monitoreo de parámetros del autobús urbano
  Control de conductor, nivel de combustible,
  código de ruta y estado de la unidad.
*/

// Declaración con let (variables que cambian con el tiempo)
let conductor = 'Carlos Mendoza';
let nivelCombustible = 100; // Porcentaje de combustible
let codigoRuta = 'Ruta-102';
let unidadEnServicio = true;

// Mostrar valores iniciales
console.log(conductor);
console.log(nivelCombustible);
console.log(codigoRuta);
console.log(unidadEnServicio);

// Reasignación de variables (Cambio de turno y estado)
conductor = 'Ana Torres';
nivelCombustible = 85;
codigoRuta = 'Ruta-205';
unidadEnServicio = false;

// Mostrar nuevos valores
console.log(conductor);
console.log(nivelCombustible);
console.log(codigoRuta);
console.log(unidadEnServicio);

// Declaración con var (alcance global o de función)
var inspector = 'Roberto Gómez';
console.log("Inspector asignado:", inspector);

inspector = 'Luis Paredes';
console.log("Nuevo inspector asignado:", inspector);

// Declaración con const (valores constantes que NO cambian)
const idTerminal = "TERM-CENTRAL-01";
console.log("ID de Terminal:", idTerminal);

// idTerminal = "TERM-SUR-02"; // ERROR: No se puede reasignar una constante