import { createServer } from 'node:http'

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.end('Sistema de Gestión de Transporte Público Activo\n')
    }
    else if (req.url === '/unidades') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Estado de la Flota</h1><p>Unidad A-102: En servicio | Unidad B-205: En mantenimiento</p>')
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>Atención al Ciudadano</h1><p>Soporte de movilidad: contacto@transporte.gob.ec</p>')
    }
    else {
        // Si la ruta no existe, devolvemos un Error 404
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end('<h1>404 - Ruta de Transporte no Encontrada</h1>')
    }
})

// Inicia el servidor HTTP localmente en el puerto 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor de Transporte escuchando en http://127.0.0.1:3000')
})