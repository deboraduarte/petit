import React, {Component, PropTypes} from 'react';
import { browserHistory, Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Join extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        let name = document.getElementById("signup-name").value;
        let email = document.getElementById("signup-email").value;
        let password = document.getElementById("signup-password").value;
        let type = 'Default';
        this.setState({error: "teste"});
        Accounts.createUser({email: email, username: name, password: password, type: type}, (err) => {
            if (err){
                this.setState({
                    error: err.reason
                });
            } else {
                browserHistory.push('/login')
            }
        });
    }
    
    render(){
        const error = this.state.error;
        return(
            <div className='container'>
                <header itemscope itemtype="http://schema.org/Organization">
                    <span>Cadastre-se</span>
                </header>
                { error.length > 0 ?
                <div className="alert alert-danger fade in">{error}</div>
                :''}
                <form onSubmit={this.handleSubmit} id="login-form" className="login-form col-xs-12 col-sm-12 col-md-6 col-xl-6  col-lg-offset-3 col-md-offset-3" >
                    <input type="text" id="signup-name" className="form-control col-xs-12 col-sm-12 col-md-6 col-xl-6" placeholder="Nome" />
                    <input type="text" id="signup-email" className="form-control col-xs-12 col-sm-12 col-md-6 col-xl-6" placeholder="E-mail" />
                    <input type="password" id="signup-password" className="form-control col-xs-12 col-sm-12 col-md-6 col-xl-6" placeholder="123456" />
                    <button type="submit" className="btn btn-primary btn-lg col-xs-12 col-sm-12 col-md-6 col-xl-6 col-md-offset-3 col-lg-offset-3"> Entrar </button>
                    <a href="#" className="signup-link col-xs-12 col-sm-12 col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3"> Saiba mais sobre o Pet.it </a>
                </form>
            </div>
        );
    }
} 