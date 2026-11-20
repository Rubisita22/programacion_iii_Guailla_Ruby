const unidad = document.getElementById("unidad")
const cambiar = document.getElementById("cambiar")
const verRuta = document.getElementById("verRuta")
const ruta = document.getElementById("ruta")

cambiar.addEventListener("click", function() {
    if (unidad.getAttribute("title") == "Bus Articulado") {
        unidad.setAttribute("src", "bus_alimentador.jpeg")
        unidad.setAttribute("title", "Bus Alimentador")
        unidad.dataset.ruta = "Alimentador Norte"
    } else {
        unidad.setAttribute("src", "bus_troncal.jpeg")
        unidad.setAttribute("title", "Bus Articulado")
        unidad.dataset.ruta = "Troncal Central"
    }
})

verRuta.addEventListener("click", function() {
    ruta.textContent = unidad.dataset.ruta
})

const despacho = document.getElementById("despacho")
const activarDespacho = document.getElementById("activarDespacho")

activarDespacho.addEventListener("click", function() {
    if (despacho.textContent == "Despacho Inactivo") {
        despacho.style.backgroundColor = "green"
        despacho.style.color = "white"
        despacho.textContent = "Despacho activado"
    } else {
        despacho.style.backgroundColor = "red"
        despacho.style.color = "white"
        despacho.textContent = "Despacho Inactivo"
    }
})