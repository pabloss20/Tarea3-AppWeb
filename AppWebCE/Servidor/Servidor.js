
// Se accede a las herramientas de net
const net = require('net'); 

// Se crea el servidor
const servidor = net.createServer() 

// Se inicia el Socket
servidor.on('connection', (socket)=>{

    // Recibe la informacion del cliente y la muestra
    socket.on('data', (data)=>{
        console.log('Mensaje recibido desde el cliente: ' + data + '.')
    })

    // Avisa cuando cierra la comunicacion
    socket.on('close', ()=>{
        console.log('Se ha cerrado la comunicacion.')
    })

    // Muestra el error en caso de haber
    socket.on('error', (error)=>{
        console.log(error.message)
    })
})

// Se escucha en determiando puerto
servidor.listen(5000, ()=>{
    console.log('Escuchando en el puerto:', servidor.address().port + '.')
})

