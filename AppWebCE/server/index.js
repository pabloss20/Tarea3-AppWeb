
// requerimeintos propios de socket.io y react js
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

// Se crea el servidor
const server = http.createServer(app);

// conexión al puerto del servidor react js y métodos a utilizar
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// inicia la conexión
io.on("connection", (socket) => {

  // notifica cuando un usario se conecta y muestra su id
  console.log(`User Connected: ${socket.id}`);

  // se recibe la data enviada por el cliente
  socket.on("send_message", (client_json) => {

    // muestra los valores del json enviado por el cliente
    console.log(client_json.value1)
    console.log(client_json.value2)
    console.log(client_json.operation)

    // variables que toman los valores envidados por el cliente mediante un json
    let first_value = parseFloat(client_json.value1)
    let second_value = parseFloat(client_json.value2)
    let operation = client_json.operation
    let result

    // switch case donde se realizan las operaciones matemáticas suma, resta, división y multiplicación
    switch (operation){
      case "+":

        result = first_value + second_value
        break;

      case "-":
        result = first_value - second_value
        break;

      case "x":

        result = first_value * second_value
        break;

      case "/":

        result = first_value / second_value
        break;

      default:
        break;
    }

    // muestra el resultado en la terminal
    console.log(result)

    // variable que castea a string el resultado de la oepracion
    let resultado_string = toString(result) 

    // se crea un json con el resultado de la operación para enviarla al cliente mediante socket
    let server_json = {resultado: resultado_string}

    // se envia la data al cliente
    socket.send("receive_message", server_json)
    
  });
});

// puerto al que escucha y se ejecuta el servidor
server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});