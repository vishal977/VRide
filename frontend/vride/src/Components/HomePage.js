import React, { Component } from 'react'
import {  Container,  Row, Col, Jumbotron } from 'react-bootstrap';
import LoginForm from './LoginForm';
import Carpools from './Carpools';
import '../App.css'
import { AuthContext } from '../Contexts/AuthContext';


export default class HomePage extends Component {

    static contextType = AuthContext;
    render() {

        const { isLoggedIn } = this.context;
        return (
            <div >
            <Row>
                <Col xs lg={9}>
                    <Carpools/>
                </Col>
                <Col>
                    <LoginForm/>
                </Col>
            </Row>
            </div>
        )
    }
}
