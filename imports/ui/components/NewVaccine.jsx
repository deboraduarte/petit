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

class NewVaccine extends Component{
    constructor(props){
        super(props);
        this.state = {
            err: '',
            petid: '',
            date: '',
            vaccinename: '',
            period: '',
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
        let {
            petid,
            date,
            birthdate,
            vaccinename,
            period,
        } = this.state;
        this.setState({error: "Salvo com Sucesso"});
        const data = {
            petid,
            date,
            birthdate,
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
                <h1 className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">Nova Vacina</h1>
                <form onSubmit={this.handleSubmit.bind(this)} className="login-form col-xs-12 col-sm-12 col-md-6 col-lg-6  col-lg-offset-3 col-md-offset-3">
                        <select className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" name="petname" value={this.state.petid} onChange={this.handleInputChange.bind(this)}>
                            {this.renderPetOptions()}
                        </select>
                    <input className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" type="date" name="date" value={this.state.date} onChange={this.handleInputChange.bind(this)}/>
                    <input className="form-control col-xs-12 col-sm-12 col-md-6 col-lg-6" type="text" name="vaccinename" value={this.state.vaccinename} onChange={this.handleInputChange.bind(this)} placeholder="Vacina" />
                        <input className="form-control-number col-xs-12 col-sm-12 col-md-6 col-lg-6" type="number" name="period" value={this.state.period} onChange={this.handleInputChange.bind(this)} placeholder="Periodicidade" />
                       <span className="form-control-label col-xs-1 col-sm-1 col-md-2 col-lg-2">Meses</span>
                    <button type="submit" className="btn btn-primary btn-lg col-xs-12 col-sm-12 col-md-12 col-xl-12 "> Salvar </button>
                </form>
                <div className="alert fade in ">{error}</div>
            </div>
        )
    }

}

export default createContainer(() => {
  return {
    pets: Pets.find({},{currentUser: Meteor.userId()}).fetch(),
  };
}, NewVaccine);