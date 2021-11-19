import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';


function Header() {
    return (
        <div className="costumBg" variant="dark">
            <div className="links-nav">
                <Nav.Link href="#home" className="link-nav">Home</Nav.Link>
                <Nav.Link href="#link" className="link-nav">Link</Nav.Link>
            </div>
            <div>
                <NavDropdown title={<i class="fas fa-user"></i>} className="link-nav" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Sing In</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Log In</NavDropdown.Item>
                </NavDropdown>
            </div>
        </div>
    )
}

export default Header