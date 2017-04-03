import React, { Component } from 'react';
import { browserHistory, Link} fro  m 'react-router';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import './App';
export default class User extends Component {
    constructor(props){
        super(props);
        this.state = {user: 'teste'};
    }
    
   componentDidMount(){
        this.setState({user: Meteor.users.findOne(Meteor.userId)});
    }
    componentWillUpdate(prevState){
        this.setState({user: Meteor.users.findOne(Meteor.userId)});
    }
    componentDidUpdate(prevProps, prevState){
        this.setState({user: Meteor.users.findOne(Meteor.userId)});
    }
    
    
  render() {
    return (
      <div>
        {this.state.user.username}
      </div>
    )
  }
}
