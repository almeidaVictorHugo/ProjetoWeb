import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { Container } from './styles';

export default class Transporte extends Component {
    CadastrarTransporte(){

    }
  
    render() {
      return(
        <div>
          <form>
          <div>
            <h1>Cadastro de veiculo</h1>
            </div>
            <div className="form-group">
            <input type="text" placeholder="Modelo do veiculo"/> <br/>
            <input type="int" placeholder="numero máximo de passageiros"/>
            <input type="" placeholder=""/>
            </div>
          </form> <br/>
          <Link to="/DashBoard">voltar</Link> 
        </div>
      );
  }
}


