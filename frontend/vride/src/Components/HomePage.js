import React, { Component } from 'react'
import { Card, Container, Image, Row, Col, Form, Jumbotron } from 'react-bootstrap';
import carpooling from '../Images/carpooling.jpg'
import LoginForm from './LoginForm';
import '../App.css'


export default class HomePage extends Component {
    render() {
        return (
            <div >
            <Row>
                <Col xs lg={9}>
                    <Jumbotron style = {{"marginLeft" : "25px"}}>
                        <div id="cont">
                        Reduce 
                        <div id="flip">
                            <div><div>Expenses!</div></div>
                            <div><div>Fuel usage!</div></div>
                            <div><div>Pollution!</div></div>
                        </div>
                        <h3>Carpooling just got easier!</h3>
                        </div>
                    </Jumbotron>
                    <Container>
                    </Container>
                </Col>
                <Col>
                    <LoginForm/>
                </Col>
            </Row>
            </div>
        )
    }
}
