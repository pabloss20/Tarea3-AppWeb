
// Se accede a las herramientas de net
const net = require('net');  

const readline = require('readline-sync')

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
    send()
})

// Muestra el error en caso de haber
cliente.on('error', (error)=>{
    console.log(error.message)
})

// Funcion para enviar 
function send(){

    // Se almacena en una variable lo que se ingrese por el usuario
    var line = readline.question('Digite algo: ')

    if (line == "0"){
        cliente.end()
    }else{
        cliente.write(line)
    }
}