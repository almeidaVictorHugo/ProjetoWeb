import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Index from './Componentes/index';
import Login from './Componentes/Login';
import Cadastro from './Componentes/Cadastro';
import Dash from './Componentes/DashBoard';
import Transporte from './Componentes/CadastroTransporte';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route exat path="/Login" component={Login}/>
            <Route exact path="/Cadastro" component={Cadastro}/>
            <Route exact path="/DashBoard" component={Dash}/>
            <Route exact path="/CadastroTransporte" component={Transporte}/>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')
);

serviceWorker.unregister();
