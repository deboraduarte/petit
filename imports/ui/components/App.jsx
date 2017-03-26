import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Dashboard from './Dashboard';
import User from './Users';

export default class App extends Component{
   
    constructor(props){
        super(props);
        this.state = this.getMeteorData();
        this.logout = this.logout.bind(this);
    }
    
    getMeteorData(){
        return {
            isAuthenticated: Meteor.userId() !== null
        }; 
        
    }
    componentWillMount(){
        if(!this.state.isAuthenticated){
            browserHistory.push('/login');
            
        }
        
    }
    
    componentDidUpdate(prevProps, prevState){
        if (!this.state.isAuthenticated) {
            browserHistory.push('/login');
        }
    }
    
    logout(e){
        e.preventDefault();
        Meteor.logout();
        browserHistory.push('login');
    }
        
    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-static-top">
                  <div className="container">
                    <div className="navbar-header">
                      <a className="navbar-brand" href="#"></a>
                      <span>
                        <User />
                      </span>
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
                <Dashboard />
              </div>
        );
    }
}

