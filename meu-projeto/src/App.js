import "./App.css";

function App() {
  const name = "raul";
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://vita.placeholder.com/150";

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá {name}</p>
      <p>Soma {sum(2, 2)}</p>
      <p>Em maiusculas {newName}</p>
      <img src={url} alt="samengo" />
    </div>
  );
}

export default App;
