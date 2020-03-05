import React from 'react'
import { Card, Image, Row, Col, Button } from 'react-bootstrap';
import profile from '../Images/profile.jpg'

export default function CarpoolFeed() {
    //Hook to get Carpool details
    var carPoolOwner = "Hermione Granger"
    var from = "Karappakkam"
    var vehicle = "Hyundai Creta"
    var regno = "TN 89 AD 2200"

    return (
        <div>
            <Card bg = "light" style = {{"marginTop" : "15px", "cursor" : "pointer"}}>
                <Row>
                    <Col md = "auto">
                        <Image src= { profile } roundedCircle 
                        style = {{ 
                            "height" : "50px", 
                            "width" : "50px", 
                            "margin" : "5px", 
                            "padding" : "2px"}} 
                        />
                            <b><span>{carPoolOwner}</span></b> <br></br>
                    </Col>
                    <Col>
                        <span style = {{"padding" : "2px"}}><b>From:</b> { from }</span> <br/>
                        <span style = {{"padding" : "2px"}}><b>Vehicle:</b> { vehicle }</span> <br/>
                        <span style = {{"padding" : "2px"}}><b>Registration number:</b> { regno }</span> <br/>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
