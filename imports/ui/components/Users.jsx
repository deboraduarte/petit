import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class User extends Component {
    constructor(props){
        super(props);
        this.state = this.getMeteorData();
    }
    
    getMeteorData(){
        return {
            currentUser: Meteor.user(),
        };
    }
    
  render() {
    return (
      <div>
        {this.state.currentUser.username}
      </div>
    )
  }
}

User.contextTypes = {
    router: React.PropTypes.object.isRequired,
}