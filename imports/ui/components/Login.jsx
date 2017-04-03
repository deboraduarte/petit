import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import './App';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let password = document.getElementById('login-password').value;
        Meteor.loginWithPassword(email, password, (err) =>{
            if(err){
                this.setState({
                    error: err.reason
                });
            } else{
                browserHistory.push('/');
            
            }
        })
    }
    
    render(){
        const error = this.state.error;
        return(
            <div className="container">
                <header itemscope itemtype="http://schema.org/Organization">
                    <div className="logo-header col-xs-10 col-sm-10 col-lg-6 col-md-6 col-md-offset-4 col-lg-offset-4 col-sm-offset-3 col-xs-offset-3" itemprop="logo"></div>
                </header>
                
                { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
                
                <form  onSubmit={this.handleSubmit} className="login-form col-xs-12 col-sm-12 col-md-6 col-xl-6  col-lg-offset-3 col-md-offset-3" >
                    <input type="text" id="login-email" className="form-control col-xs-12 col-sm-12 col-md-6 col-xl-6" placeholder="E-mail" />
                    <input type="password" id="login-password" className="form-control col-xs-12 col-sm-12 col-md-6 col-xl-6" placeholder="123456" />
                    <button type="submit" className="btn btn-primary btn-lg col-xs-12 col-sm-12 col-md-12 col-xl-12"> Entrar </button>
                    <a href="join" className="signup-link col-xs-12 col-sm-12 col-lg-12 col-md-12"> Não é Cadastrado? Crie uma conta agora! </a>
                </form>
            </div>
        );
    }
}