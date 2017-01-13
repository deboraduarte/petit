import react, { Component } from 'react';
import AccountsUIWrapper from './accountsUIWrapper.jsx';

class App extends Component{
    render(){
        return(
            <div cassName="container">
                <span> Teste </span>
                <AccountsUIWrapper/>
            </div>
        );
    }
}