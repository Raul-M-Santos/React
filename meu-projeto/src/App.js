import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "Samengo";

  return (
    <div className="App">
      <SayMyName nome="Matheus" />
      <SayMyName nome="Maria" />
      <SayMyName nome="Matheus" />
      <SayMyName nome={nome} />
      <Pessoa nome="Raul" idade="24" profissao="porteiro" />
    </div>
  );
}

export default App;
