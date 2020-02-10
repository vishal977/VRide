import React, { Component } from 'react'
import { Card,Form, Button } from 'react-bootstrap';

export default class LoginForm extends Component {

    state = 
    {
        employeeID: null,
        password: null
    }

    render() {
        return (
                <Card style = {{width: "20rem", "margin-top": "10px"}} bg = "dark">
                    <Card.Body>
                        <Card.Title style = {{color: "white"}}>
                            Login to your account
                        </Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Control type="text" placeholder="Employee ID" />
                                <br/>
                                <Form.Control type="password" placeholder="Your password"/>
                                <br/>
                                <Form.Check type="checkbox" label="Keep me signed in." style = {{color: "white"}}/>
                                <br/>
                                <Button variant="light" type="submit">Log In</Button>
                            </Form>
                        </Card.Body>
                    </Card.Body>
                </Card>
        )
    }
}
