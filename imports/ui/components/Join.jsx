import React, {Component, PropTypes} from 'react';
import { browserHistory, Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base';;

import { Pager,
        Form,
        FormControl,
        FormGroup,
        Col,
        ControlLabel,
        Button,
        FieldGroup }  from 'react-bootstrap';


export default class Join extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: '',
            email: '',
            password: '',
            passwordConfirm: '',
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
            passwordConfirm,
        } = this.state;
        if(password === passwordConfirm){
            Accounts.createUser({email: email, username: name, password: password, type: type}, (err) => {
                if (err){
                    this.setState({
                        error: err.reason
                    });
                } else {
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
            });
        } else {
            this.setState({
                error: "As senhas não são iguais"
            })
        }

    }

    render(){
        const error = this.state.error;
        return(
            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <Pager>
                        <Pager.Item previous href="/">&larr;</Pager.Item>
                    </Pager>
                    <Col
                    className="logo-header"
                    sm={6}
                    md={12}
                    lg={8}
                    xs={8}
                    lgOffset={4}
                    smOffset={2}
                    xsOffset={3}>

                    </Col>

                   <FormGroup controlId="name">
                        <Col
                        componentClass={ControlLabel}
                        sm={2}
                        md={2}
                        lg={2}
                        xs={2}
                        smOffset={1}
                        xsOffset={1}
                        bsSize="lg">
                            Nome:
                        </Col>
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={8}
                        smOffset={1}>
                            <FormControl
                            type="text"
                            placeholder="Nome"
                            name="name"
                            bsSize="lg"
                            value={this.state.name}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
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
                      <FormGroup controlId="login-senha2">
                        <Col
                        componentClass={ControlLabel}
                        sm={2}
                        md={2}
                        lg={2}
                        xs={2}
                        smOffset={1}
                        xsOffset={1}>
                            Repita a Senha
                        </Col>
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={8}
                        smOffset={1}>
                            <FormControl
                            type="password"
                            placeholder="Confirme a Senha"
                            name="passwordConfirm"
                            value={this.state.passwordConfirm}
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
                        <Button bsStyle="primary" bsSize="large" type="submit">Finalizar Cadastro</Button>
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
