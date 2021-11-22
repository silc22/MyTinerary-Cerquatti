import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="costumBg" variant="dark">
                <div className="links-nav">
                    <Nav.Link  as={Link} to={"/Home"}  className="link-nav">Home</Nav.Link>
                    <Nav.Link as={Link} to={"/Cities"} className="link-nav">Cities</Nav.Link>
                </div>
                <div className="dropdown-nav">
                    <NavDropdown title={<i class="fas fa-user"></i>} className="link-nav" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Log In</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
    )
}

export default Header