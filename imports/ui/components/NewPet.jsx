import React, { Component } from 'react';
import { browserHistory, Link} from 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import NavHead from './NavHead';

import { Pets } from '../../api/pets';
import User from './Users';
import './App';

export default class NewPet extends Component{
    constructor(props){
        super(props);
        this.state = {
            err: '',
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
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
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
                <h1 className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">Novo Pet</h1>
                <form onSubmit={this.handleSubmit.bind(this)} className="login-form col-xs-12 col-sm-12 col-md-6 col-lg-6  col-lg-offset-3 col-md-offset-3">
                    <input className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" type="text" name="petname" value={this.state.petname} onChange={this.handleInputChange.bind(this)} placeholder="Nome do seu Pet" />
                    <input className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" type="text" name="breed" value={this.state.breed} onChange={this.handleInputChange.bind(this)} placeholder="Raça" />
                    <select className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" name="specie" value={this.state.specie} onChange={this.handleInputChange.bind(this)}>
                        <option value="cachorro">Cachorro</option>
                        <option value="gato">Gato</option>
                    </select>
                    <input className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" type="text" name="color" value={this.state.color} onChange={this.handleInputChange.bind(this)} placeholder="Cor do Pelo" />
                    <input className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" type="text" name="eyecolor" value={this.state.eyecolor} onChange={this.handleInputChange.bind(this)} placeholder="Cor dos Olhos" />
                    <select className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" name="sex" value={this.state.sex} onChange={this.handleInputChange.bind(this)}>
                        <option value="macho">Macho</option>
                        <option value="femea">Fêmea</option>
                    </select>
                    <input className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" type="date" name="birthdate" value={this.state.birthdate} onChange={this.handleInputChange.bind(this)}/>
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                        <input className="form-control-checkbox col-xs-1 col-sm-1 col-md-2 col-lg-2" id="castrated" type="checkbox" name="castrated" checked={this.state.castrated} onChange={this.handleInputChange.bind(this)} />
                        <label className="form-control-label col-xs-1 col-sm-1 col-md-2 col-lg-2" for="castrated">Castrado</label>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <input className="form-control-checkbox col-xs-1 col-sm-1 col-md-2 col-lg-2" type="checkbox" id="adopted" name="adopted" checked={this.state.adopted} onChange={this.handleInputChange.bind(this)}/>
                        <label className="form-control-label col-xs-1 col-sm-1 col-md-2 col-lg-2">Adotado</label>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                       <input className="form-control-checkbox col-xs-1 col-sm-1 col-md-2 col-lg-2" id="lost" type="checkbox" name="lost" checked={this.state.lost} onChange={this.handleInputChange.bind(this)}/>
                       <label className="form-control-label col-xs-1 col-sm-1 col-md-2 col-lg-2">Perdido</label>  
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg col-xs-12 col-sm-12 col-md-12 col-xl-12 "> Cadastrar Novo Pet </button>
                </form>
                <div className="alert fade in ">{error}</div>
            </div>
        )
    }

}