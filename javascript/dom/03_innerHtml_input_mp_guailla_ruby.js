const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Aviso desde la Central de Despacho";
saludo.innerHTML = `<h1>Hola con innerHTML</h1>`;

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h1>Unidad Articulada T-101</h1>
    <p>Troncal: Corredor Central</p>
    <p>Tipo: Bus Eléctrico</p>
    <p>Estado: Operativa</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");

registrar.addEventListener("click", function() {
    console.log("Ejecutando click", nombre.value);
    saludar.textContent = "Hola " + nombre.value;
});