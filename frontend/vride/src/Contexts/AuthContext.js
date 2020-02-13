import React,  { Component, createContext } from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {

    state = {
        isLoggedIn: true,
        employeeID : 1,
        firstname: 'ABC'
    }
    render() {
        return (
           <AuthContext.Provider value = {{...this.state}}>
               { this.props.children }
           </AuthContext.Provider>
        )
    }
}
