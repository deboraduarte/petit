import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { Pets } from '../../api/pets';

import NewPet from './NewPet';
import PetName from'./PetName';

import './App';

import Col from 'react-bootstrap/lib/Col';
import Button  from 'react-bootstrap/lib/Button';
import Glyphicon  from 'react-bootstrap/lib/Glyphicon';

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
            <div>     
                   
                <Col
                    sm={12}
                    md={10}
                    lg={8}
                    lgOffset={3}
                    >
                     {this.renderPets()}
                        <a href="/newpet">
                            <Button bsStyle="defautl" bsSize="large" type="submit" className="dashboard">
                                <Glyphicon glyph="plus" />
                                Adiconar Pet
                            </Button>
                        </a>
                    </Col>
                      <Col
                    sm={12}
                    md={10}
                    lg={8}
                    lgOffset={3}
                    >
                        <a href="/newvaccine">
                            <Button bsStyle="defautl" bsSize="large" type="submit" className="dashboard">
                                <Glyphicon glyph="plus" />
                                Adiconar Vacina
                            </Button>
                        </a>
                    </Col>
               
            </div>
        )
    }
}

export default createContainer(() => {
  return {
    pets: Pets.find({currentUser: Meteor.userId()}).fetch(),
    
  };
}, Dashboard);
