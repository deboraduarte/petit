import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Pets } from '../../api/pets';

export default class PetOptions extends Component{
    
    
    render(){
        return(
            <option value={this.props.pet._id}>{this.props.pet.petname}</option>
            
        );
    }
}

PetOptions.propTypes = {
  pet: PropTypes.object.isRequired,
};