import React, {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap';

export default function LoginForm() {

    const [empId, setEmpId] = useState("");
    const [password, setPassword] = useState("");

    const submitted = (e) =>
    {
        
    }

    return (
       
        <Card style = {{width: "20rem", "margin-top": "10px"}} bg = "dark">
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
                                <Button variant="light" onClick = {submitted} >Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card.Body>
                </Card>
    )
}
