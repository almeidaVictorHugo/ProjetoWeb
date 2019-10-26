import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { Container } from './styles';

class DashBoard extends Component {
  render(){
    return(
        <div>
            <Link to='/'>HOME</Link> <br/>
            <Link to='/CadastroTransporte'>Cadastrar novo Transporte</Link>
            <Link to='/Rota'>Criar nova rota</Link>
        </div>
    );
  }
}

export default DashBoard;
