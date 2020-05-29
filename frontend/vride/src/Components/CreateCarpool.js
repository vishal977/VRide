//General imports.
import React, { useState } from 'react';
import { Row, Card, Col, Image, Form, ButtonGroup, Button, InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';


//Functional component - CreateCarpool.
export default function CreateCarpool() {

    //Hooks
    const[fromLocation, setFromLocation] = useState("");
    const[toLocation, setToLocation] = useState("");
    const[vehicle, setVehicle] = useState("");
    const[regno, setRegno] = useState("");
    const[noOfSeats, setNoOfSeats] = useState("");
    const[day, setDay] = useState("");
    const[month, setMonth] = useState("");
    const[tod, setTod] = useState("");

    //Function to handle form submission.
    const submitted = (e) => {
        // console.log("submitted");
    }
    
    return (
        <Card style = { {"marginLeft" : "15px", "marginTop" : "15px" } }>
            <Card.Title style = { {"padding" : "10px"} }>
                <h3> Create a Carpool </h3>
            </Card.Title>
            <Card.Body>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder = "Riding from"  onChange = {(e) => {
                                    setFromLocation(e.target.value);
                                    }}
                            />
                        </Col>
                        <Col>
                            <Form.Control placeholder = "Riding to" onChange = {(e) => {
                                    setToLocation(e.target.value);
                                }}
                            />
                        </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px"}}>
                        <Col>
                            <Form.Control placeholder = "Vehicle Model" onChange = {(e) => {
                                    setVehicle(e.target.value);
                                }}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder = "Registration Number" onChange = {(e) => {
                                    setRegno(e.target.value);
                                }}/>
                        </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px"}} >
                        <Col md = "3">
                            <Form.Control placeholder = "Number of seats"
                                onChange = {(e) => {
                                    setNoOfSeats(e.target.value);
                                }}
                            />
                        </Col>
                        <Col>
                            <Form.Control as = "select" onChange = {(e) => {
                                    setDay(e.target.value);
                                }}>
                                <option>Select Day</option>
                                <option>1</option> <option>2</option>  <option>3</option>  <option>4</option>  <option>5</option> 
                                <option>6</option>  <option>7</option>  <option>8</option>  <option>9</option>  <option>10</option> 
                                <option>11</option>  <option>12</option>  <option>13</option>  <option>14</option>  <option>15</option> 
                                <option>16</option>  <option>17</option>  <option>18</option>  <option>19</option>  <option>20</option> 
                                <option>21</option>  <option>22</option>  <option>23</option>  <option>24</option>  <option>25</option> 
                                <option>26</option>  <option>27</option>  <option>28</option>  <option>29</option>  <option>30</option> 
                                <option>31</option> 
                            </Form.Control>
                        </Col>
                        <Col>
                        <Form.Control as = "select" onChange = {(e) => {
                                    setMonth(e.target.value);
                                }}>
                                <option>Select Month</option>
                                <option>Janj</option> <option>Feb</option>  <option>Mar</option>  <option>Apr</option>  <option>May</option> 
                                <option>Jun</option>  <option>Jul</option>  <option>Aug</option>  <option>Sep</option>  <option>Oct</option> 
                                <option>Nov</option>  <option>Dec</option>
                            </Form.Control>
                        </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px"}}>
                    <Col md = "3">
                        <Form.Control as = "select" onChange = {(e) => {
                                    setTod(e.target.value);
                                    console.log(tod);
                                }}>
                                <option>Select time of day</option>
                                <option>AM</option> <option>PM</option> 
                            </Form.Control>
                    </Col>
                    </Row>
                    <Row style = {{"marginTop" : "20px", "marginLeft" : "4px"}}>
                        <Button variant = "primary" onClick = {submitted}>Create!</Button>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    )
}
