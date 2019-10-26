import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../ConexaoDb.js';

class Cadastrar extends Component{
    constructor(props){
      super(props);
      this.state = { 
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      dataAniver: '',
      sexo: '',
      };
    
      this.cadastrar = this.cadastrar.bind(this);
      
      //firebase.auth().signOut();
      
      firebase.auth().onAuthStateChanged((user) => {
        if(user){
          firebase.database().ref('usuario').child(user.uid).set({
            nome:this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            dataAniver: this.state.dataAniver,
            sexo: this.state.sexo,
          })
          .then(()=>{
            this.setState({
              nome:'',
              email:'',
              senha:''
            })
          });
        }
      });
      
    }
    
    cadastrar(e){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then((success) => {
            alert('Cadastrado com sucesso!');
        })
        .catch((error) => {
            if(error.code === 'auth/invalid-email'){
                alert('E-mail inválido');
            }
            if(error.code === 'auth/weak-password'){
                alert('Senha fraca')
            }
        })
        e.preventDefault();
    }

    render(){
        return(
            <div className="cadastro">
                <form onSubmit={this.cadastrar}>
                <h1>Cadastro</h1>
                <div className="form-group">
                    <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome:e.target.value})}/>
                </div>
                <div className="form-group">
                    <input type="email" placeholder="E-mail" onChange={(e) => this.setState({email:e.target.value})}/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha:e.target.value})}/> <br/>
                    <input type="password" placeholder="Confirmar senha" onChange={(e) => this.setState({confirmarSenha:e.target.value})}/>
                </div><br/>
                <div className="form-group">
                    Data de nascimento: <br/>
                    <input type="date" onChange={(e) => this.setState({dataAniver: e.target.value})}/>
                </div>
                <div className="form-group">
                    Sexo:
                    <input type="radio" name="sexo" value="Masculino" onChange={(e) => this.setState({sexo: e.target.value})}/> Masculino <input type="radio" name="sexo" value="Feminino" onChange={(e) => this.setState({sexo: e.target.value})}/> Feminino
                </div> <br/>
                
                <button type="submit">Cadastrar</button>
                </form> <br/>
                <Link to="/Login">Já Possui uma conta?</Link>
            </div>
        );
    }
}

export default Cadastrar;