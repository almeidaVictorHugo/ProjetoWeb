import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from './Componentes/Login';
import Cadastro from './Componentes/Cadastro';
import Dashboard from './Componentes/Dashboard';

ReactDOM.render(
    <BrowserRouter> 
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
serviceWorker.unregister();


