import React, { Component } from 'react';
import { browserHistory, Link} from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import NavHead from './NavHead';

import { Pets } from '../../api/pets';
import { Vaccine } from '../../api/vaccine';
import User from './Users';
import PetOptions from './PetOptions';
import './App';

import { Form,
        FormGroup,
        FormControl,
        Col,
        ControlLabel,
        Button,
        FieldGroup,
        Pager }  from 'react-bootstrap/lib/Pager';

class NewVaccine extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: '',
            petid: '',
            date: '',
            vaccinename: '',
            period: '',
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
            petid,
            date,
            vaccinename,
            period,
        } = this.state;
        this.setState({error: "Salvo com Sucesso"});
        const data = {
            petid,
            date,
            vaccinename,
            period,
        };
        console.log(data);
        Vaccine.insert(data, (err) => {
            if (err){
                this.setState({
                    error: err.reason,
                });
            } else {
                browserHistory.push('/');
            }
        });
    }

    renderPetOptions(){
         return this.props.pets.map((pet) => (
                <PetOptions key={pet._id} pet={pet} />

        ));
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
                <h1 className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">Nova Vacina</h1>
                <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formControlsSelect">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                        <ControlLabel>Escolha o Pet</ControlLabel>
                            <FormControl
                            componentClass="select"
                            type="select"
                            placeholder="Perdido"
                            name="petid"
                            bsSize="lg"
                            value={this.state.petid}
                            onChange={this.handleChange.bind(this)} >
                                {this.renderPetOptions()}
                            </FormControl>
                        </Col>
                    </FormGroup>
                        <FormGroup controlId="date">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            type="date"
                            placeholder="Data"
                            name="date"
                            bsSize="lg"
                            value={this.state.date}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                        </FormGroup>
                        <FormGroup controlId="vaccinename">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            type="text"
                            placeholder="Vacina"
                            name="vaccinename"
                            bsSize="lg"
                            value={this.state.vaccinename}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>
                        <FormGroup controlId="period">
                        <Col
                        sm={10}
                        md={8}
                        lg={8}
                        xs={10}
                        smOffset={1}
                        xsOffset={1}>
                            <FormControl
                            type="number"
                            placeholder="Periodicidade"
                            name="period"
                            bsSize="lg"
                            value={this.state.period}
                            onChange={this.handleChange.bind(this)} />
                        </Col>
                    </FormGroup>


                  <Col
                    sm={10}
                    md={10}
                    lg={8}
                    lgOffset={3}
                    smOffset={1}
                    >

                        <Button bsStyle="primary" bsSize="large" type="submit">Registrar Vacina</Button>
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

export default createContainer(() => {
  return {
    pets: Pets.find({},{currentUser: Meteor.userId()}).fetch(),
  };
}, NewVaccine);
