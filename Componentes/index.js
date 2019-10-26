import React from 'react';
import {Link} from 'react-router-dom';

function index(){
    return(
        <div>
           <h1>Omni</h1>
           <h2>Facilite sua busca pelo meio de transporte ideal.</h2>
           <h2>Divulge seu transporte e aumente o alcance do seu negócio.</h2>
           <Link to="/Login"><button>Logar</button></Link> <br/>
           <Link to="/Cadastro"><button>Cadastrar-se</button></Link>
        </div>
    );
}

export default index;