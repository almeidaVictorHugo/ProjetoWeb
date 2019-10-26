import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import { Container } from './styles';

export default class Rota extends Component {
    EditarRota(){

    }

    render() {
      return(
        <div>
          <form>
          <div>
            <h1>Editar rota</h1>

            <div className="form-group">
              <!-- Tornar invisivel
              <label for="nome">Nome da rota</label> -->
              <input name="nome" placeholder="Nome" />
            </div>
            <div className="form-group">
              <label>Veículo</label>
              <select>
                <option value="veiculo1">Kombi Volkswagen 1968</option>
              </select>
            </div>

            <div className="form-group">
              <!-- Tornar invisivel
              <label for="origem">Origem</label> -->
              <input name="origem" placeholder="Origem" />
            </div>

            <div className="form-group">
              <!-- Tornar invisivel
              <label for="destino">Destino</label> -->
              <input name="destino" placeholder="Destino" />
            </div>

          </div>
          </form>

          <Link to="/DashBoard">voltar</Link>
        </div>
      );
  }
}
