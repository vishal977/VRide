import React, { Component, useState } from 'react'
import { Row, Card, Col, Image } from 'react-bootstrap';
import profile from '../Images/profile.jpg'
import axios from 'axios';

export default function CarpoolFeed() {

        const [carpools, setCarpools] = useState("");
        const baseURL = "http://localhost:8080/carpools";
        axios.get(baseURL)
            .then(res => {
                setCarpools(res.data);
            })

        const allCarpools = carpools;
        var arr = [];
        for (var key in allCarpools) {
            arr.push(allCarpools[key]);
        }

        const data = arr.length ? (
            arr.map(arr => {
                return (
                    <div key = {arr.carpoolId}>
                        <Card bg = "white" style = {{"marginTop" : "15px", "cursor" : "pointer"}}>
                            <Row>
                                <Col md = "5">
                                    <Image src= { profile } roundedCircle 
                                    style = {{ 
                                        "height" : "50px", 
                                        "width" : "50px", 
                                        "margin" : "5px", 
                                        "padding" : "2px"}} 
                                    />
                                        <b><span>{ arr.ownerName }</span></b> <br></br>
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

