import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div>
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
            </form> 
          </div>
        <Link to="/dashboard" ><button>Login</button></Link> <br/><br/> 
        <Link to="/cadastro" >Cadastrar</Link>  
        </form>
    </div>
  );
}

export default Login;


