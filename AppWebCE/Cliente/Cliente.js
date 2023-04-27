
// Se accede a las herramientas de net
const net = require('net');  

// Puerto y host al cual se conecta el cliente
const options = {
    port: 5000,
    host: '127.0.0.1'
}

// Se crear el cliente
const cliente = net.createConnection(options)

// Se crea la conexion
cliente.on('connect', ()=>{
    console.log('Conexion establecida con el servidor.')
    cliente.write('Hola, soy el cliente: estudianteCE.')
})

// Muestra el error en caso de haber
cliente.on('error', (error)=>{
    console.log(error.message)
})