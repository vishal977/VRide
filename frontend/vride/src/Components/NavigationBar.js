//General Imports.
import React, { useContext } from 'react'
import {Navbar, Nav, Image, NavDropdown} from 'react-bootstrap';
import { LinkContainer  } from 'react-router-bootstrap';
import {AuthContext} from '../Contexts/AuthContext';

//Resource Imports
import carpool from '../Images/carpool.png';
import profile from '../Images/profile.jpg';
import {APP_NAME, SIGNED_IN_LINKS, SIGNED_OUT_LINKS} from '../Res/constants';

//Functional Component - NavigationBar
export default function NavigationBar() {

    //Context destructuring.
    const { isLoggedIn }  = useContext(AuthContext);
    const { employeeID } = useContext(AuthContext);
    const { firstname } = useContext(AuthContext);
    const { signOut } = useContext(AuthContext);

    //Return different templates depending on auth status.
    if(isLoggedIn)
    {
        //Template if user is logged in.
        return (
            <Navbar bg = "primary" variant = "dark" expand = "lg" sticky = "top">
                <Navbar.Brand href = "/">
                    <img
                        src = { carpool }
                        width = "30"
                        height = "30"
                        className = "d-inline-block align-top"
                        alt = "VRide logo"
                    />
                    <b style = {{"marginLeft" : "10px"}}> { APP_NAME } </b>
                </Navbar.Brand>

                <Nav className = "mr-auto"> </Nav>

                <Nav style = { { "marginRight" : "30px" } }>
                    <Image src = {profile}
                        width = "40"
                        height = "40"
                        className = "d-inline-block align-top"
                        roundedCircle/>
                    <NavDropdown title = { firstname } id = "basic-nav-dropdown" style = { { "marginRight" : "50px" } }>
                        <LinkContainer  to = "/home">
                         <NavDropdown.Item > { SIGNED_IN_LINKS[0] } </NavDropdown.Item>
                        </LinkContainer >

                        <LinkContainer  to = "/create"> 
                            <NavDropdown.Item > { SIGNED_IN_LINKS[1] } </NavDropdown.Item> 
                        </LinkContainer>

                        <LinkContainer  to = "/mycarpools"> 
                            <NavDropdown.Item > { SIGNED_IN_LINKS[2] } </NavDropdown.Item> 
                        </LinkContainer>

                        <LinkContainer  to = "/rides"> 
                            <NavDropdown.Item > { SIGNED_IN_LINKS[3] } </NavDropdown.Item> 
                        </LinkContainer>

                        <NavDropdown.Divider />

                        <NavDropdown.Item onClick = {()=>{signOut({
                                empid: employeeID,
                                firstname: firstname
                            }) }}>  { SIGNED_IN_LINKS[4] }
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
    else
    {
        //Template if user is not signed in.
        return(
        <Navbar bg = "primary" variant = "dark" expand = "lg" sticky = "top">
                <Navbar.Brand href = "/">
                    <img
                        src={carpool}
                        width = "30"
                        height = "30"
                        className = "d-inline-block align-top"
                        alt = "React Bootstrap logo"/>

                    <b style = { {"marginLeft" : "10px"} }> VRide </b>
                </Navbar.Brand>
                <Nav className = "mr-auto"> </Nav>
                <Nav style = { {"marginRight" : "30px"} }>
                    <LinkContainer  to = "/">
                        <Nav.Link > { SIGNED_OUT_LINKS[0] } </Nav.Link>
                    </LinkContainer>
                    <LinkContainer  to = "/signup">
                        <Nav.Link> { SIGNED_OUT_LINKS[1] } </Nav.Link>
                    </LinkContainer>
                    <LinkContainer  to = "/contact">
                        <Nav.Link> { SIGNED_OUT_LINKS[2] } </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
        )
    }
}
