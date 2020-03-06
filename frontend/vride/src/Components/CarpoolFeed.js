import React, { Component } from 'react'
import { Row, Card, Col, Image } from 'react-bootstrap';
import { CarpoolContext } from '../Contexts/CarpoolContext';
import profile from '../Images/profile.jpg'

export default class CarpoolFeed extends Component {
    static contextType = CarpoolContext;
    render() {
        const { carpools } = this.context;

        const allCarpools = carpools;
        var arr = [];
        for (var key in allCarpools) {
            arr.push(allCarpools[key]);
        }

        const data = arr.length ? (
            arr.map(arr => {
                return (
                    <div key = {arr.id}>
                        <Card bg = "white" style = {{"marginTop" : "15px", "cursor" : "pointer"}}>
                            <Row>
                                <Col md = "auto">
                                    <Image src= { profile } roundedCircle 
                                    style = {{ 
                                        "height" : "50px", 
                                        "width" : "50px", 
                                        "margin" : "5px", 
                                        "padding" : "2px"}} 
                                    />
                                        <b><span>{ arr.carPoolOwner }</span></b> <br></br>
                                </Col>
                                <Col>
                                    <span style = {{"padding" : "2px"}}><b>From:</b> { arr.fromLocation }</span> <br/>
                                    <span style = {{"padding" : "2px"}}><b>Vehicle:</b> { arr.vehicle }</span> <br/>
                                    <span style = {{"padding" : "2px"}}><b>Registration number:</b> { arr.regno }</span> <br/>
                                    <span style = {{"padding" : "2px"}}><b>No of seats left:</b> { arr.noOfSeats }</span> <br/>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                )
            })
        ) : 
        (
            <h3>No available carpools! :(</h3>
        )


    return (
        <div>
            { data }
        </div>
        
    )
    }
}
