let unidades = [
    {
        id: 1,
        nombre: "Unidad T-101",
        dimension: "Troncal Central",
        estado: "En Ruta"
    },
    {
        id: 2,
        nombre: "Unidad A-204",
        dimension: "Corredor Norte",
        estado: "En Mantenimiento"
    },
    {
        id: 3,
        nombre: "Unidad S-309",
        dimension: "Alimentador Sur",
        estado: "Fuera de Servicio"
    }
]

const tituloFormulario = document.getElementById("tituloFormulario")
const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const dimension = document.getElementById("dimension")
const estado = document.getElementById("estado")
const guardar = document.getElementById("guardar")
const cancelar = document.getElementById("cancelar")

const cantidad = document.getElementById("cantidad")
const contenedor = document.getElementById("contenedor")

let idEditando = null
let siguienteId = 4

function mostrarUnidades() {
    contenedor.replaceChildren()
    if (cantidad) {
        cantidad.textContent = `Cantidad: ${unidades.length}`
    }

    unidades.forEach(function (unidad) {
        const tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjeta")

        const titulo = document.createElement("h3")
        titulo.textContent = unidad.nombre

        const parrafoDimension = document.createElement("p")
        parrafoDimension.textContent = "Ruta/Troncal: " + unidad.dimension

        const parrafoEstado = document.createElement("p")
        parrafoEstado.textContent = "Estado: " + unidad.estado

        const acciones = document.createElement("div")
        acciones.classList.add("acciones")

        const botonEditar = document.createElement("button")
        botonEditar.type = "button"
        botonEditar.textContent = "Editar"
        botonEditar.classList.add("editar")
        botonEditar.addEventListener("click", function () {
            editarUnidad(unidad.id)
        })

        const botonEliminar = document.createElement("button")
        botonEliminar.type = "button"
        botonEliminar.textContent = "Eliminar"
        botonEliminar.classList.add("eliminar")
        botonEliminar.addEventListener("click", function () {
            const confirmarEliminar = confirm(`¿Eliminar ${unidad.nombre}?`)
            if (!confirmarEliminar) return

            unidades = unidades.filter(function (u) {
                return u.id !== unidad.id
            })

            if (idEditando === unidad.id) {
                limpiarFormulario()
            }

            mostrarUnidades()
        })

        acciones.append(botonEditar, botonEliminar)
        tarjeta.append(titulo, parrafoDimension, parrafoEstado, acciones)
        contenedor.appendChild(tarjeta)
    })
}

function editarUnidad(id) {
    const unidad = unidades.find(function (u) {
        return u.id === id
    })
    if (!unidad) return

    nombre.value = unidad.nombre
    dimension.value = unidad.dimension
    estado.value = unidad.estado
    idEditando = id

    tituloFormulario.textContent = "Editando Unidad"
    guardar.textContent = "Guardar cambios"
    cancelar.hidden = false
    nombre.focus()
}

function limpiarFormulario() {
    formulario.reset()
    idEditando = null
    tituloFormulario.textContent = "Registro de Unidad"
    guardar.textContent = "Agregar"
    cancelar.hidden = true
}

formulario.addEventListener("submit", function (event) {
    event.preventDefault()
    const nombreUnidad = nombre.value.trim()
    const dimensionUnidad = dimension.value
    const estadoUnidad = estado.value

    if (nombreUnidad === "") return

    if (idEditando === null) {
        const nuevaUnidad = {
            id: siguienteId,
            nombre: nombreUnidad,
            dimension: dimensionUnidad,
            estado: estadoUnidad
        }
        siguienteId++
        unidades.push(nuevaUnidad)
    } else {
        const unidad = unidades.find(function (u) {
            return u.id === idEditando
        })
        if (unidad) {
            unidad.nombre = nombreUnidad
            unidad.dimension = dimensionUnidad
            unidad.estado = estadoUnidad
        }
    }

    limpiarFormulario()
    mostrarUnidades()
})

cancelar.addEventListener("click", function () {
    limpiarFormulario()
})

mostrarUnidades()