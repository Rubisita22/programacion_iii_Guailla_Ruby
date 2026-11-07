const { createServer } = require('node:http');

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Sistema de Monitoreo de Transporte Público Activo\n');
    }
    else if (req.url === '/rutas') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Control de Rutas Troncales</h1><p>Consulta de frecuencias y unidades en servicio en tiempo real.</p>');
    }
    else if (req.url === '/contacto') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Central de Despacho</h1><p>Escríbenos a soporte@transportepublico.gob.ec</p>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Ruta de Transporte no encontrada</h1>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor del Sistema de Transporte escuchando en 127.0.0.1:3000');
});