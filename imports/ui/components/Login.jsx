import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import './App';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Col from 'react-bootstrap/lib/Col';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button  from 'react-bootstrap/lib/Button';
import FieldGroup  from 'react-bootstrap/lib/Button';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: '',
            email: '',
            password: '',
        };
    }
      
     handleChange(event) {
        const target = event.target;
        const value = event.target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }
    handleSubmit(e){
        e.preventDefault();
        let {
            email,
            password,
        } = this.state;
    
        const data = {
            email,
            password,
        };
        Meteor.loginWithPassword(email, password, (err) =>{
            if(err){
                this.setState({
                    error: err.reason
                });
            } else{
                browserHistory.push('/');
            
            }
        });
    }

    
    render(){
        const error = this.state.error;
        return(              
                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <Col
                    className="logo-header"
                    sm={8}
                    md={12}
                    lg={8}
                    lgOffset={4}
                    smOffset={3 }>
                    </Col>            
                    <FormGroup controlId="login-email">
                        <Col 
                        componentClass={ControlLabel} 
                        sm={3}
                        md={2}
                        lg={2}
                        xs={2}
                        bsSize="lg">
                            Email
                        </Col>
                        <Col 
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}>  
                            <FormControl 
                            type="email" 
                            placeholder="Email" 
                            name="email" 
                            bsSize="lg"
                            value={this.state.email} 
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="login-senha">
                        <Col 
                        componentClass={ControlLabel} 
                        sm={3}
                        md={2}
                        lg={2}
                        xs={2}>
                            Senha
                        </Col>
                        <Col 
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}>   
                            <FormControl 
                            type="password" 
                            placeholder="Senha" 
                            name="password" 
                            value={this.state.password} 
                            onChange={this.handleChange.bind(this)}
                            bsSize="lg"/>
                        </Col>
                    </FormGroup>
                    <Col
                    sm={10}
                    md={10}
                    lg={8}
                    lgOffset={3}
                    smOffset={1}
                    >
                        <Button bsStyle="primary" bsSize="large" type="submit">Entrar</Button>
                    </Col>
                    <Col
                    sm={10}
                    md={10}
                    lg={10}
                    lgOffset={3}
                    smOffset={1}>
                        <a href="join">
                            <Button bsStyle="link"> Não é Cadastrado? Crie uma conta agora!</Button>
                        </a>
               
                    </Col>
                 </Form>
        );
    }
}