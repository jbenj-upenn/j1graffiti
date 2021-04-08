// Allows React to utilize the component pages
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Header(props) {
    return (

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Joshua Benjamin's Graffiti Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#portfolio">Portolio</Nav.Link> */}

                    <NavDropdown title="Portfolio Quick Links" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">2559 Amber St., Philadelphia</NavDropdown.Item>
                        <NavDropdown.Item href="#">Relentless, Doylestown</NavDropdown.Item>
                        <NavDropdown.Item href="#">Bike Works, Lititz</NavDropdown.Item>
                        <NavDropdown.Item href="#">Moses, San Diego</NavDropdown.Item>
                        <NavDropdown.Item href="#">Doulin's Garage, Holtwood</NavDropdown.Item>
                        <NavDropdown.Item href="#">Lake Street, Lancaster</NavDropdown.Item>
                        <NavDropdown.Item href="#">The Hive, Lancaster</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default Header;