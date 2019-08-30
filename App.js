import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Autenticacao">
        <div>
          <h1>Login</h1>
        </div>
        <div className="Login">
          E-mail: <input type="text" placeholder="E-mail"/> <br/><br/>
          Senha: <input type="text" placeholder="Senha"/><br/><br/>
          <button>Login</button>
        </div>
      </div>
      <div className="Autenticacao">
        <h1>Cadastro</h1>
      </div>
    </div>
  );
}

export default App;
