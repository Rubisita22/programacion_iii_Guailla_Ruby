console.log('Sistema de transporte conectado desde el archivo externo')

if (typeof window !== 'undefined' && typeof window.alert === 'function') {
    window.alert('¡Atención, operador! Datos de flota cargados desde el archivo externo')
}