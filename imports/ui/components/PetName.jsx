import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pets } from '../../api/pets';

export default class PetName extends Component{
    
    
    render(){
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h1 className="panel-title">{this.props.pet.petname}</h1>
                </div>
                <div>
                    <ul className="panel-body">
                        <li>{this.props.pet.specie}</li>
                        <li>Raça{this.props.pet.breed}</li>
                        <li>Pelo {this.props.pet.color}</li>
                        <li>Olhos {this.props.pet.eyecolor}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

PetName.propTypes = {
  pet: PropTypes.object.isRequired,
};