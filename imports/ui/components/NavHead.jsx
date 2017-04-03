import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Pets } from '../../api/pets';

import User from './Users';

import './App';

 export default class NavHead extends Component{
    logout(e){
        e.preventDefault();
        Meteor.logout();
        browserHistory.push('login');
    }
  
    render(){
        return(
             <nav className="navbar navbar-default navbar-static-top">
                  <div className="container">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#"></a>
                      <ul className="nav navbar-nav navbar-left">
                        <li>
                          <a href="/">Home</a>
                        </li>
                      </ul>
                         
                    </div>
                    <div className="navbar-collapse">
                      <ul className="nav navbar-nav navbar-right">
                        <li>
                          <a href="#" onClick={this.logout}>Logout</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
        )
    }
}
