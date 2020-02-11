import React, { useState,Fragment } from 'react'
import { Row, Accordion,Card, Button, Col  } from 'react-bootstrap';


export default function StaggeredText() {
    return (
        <div>
            <Accordion >
                <Card bg = "warning" >
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                       <Row>
                           <Col>
                                <h3 className="material-icons">
                                check
                                </h3>
                           </Col>
                           <Col md = "6">
                                <h5 style = {{fontWeight:"bold"}}>
                                    Easy sign in/ sign up!
                                </h5>
                          </Col>
                          <Col md = {{span: "4"}} style = {{textAlign:"right"}}>
                            <h5 className="material-icons">
                                expand_more
                            </h5>
                          </Col>
                       </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            All you need is your employee ID and password!
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg = "warning">
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    <Row>
                        <Col>
                            <h3 className="material-icons">
                            check
                            </h3>
                        </Col>
                        <Col md = {6}>
                            <h5 style = {{fontWeight:"bold"}}>
                                Hassle free rides.
                            </h5>
                        </Col>
                        <Col md = {{span: "4"}} style = {{textAlign:"right"}}>
                        <h5 className="material-icons">
                            expand_more
                        </h5>
                        </Col>
                    </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            Book your ride by choosing from the list of available carpools! <br/>
                            Are you the one driving? Then create a carpool to share your ride!
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card bg = "warning">
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                    <Row>
                        <Col>
                            <h3 className="material-icons">
                            check
                            </h3>
                        </Col>
                        <Col md = {6}>
                            <h5 style = {{fontWeight:"bold"}}>
                                Easy Peasy Payments!
                            </h5>
                        </Col>
                        <Col md = {{span: "4"}} style = {{textAlign:"right"}}>
                        <h5 className="material-icons">
                            expand_more
                        </h5>
                        </Col>
                    </Row>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            Pay your share via:
                            <ul>
                                <li>Cash</li>
                                <li>PayTM</li>
                                <li>Google Pay, or</li>
                                <li>Amazon Pay</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>


                
            </Accordion>
        </div>
    )
}
