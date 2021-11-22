import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-nav" variant="dark">
            <div className="links-nav">
                <Nav.Link  as={Link} to={"/Home"}  className="link-nav">Home</Nav.Link>
                <Nav.Link as={Link} to={"/Cities"} className="link-nav">Cities</Nav.Link>
            </div>
        </div>
            <div className="icons-container">
                <Nav.Link href="/" className="link-social"><i class="fab fa-telegram-plane" id="telegram"></i></Nav.Link>
                <Nav.Link href="/" className="link-social"><i class="fa fa-twitter" id="twitter"></i></Nav.Link>
                <Nav.Link href="/" className="link-social"><i class="fab fa-github" id="github"></i></Nav.Link>
                <Nav.Link href="/" className="link-social"><i class="fab fa-facebook-f" id="facebook"></i></Nav.Link>
            </div>
            <p>&copy;Mytinerary | All Rights Reserved</p>
        </footer>
    )
}

export default Footer
