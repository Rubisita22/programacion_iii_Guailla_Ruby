let unidades = ["Bus Articulado", "Bus Biarticulado", "Bus Alimentador", "Bus Eléctrico", "Unidad Ruby", "Unidad Guailla"];
console.log("Elemento 0", unidades[0]);
console.log("Elemento 2", unidades[2]);
console.log("Elemento 5", unidades[5]);
console.log("Elemento 4", unidades[4]);
console.log("Tamaño del arreglo ", unidades.length);
console.log("Unidades: ", unidades);

console.log("Incluir elementos a un arreglo con Push");
unidades.push("Unidad Saldaña");
console.log("Unidades: ", unidades);

unidades.unshift("Unidad Anabel");
console.log("Unidades: ", unidades);

console.log("Modificar elementos de un arreglo");
unidades[0] = "Unidad Anabell";
console.log("Unidades: ", unidades);

console.log("Eliminar un elemento del arreglo :");
unidades.pop();
console.log("Unidades :", unidades);

unidades.shift();
console.log("Unidades :", unidades);

unidades.splice(1, 1);
console.log("Unidades :", unidades);