
import './App.css';
import io from 'socket.io-client'

const socket = io.connect("")

const send_message = () => {

}

function App() {
  return (
    <div className="App">
      <input placeholder='Message...'/>
      <button onClick={send_message}>Send message</button>
    </div>
  );
}

export default App;
