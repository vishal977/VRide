//General imports.
import React, { useState } from 'react';
import { Row, Card, Col, Form, Button, } from 'react-bootstrap';

//Resource imports.
import { SELECT_DAY, SELECT_MONTH, SELECT_TOD } from '../Res/constants';

//Functional component - CreateCarpool.
export default function CreateCarpool() {

    //Hooks
    const[fromLocation, setFromLocation] = useState("");
    const[toLocation, setToLocation] = useState("");
    const[vehicle, setVehicle] = useState("");
    const[regno, setRegno] = useState("");
    const[noOfSeats, setNoOfSeats] = useState("");
    const[day, setDay] = useState("");
    const[month, setMonth] = useState("");
    const[tod, setTod] = useState("");

    //Error message hook. 
    const[errorMessage, setErrorMessage] = useState("");

    //Function to handle form submission.
    const submitted = (e) => {
        console.log(fromLocation + "\n" + toLocation + "\n" + vehicle + "\n" + regno
        + "\n" + noOfSeats + "\n" + day + "\n" + month + "\n" + tod )
    }

    //Render templates for days. 
    let days = SELECT_DAY.map((day) =>
                <option value = { day }>{ day }</option>
            );

    //Render template for months.
    let months = SELECT_MONTH.map((month) =>
                <option value = { month.value }>{ month.name }</option>
            );

    //Render template for time of day. 
    let timeOfDay = SELECT_TOD.map((t) =>
                <option value = { t }>{ t }</option>
            );

    
    return (
        <Card style = { {"marginLeft" : "15px", "marginTop" : "10px", "marginRight" : "20px" } }>
            <Card.Title style = { {"padding" : "10px"} }>
                <h3> Create a Carpool </h3>
            </Card.Title>
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder = "Riding from"  onChange = {(e) => {
                                    setFromLocation(e.target.value);
                                    }}
                            />
                        </Col>
                        <Col>
                            <Form.Control placeholder = "Riding to" onChange = {(e) => {
                                    setToLocation(e.target.value);
                                }}
                            />
                        </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px"}}>
                        <Col>
                            <Form.Control placeholder = "Vehicle Model" onChange = {(e) => {
                                    setVehicle(e.target.value);
                                }}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder = "Registration Number" onChange = {(e) => {
                                    setRegno(e.target.value);
                                }}/>
                        </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px"}} >
                        <Col md = "3">
                            <Form.Control placeholder = "Number of seats"
                                onChange = {(e) => {
                                    setNoOfSeats(e.target.value);
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control as = "select" onChange = {(e) => {
                                    setDay(e.target.value);
                                }}>
                                { days }
                            </Form.Control>
                        </Col>
                        <Col>
                        <Form.Control as = "select" onChange = {(e) => {
                                    setMonth(e.target.value);
                                }}>
                                { months }
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px"}}>
                    <Col md = "3">
                        <Form.Control as = "select" onChange = {(e) => {
                                    setTod(e.target.value);
                                }}>
                                { timeOfDay }
                            </Form.Control>
                    </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px", "marginLeft" : "4px"}}>
                        <Button variant = "primary" onClick = {submitted}>Create!</Button>
                    </Row>
                    <Row style = {{"marginTop" : "20px", "color" : "red"}}>
                        <span> { errorMessage } </span>   
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}
