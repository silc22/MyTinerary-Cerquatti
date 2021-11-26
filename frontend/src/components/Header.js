import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="costumBg" variant="dark">
            <div className="logo-container">
                <img src="./logo-mt.png" alt="MyTinerary Logo"></img>
            </div>
            <div className="links-nav">
                <Nav.Link  as={Link} to="/"  className="link-nav">Home</Nav.Link>
                <Nav.Link as={Link} to="/cities" className="link-nav">Cities</Nav.Link>
            </div>
            <div className="dropdown-nav">
                <NavDropdown title={<i className="fas fa-user"></i>} className="link-nav" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to={"/"} >Sign In </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/"}>Log In </NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    )
}

export default Header