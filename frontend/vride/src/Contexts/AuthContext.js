import React,  { Component, createContext } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

export default class AuthContextProvider extends Component {

    state = {
        isLoggedIn: false,
        employeeID : 2,
        firstname: 'Vishal',
        errorMessage: 'NaN'
    }

    setErrorMessage = (msg) =>
    {
        this.setState({...this.state, errorMessage: msg})
    }

    componentDidMount()
    {
        var emp = localStorage.getItem('empid');
        var fn = localStorage.getItem('firstname');
        if(!(emp === "NONE"))
        {
            //console.log("Request sent");
            axios.post("http://localhost:8080/checksignin", {
                empid: emp,
                firstname: fn
            }).then(isLoggedIn => {
                
                if(isLoggedIn)
                {
                    this.setState({
                        isLoggedIn: true,
                        employeeID: localStorage.getItem('empid'),
                        firstName: localStorage.getItem('firstname'),
                        errorMessage: 'NaN'
                    })
                }
                else
                {
                    console.log("No session found");
                    this.setState(
                        {
                            isLoggedIn: false
                        }
                    )
                }
            })
        }
    }

    login = (details) =>
    {
        const baseURL = "http://localhost:8080/login"
        const idParam = details.empId;
        const passwordParam = details.password;
        const keepMeSignedIn = details.keepMeSignedIn;
        axios.post(baseURL, {
            id: idParam,
            password: passwordParam
          })
          .then(res => {
            if(res.data === "SUCCESS")
            {
                this.setState({
                    isLoggedIn: true,
                    employeeID: details.empId,
                    firstname: "Vishal",
                    errorMessage: "NONE"
                });
                if(keepMeSignedIn)
                {
                    console.log("Keep me signed in");
                    localStorage.setItem('empid', this.state.employeeID);
                    localStorage.setItem('firstname', this.state.firstname);
                }
            }
            else
            {
                this.setErrorMessage("Error logging in! Please check your Employee ID and Password");
            }
          })
    }

    signOut = (user) => {

        axios.post("http://localhost:8080/signout", {
            empid: user.empid,
            firstname: user.firstname
        }).then(res => {
            if(res.data === "SUCCESS")
            {
                localStorage.setItem('empid', null);
                localStorage.setItem('firstname',null);
                this.setState({
                    isLoggedIn: false,
                    empid: "NONE",
                    firstname: "NONE",
                    errorMessage: "NaN"
                })
            }
            else
            {
                console.log("FAILURE");
            }
        })
    }



    render() {
        return (
           <AuthContext.Provider value = {{...this.state, login: this.login, signOut: this.signOut}}>
               { this.props.children }
           </AuthContext.Provider>
        )
    }
}
