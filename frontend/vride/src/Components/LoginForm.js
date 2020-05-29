//General imports.
import React, {useState, useContext} from 'react'
import {Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';

//Component imports.
import { AuthContext } from '../Contexts/AuthContext';

//Functional component - LoginForm.
export default function LoginForm() {

    //Hooks.
    const [empId, setEmpId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const[keepMeSignedIn, setKeepMeSignedIn] = useState(false);

    //Context destructuring.
    const { login } = useContext(AuthContext);

    //Function to handle form submission.
    const submitted = (e) =>
    {
        const details = {
            empId : empId,
            password: password,
            keepMeSignedIn: keepMeSignedIn
        }
        login(details);
    }

    return (
       
        <Card style = { {width: "20rem", "marginTop": "10px"} } bg = "dark">
            <Card.Body>
                <Card.Title style = { {color: "white"} }>
                    Login to your account
                </Card.Title>
                <Card.Body>
                    <Form  >
                        <Form.Control type = "text" value = { empId } placeholder = "Employee ID"
                            onChange = {(e) => {
                                setEmpId(e.target.value);
                            }}
                        />
                        <br/>
                        <Form.Control type = "password" value = { password } placeholder = "Your password"
                            onChange = {(e) => {
                                setPassword(e.target.value);
                            }}/>
                        <br/>
                        <Form.Check type = "checkbox" label = "Keep me signed in." style = { {color: "white"} }
                            onChange = {(e) => {
                                setKeepMeSignedIn(e.target.checked);
                            }}
                        />
                        <br/>
                        <Button variant = "primary" onClick = { submitted }>Log In</Button><br/>
                        <h6 style = { {color:"skyblue", marginTop: "25px", padding:"5px", cursor: "pointer"} }>Not a registered user? Sign Up!</h6>
                        <h6 style = { {color:"red", marginTop: "25px", padding:"5px"} }>{ errorMessage }</h6>
                    </Form>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}
