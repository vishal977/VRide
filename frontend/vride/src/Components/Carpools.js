import React from 'react'
import {Card, Row, Col, Form, Button, CardDeck} from 'react-bootstrap';
import CarpoolFeed from './CarpoolFeed';

export default function Carpools() {
    return (
        <div>
            <Card bg="light" style={{ "width": "45rem", "marginTop": "10px", "marginLeft" : "20px" }}>
                <Card.Header><h4>Available Carpools</h4></Card.Header>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card bg = "secondary">
                                <Form.Control type="text" placeholder="Enter pickup point" />
                            </Card>
                        </Col>
                        <Col>
                        <Card bg = "light">
                            <Button variant="primary">Search</Button>
                        </Card>
                        </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px"}}>
                        <Col>
                            <CardDeck>
                                <Card.Body>
                                    <CarpoolFeed/>
                                </Card.Body>
                            </CardDeck>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Body>
                    <Button variant = "primary">
                        Join!
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
