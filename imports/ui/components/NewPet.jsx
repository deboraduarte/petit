import React, { Component } from 'react';
import { browserHistory, Link} from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import NavHead from './NavHead';

import { Pets } from '../../api/pets';
import User from './Users';
import './App';
 
import { Form,
        FormGroup,
        FormControl,
        Col,
        ControlLabel,
        Button,
        FieldGroup,
        Pager }  from 'react-bootstrap';

export default class NewPet extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: '',
            petname: '',
            breed: '',
            specie: 'Cachorro',
            color: '',
            eyecolor: '',
            sex: 'macho',
            birthdate: '',
            castrated: true,
            adopted: true,
            lost: false,
            currentUser: Meteor.userId(),
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
        console.log(currentUser);
        let {
            petname,
            breed,
            birthdate,
            specie,
            color,
            sex,
            eyecolor,
            castrated,
            adopted,
            lost,
            currentUser,
        } = this.state;

        console.log(currentUser);
        this.setState({error: "Created"});
        const data = {
            petname,
            breed,
            birthdate,
            specie,
            color,
            eyecolor,
            sex,
            castrated,
            adopted,
            lost,
            currentUser,
        };
        console.log(data);
        Pets.insert(data, (err) => {
            if (err){
                this.setState({
                    error: err.reason,
                });
            } else {
                browserHistory.push('/');
            }
        });
    }

    render(){
        const error = this.state.error;
        const currentUser = Meteor.userId();
        return(
            <div>
                <NavHead />
                <Pager>
                    <Pager.Item previous href="/">&larr;</Pager.Item>
                </Pager>
                <h1 className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">Novo Pet</h1>
                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="petname">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            type="text"
                            placeholder="Nome do seu Pet"
                            name="petname"
                            bsSize="lg"
                            value={this.state.petname}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="breed">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            type="text"
                            placeholder="Raça"
                            name="breed"
                            bsSize="lg"
                            value={this.state.breed}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                        <ControlLabel>Espécie</ControlLabel>
                            <FormControl
                            componentClass="select"
                            type="select"
                            placeholder="Espécie"
                            name="specie"
                            bsSize="lg"
                            value={this.state.specie}
                            onChange={this.handleChange.bind(this)} >
                            <option value="Gato">Gato</option>
                            <option value="Cachorro">Cachorro</option>
                            </FormControl>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="color">
                         <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            type="text"
                            placeholder="Cor do Pelo"
                            name="color"
                            bsSize="lg"
                            value={this.state.color}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="eyecolor">
                         <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            type="text"
                            placeholder="Cor dos Olhos"
                            name="eyecolor"
                            bsSize="lg"
                            value={this.state.eyecolor}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="eyecolor">
                         <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            type="text"
                            placeholder="Data de Nascimento"
                            name="birthdate"
                            bsSize="lg"
                            value={this.state.birthdate}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
                     <FormGroup controlId="formControlsSelect">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            componentClass="select"
                            type="select"
                            placeholder="Sex"
                            name="sex"
                            bsSize="lg"
                            value={this.state.sex}
                            onChange={this.handleChange.bind(this)} >
                            <option  defaultValue="Macho">Macho</option>
                            <option value="Femea">Fêmea</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                        <ControlLabel>Castrado</ControlLabel>
                            <FormControl
                            componentClass="select"
                            type="select"
                            placeholder="Castrado"
                            name="castrated"
                            bsSize="lg"
                            value={this.state.castrated}
                            onChange={this.handleChange.bind(this)} >
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                     <FormGroup controlId="formControlsSelect">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                        <ControlLabel>Adotado</ControlLabel>
                            <FormControl
                            componentClass="select"
                            type="select"
                            placeholder="Adotado"
                            name="adopted"
                            bsSize="lg"
                            value={this.state.adopted}
                            onChange={this.handleChange.bind(this)} >
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formControlsSelect">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                        <ControlLabel>Perdido</ControlLabel>
                            <FormControl
                            componentClass="select"
                            type="select"
                            placeholder="Perdido"
                            name="lost"
                            bsSize="lg"
                            value={this.state.adopted}
                            onChange={this.handleChange.bind(this)} >
                            <option value="sim">Sim</option>
                            <option value="não">Não</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <Col
                    sm={10}
                    md={10}
                    lg={8}
                    lgOffset={3}
                    smOffset={1}
                    >

                        <Button bsStyle="primary" bsSize="large" type="submit">Registrar Pet</Button>
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
            </div>
        )
    }

}
