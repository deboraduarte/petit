import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { Pets } from '../../api/pets';

import NewPet from './NewPet';
import PetName from'./PetName';

import './App';

class Dashboard extends Component{
    renderPets(){
         return this.props.pets.map((pet) => (
            <div className="container col-md-3 col-lg-3 col-sm-12 col-xs-12">
                <PetName key={pet._id} pet={pet} />
            </div>
        ));
    }
    
    render(){
        return(
            <div className="container">     
                    {this.renderPets()}
            
                <a href="/newpet" className="col-md-2 col-lg-2 col-sm-12 col-xs-12">
                    <button  className="btn btn-lg col-md-12 col-lg-12 col-sm-12 col-xs-12" aria-label="Left Align">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        Novo Pet
                    </button>
                    
                </a>
                <a href="/newvaccine" className="col-md-2 col-lg-2 col-sm-12 col-xs-12">
                    <button  className="btn btn-lg col-md-12 col-lg-12 col-sm-12 col-xs-12" aria-label="Left Align">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        Nova Vacina
                    </button>
                </a>
            </div>
        )
    }
}

export default createContainer(() => {
  return {
    pets: Pets.find({},{currentUser: Meteor.userId()}).fetch(),
  };
}, Dashboard);
