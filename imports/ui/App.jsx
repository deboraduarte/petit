import React, { Component } from 'react';

export default class App extends Component{
    render(){
        return(
            <div className="container">
                <header itemscope itemtype="http://schema.org/Organization">
                    <div className="logo-header col-xs-10 col-sm-10 col-lg-6 col-md-6 col-md-offset-4 col-lg-offset-4 col-sm-offset-3 col-xs-offset-3" itemprop="logo"></div>
                </header>
                
                <form action="submit" className="login-form col-xs-12 col-sm-12 col-md-6 col-xl-6  col-lg-offset-3 col-md-offset-3" >
                    <input type="text" className="form-control col-xs-12 col-sm-12 col-md-6 col-xl-6" value="E-mail" />
                    <input type="password" className="form-control col-xs-12 col-sm-12 col-md-6 col-xl-6" value="123456" />
                    <button type="submit" className="btn btn-primary btn-lg col-xs-12 col-sm-12 col-md-6 col-xl-6 col-md-offset-3 col-lg-offset-3"> Entrar </button>
                    <a href="#" className="signup-link col-xs-12 col-sm-12 col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3"> Não é Cadastrado? Crie uma conta agora! </a>
                </form>
            </div>
        );
    }
}