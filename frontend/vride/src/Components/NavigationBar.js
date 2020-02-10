import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar bg = "primary" variant="dark" expand = "lg" sticky="top">
            <Navbar.Brand href = "#">
                VRide
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#carpools">Carpools</Nav.Link>
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#report">Report a bug</Nav.Link>
            </Nav>
        </Navbar>
    )
}
