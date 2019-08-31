import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <form>
          <div className="login">
            <form>
              <div>
              <h1>Login</h1>
              </div>
              <div className="form-group">
                E-mail: <input type="email" placeholder="E-mail"/>
              </div>
              <div className="form-group">
                Senha: <input type="password" placeholder="Senha"/>
              </div>
              <button>Login</button><br/><br/>
              <a href="#" onclick="mostrarCadastro()" className="cadastrar">Cadastrar-se</a>
            </form>
          </div>
          <div className="cadastro">
            <form>
              <h1>Cadastro</h1>
              <div className="form-group">
                E-mail: <input type="email" placeholder="E-mail"/>
              </div>
              <div className="form-group">
                Senha: <input type="password" placeholder="Senha"/><br/><br/>
                Confirmar Senha: <input type="password" placeholder="Confirmar senha"/>
              </div>
              <div className="form-group">
                CPF: <input type="text" placeholder="CPF"/>
              </div>
              <div className="form-group">
                Sexo: <input type="radio" name="sexo"/> masculino <input type="radio" name="sexo"/> feminino
              </div>
              <div className="form-group">
                Data de nascimento: <input type="date"/>
              </div>
              <button>Cadastrar</button>
            </form>
          </div>
        </form>
    </div>
  );
}

export default App;
