import React, {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function LoginForm() {

    const [empId, setEmpId] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const submitted = (e) =>
    {
        //http://localhost:8080/login?id=i&password=password007
        const baseURL = "http://localhost:8080/login"
        const idParam = empId;
        const passwordParam = password;

        const requestURL = baseURL + "?id=" + idParam + "&password=" + passwordParam; 
        axios.post(requestURL, {
            id: idParam,
            password: passwordParam
          })
          .then(res => {
            if(res.data === "SUCCESS")
            {
                setErrorMessage("SUCCESS");
            }
            else
            {
                setErrorMessage("Error logging in! Please check your Employee ID and Password");
            }
          })
    }

    return (
       
        <Card style = {{width: "20rem", "marginTop": "10px"}} bg = "dark">
                    <Card.Body>
                        <Card.Title style = {{color: "white"}}>
                            Login to your account
                        </Card.Title>
                        <Card.Body>
                            <Form  >
                                <Form.Control type="text" value = {empId} placeholder="Employee ID"
                                    onChange = {(e) => {
                                        setEmpId(e.target.value);
                                    }}
                                />
                                <br/>
                                <Form.Control type="password" value = {password} placeholder="Your password"
                                    onChange = {(e) => {
                                        setPassword(e.target.value);
                                    }}/>
                                <br/>
                                <Form.Check type="checkbox" label="Keep me signed in." style = {{color: "white"}}/>
                                <br/>
                                <Button variant="light" onClick = {submitted} >Log In</Button> <br/>
                                <h6 style = {{color:"red", marginTop: "25px", padding:"5px"}}>{errorMessage}</h6>
                            </Form>
                        </Card.Body>
                    </Card.Body>
                </Card>
    )
}
