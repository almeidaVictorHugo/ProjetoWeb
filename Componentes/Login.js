import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../ConexaoDb';

class Logar extends Component{
    constructor(props){
        super(props);
        this.State = {
            email: '',
            senha: ''
        }

    this.logar = this.logar.bind(this);
    
    }

    logar(e){ 
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(()=>{
            this.props.history.replace("/DashBoard");
        })
        .catch((error) =>  {
        alert(error.code);
        })
        e.preventDefault();
    }

    render(){
        return(
            <div className="login">
                <form onSubmit={this.logar}>
                <div>
                <h1>Login</h1>
                </div>
                <div className="form-group">
                <input type="email" placeholder="E-mail" onChange={(e) => this.setState({email:e.target.value})}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha:e.target.value})}/>
                </div> <br/>
                <button type='submit'>Login</button>
                </form> <br/>
                <Link to="/Cadastro">Não possui uma conta?</Link>
            </div>
        );
    }
}

export default Logar;
