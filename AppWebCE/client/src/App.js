
// requerimientos para socket.io y react js
import io from "socket.io-client";
import { useEffect, useState } from "react";

// creación/conexión del sockect al puerto del servidor
const socket = io.connect("http://localhost:3001");

// lógica principal
function App() {

  // envia los valores y la operación mediante un json al servidor, toma los valores de los input
  const sendMessage = () => {

    // toma los valores de los input
    let val1 = document.querySelector('#num_one').value
    let val2 = document.querySelector('#num_two').value
    let op = document.querySelector('#operation').value

    // se crea el json
    let myjson = {
      value1: val1,
      value2: val2,
      operation: op
    }

    // envia la data al servidor
    socket.emit("send_message", myjson);
  };

  // espera respuesta del servidor
  useEffect(() => {

    // recibe y lee el json enviado por el servidor con el resultado de la operación
    socket.on("receive_message", (server_json) => {

      let resultado = server_json.resultado

      // espera a ser actualizada la página NOTA:UNA VEZ EL SERVIDOR ENVIA RESPUESTA SE REFRESCA LA PÁGINA
      // VER LA TERMINAL DEL SERVIDOR PARA OBSERVAR LOS VALORES, LA OPERACIÓN Y EL RESULTADO
      const handle = event =>{
        console.log(resultado)
        document.querySelector('#result').value=resultado;
        event.preventDefault()
      };
    });
  }, [socket]);

  useEffect(()=>{
    document.querySelector('#result').value="";
  },[])

  // componentes de la app 
  return (

    <div className="App">

      <div className="app-title">

        <h1>Calculadora</h1>

      </div>

      <form>
            <div>
              <input type="text" id="result"  readOnly /> 
            </div>
            <div>
              <input type="text" id="num_one" placeholder="First value..." />
              <input type="text" id="num_two" placeholder="Second value..." />
              <input type="text" id="operation" placeholder="Enter an operation (+)(-)(x)(/)" size="27"/>
            </div>  
            <div>
              <button onClick={sendMessage}>Calculate</button>
            </div>
      </form>

    </div>

  );

}

export default App;