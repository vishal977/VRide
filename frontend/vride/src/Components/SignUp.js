//General imports.
import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap';


//Functional component - SignUp.
export default function SignUp() {

    //Hooks.
    const [empId, setEmpId] = useState("");
    const [password, setPassword] = useState("");
    const [passRepeat, setPassRepeat] = useState("");
    const[imageSelect, changeImageSelect] = useState("");

    return (
       <Card style = { {width: "20rem", "marginTop": "10px"} } bg = "dark">
            <Card.Body>
                <Card.Title style = { {color: "white"} }>
                    Sign Up
                </Card.Title>
                <Card.Body>
                    <Form  >
                        <Form.Control type = "text" value = { empId } placeholder = "Employee ID"
                            onChange = {(e) => {
                                setEmpId(e.target.value);
                            }}
                        />
                        <br/>
                        <Form.Control type = "password" value = { password } placeholder = "Choose password"
                            onChange = {(e) => {
                                setPassword(e.target.value);
                            }}/>
                        <br/>
                        <Form.Control type = "password2" value = { passRepeat } placeholder = "Repeat password"
                        onChange = {(e) => {
                            setPassRepeat(e.target.value);
                        }}/>
                        <br/>
                        <Form.Group style = { {"color" : "skyblue"} }>
                            <Form.Label >Upload attested image for KYC</Form.Label>
                            <Form.Control type = "file" onChange = { changeImageSelect }/>
                        </Form.Group>
                        <br/>
                        <Button variant = "primary">Sign me up!</Button> <br/>
                        <h6 style = { {color:"red", marginTop: "25px", padding:"5px"} }>{}</h6>
                    </Form>
                </Card.Body>
            </Card.Body>
        </Card>
    )
}
