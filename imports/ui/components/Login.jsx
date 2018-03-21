import React, {Component} from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import './App';
import { FieldGroup, FormGroup, Form, FormControl, Col, ControlLabel, Button }  from 'react-bootstrap';



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
                    ssm={6}
                    md={12}
                    lg={8}
                    xs={8}
                    lgOffset={4}
                    smOffset={2}
                    xsOffset={3}>
                    </Col>
                    <FormGroup controlId="login-email">
                        <Col
                        componentClass={ControlLabel}
                        sm={2}
                        md={2}
                        lg={2}
                        xs={2}
                        smOffset={1}
                        xsOffset={1}
                        bsSize="lg">
                            Email
                        </Col>
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={8}
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
                       sm={2}
                        md={2}
                        lg={2}
                        xs={2}
                        smOffset={1}
                        xsOffset={1}>
                            Senha
                        </Col>
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={8}
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
                    xs={8}
                    lg={8}
                    lgOffset={3}
                    smOffset={1}>
                        <a href="join">
                            <Button bsStyle="link"> Não é Cadastrado? Crie uma conta agora!</Button>
                        </a>

                    </Col>
                    { error.length > 0 ?
                    <Col
                    className="alert alert-danger fade in"
                    sm={10}
                    xs={10}
                    md={10}
                    lg={8}
                    lgOffset={3}
                    smOffset={1}>
                    {error}
                    </Col>
                    :''}
                 </Form>
        );
    }
}
