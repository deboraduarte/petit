import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Dashboard from './Dashboard';
import User from './Users';
import NavHead from './NavHead';

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
                <NavHead />
                <Dashboard />
              </div>
        );
    }
}

