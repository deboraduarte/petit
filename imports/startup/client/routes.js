import React from 'react';
import {
    Router, 
    Route, 
    IndexRoute, 
    browserHistory 
    } from 'react-router';
import { render } from 'react-dom';

import App from '../../ui/components/App.jsx';
import Join from '../../ui/components/Join.jsx';
import Login from '../../ui/components/Login.jsx';
import Dashboard from '../../ui/components/Dashboard.jsx';
import User from '../../ui/components/Users.jsx';
import NewPet from '../../ui/components/NewPet.jsx';

Meteor.startup(() => {
    render(
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="join" component={Join} />
        <Route path="login" component={Login} />
        <Route path="dashboard" component={Dashboard} />
        <Route path="user" component={User} />
        <Route path="newpet" component={NewPet} />
    </Router>, 
      document.getElementById('render-target')
    );
});