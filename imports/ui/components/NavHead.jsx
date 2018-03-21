import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Pets } from '../../api/pets';

import User from './Users';

import './App';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';   

 export default class NavHead extends Component{
    logout(e){
        e.preventDefault();
        Meteor.logout();
        browserHistory.push('login');
    }

    render(){
        const currentUser = Meteor.user().username;
        return(

              <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        g{currentUser}
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
