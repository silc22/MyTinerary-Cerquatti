import React from "react";
import {Container, Navbar, Nav, NavDropdown, Row, Col} from "react-bootstrap";

function NavBar(){
    return (
        <div className="hero">
            <Navbar className="costumeBg" expand="lg" sticky="top">
                <Container>
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home">Mytinerary</Navbar.Brand>
                        </Col>
                        <Col>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <NavDropdown title={<i class="fas fa-user"></i>} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Sing In</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Log In</NavDropdown.Item>
                                </NavDropdown>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Container>
                <header>
                    <h1>Mytinerary</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                </header>
            </Container>
        </div>
    )
}

export default NavBar;