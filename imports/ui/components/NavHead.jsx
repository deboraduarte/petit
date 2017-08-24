import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Pets } from '../../api/pets';

import User from './Users';

import './App';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem'; 
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
 import MenuItem from 'react-bootstrap/lib/MenuItem';   

 export default class NavHead extends Component{
    logout(e){
        e.preventDefault();
        Meteor.logout();
        browserHistory.push('login');
    }
  
    render(){
        return(
         
              <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        #Nome
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
               <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="#"  onClick={this.logout}>
                            Logout
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           )
    }
}
