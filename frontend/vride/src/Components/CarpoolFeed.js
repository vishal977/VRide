//General imports
import React, { useState } from 'react'
import { Row, Card, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import { usePosition } from 'use-position';

//Resource imports
import profile from '../Images/profile.jpg';
import { CARPOOL_URL, NO_CARPOOLS, DIST_KMS, DIST_METRES } from '../Res/constants';

//Geodist library import
var geodist = require('geodist')

//Functional component - CarpoolFeed
export default function CarpoolFeed() {
     
    //Hooks
    const [carpools, setCarpools] = useState("");

    //URL Call
    axios.get(CARPOOL_URL)
        .then(res => {
            setCarpools(res.data);
        })
    
    //Iterating through all available carpools
    const allCarpools = carpools;
    var arr = [];
    for (var key in allCarpools) {
        arr.push(allCarpools[key]);
    }

    //usePosition Hook to get location of user.
    const { latitude, longitude } = usePosition();

    const data = arr.length ? (
        arr.map(arr => {
            return (
                <div key = { arr.carpoolId }>
                    <Card bg = "white" style = { { "marginTop" : "15px", "cursor" : "pointer" } }>
                        <Row>
                            <Col md = "auto">
                                <Image src= { profile } roundedCircle 
                                style = {{ 
                                    "height" : "50px", 
                                    "width" : "50px", 
                                    "marginTop" : "23px", 
                                    "marginLeft" : "3px",
                                    "padding" : "2px",
                                    }} 
                                />
                            </Col>
                            <Col md = "4" style = {{"marginLeft" : "-20px","marginTop" : "23px"}}>
                                    <b> <span>{ arr.ownerName }</span> </b> 
                                    <br></br>
                                    <span> <i> { getDistance() } </i> </span>    
                            </Col>
                            <Col>
                                <span style = { {"padding" : "2px"} }> <b> From:</b> { arr.fromLocation } </span> <br/>
                                <span style = { {"padding" : "2px"} }> <b> Vehicle:</b> { arr.vehicle } </span> <br/>
                                <span style = { {"padding" : "2px"} }> <b> Registration number: </b> { arr.regno } </span> <br/>
                                <span style = { {"padding" : "2px"} }> <b> No of seats left: </b> { arr.noOfSeats } </span> <br/>
                            </Col>
                        </Row>
                    </Card>
                </div>
            )
        })
    ) : 
    (
        <h3> { NO_CARPOOLS } </h3>
    )


    return (
        <div>
            { data }
        </div>
        
    )

    /* Helper function geoDistance()
    Calculates distance between the user's coordinates and the vehicle's coordinates.
            TEST DATA: latitude : 12.984585, longitude: 80.124250
     */
    function getDistance() {
        var dist = geodist( {lat : 12.984585, lon: 80.124250},
            {lat: latitude, lon: longitude}, {unit: 'meters'})
        if(dist < 1000)
        {
            return dist + DIST_METRES;
        } 
        else
        {
            return (dist/1000) + DIST_KMS;
        }
    }
}

