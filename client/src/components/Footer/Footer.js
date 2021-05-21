import React from "react";
import { Nav, Container } from 'react-bootstrap';
import "./footer.css";

function Footer() {
    return (
        <Container className="footer">
            <Nav>
                <p className="footer-text">Made with love by Viva La Mustache</p>
            </Nav>
        </Container>
    )
}

export default Footer;
