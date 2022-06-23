import foto from './fotoPerfil.jpg';
import './App.css';

const mensagem = () => alert("Tenha uma boa noite!")

function App() {
  return (
    <div className="container-central">
      <header className="App-header">
        <h1>Olá, Seja bem vindo!<br/> Eu sou Diego!</h1>
        <img src={foto} className="foto-perfil" alt="foto"/>
        <p>O ontem é história, o <br/>amanhã é um mistério, mas o hoje<br/> é uma dádiva.
          é por isso que se chama presente!</p>
        <button className="botao" onClick={mensagem}>Clique aqui!</button>
      </header>
    </div>
  );
}

export default App;
