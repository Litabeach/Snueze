import React from "react";
import { Nav } from 'react-bootstrap';
import "./style.css";

function Footer() {
    return (
        <div className="footer">
        <Nav variant="pills" activeKey="1" >
        <p className="footer-text">Made with love by Viva La Mustache</p>
        </Nav>
        </div>
    )
}

export default Footer;
