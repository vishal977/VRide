//General imports.
import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

//Component imports.
import LoginForm from './LoginForm';
import Carpools from './Carpools';
import CreateCarpool from './CreateCarpool';
import '../App.css'
import { AuthContext } from '../Contexts/AuthContext';

//Class component - HomePage.
export default class HomePage extends Component {

    //Context consumption.
    static contextType = AuthContext;

    render() {

        //Destructuring information from context.
        const { isLoggedIn } = this.context;
        
        if(isLoggedIn)
        {
        return (
            <div >
            <Row>
                <Col>
                    <Carpools/>
                </Col>
                <Col>
                    <CreateCarpool/>
                </Col>
            </Row>
            </div>
        )
        }
        else
        {
            return (
               <div>
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
}
