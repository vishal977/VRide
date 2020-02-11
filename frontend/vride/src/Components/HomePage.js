import React, { Component } from 'react'
import {  Container,  Row, Col, Jumbotron } from 'react-bootstrap';
import LoginForm from './LoginForm';
import StaggeredText from './StaggeredText';
import '../App.css'


export default class HomePage extends Component {
    render() {
        return (
            <div >
            <Row>
                <Col xs lg={9}>
                    <Jumbotron style = {{"marginLeft" : "25px", marginTop: "10px", minHeight: "330px"}}>
                        <Row>
                            <Col  xs = {6}>
                                <div id="cont">
                                Reduce 
                                <div id="flip">
                                    <div><div>Expenses!</div></div>
                                    <div><div>Fuel usage!</div></div>
                                    <div><div>Pollution!</div></div>
                                </div>
                                <h3>Carpooling just got easier!</h3>
                                </div>
                            </Col>
                            <Col>
                               <StaggeredText/>
                            </Col>
                        </Row>
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
