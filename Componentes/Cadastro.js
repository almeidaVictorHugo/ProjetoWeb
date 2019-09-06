import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Cadastro() {
  return (
    <div>
        <form>
            <div className="cadastro">
                <form className="cadastro">
                <h1>Cadastro</h1>
                <div className="form-group">
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Sobrenome"/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirmar senha"/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="E-mail" id="email"/>
                </div>
                <div className="form-group">
                    Data de nascimento: <input type="date"/>
                </div>
                <div className="form-group">
                    Gênero: <input type="radio" name="sexo"/> masculino <input type="radio" name="sexo"/> feminino <input type="radio" name="sexo"/> outros <br/><br/>
                </div>
                <button>Cadastrar</button><br/><br/>
                <Link to="/" >Voltar</Link>   
                </form> 
            </div>
              
        </form>
    </div>
  );
}

export default Cadastro;
