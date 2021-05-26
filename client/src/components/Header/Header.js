import React, { useContext } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import SpeechToTextNav from "../SpeechToTextNav/SpeechToTextNav";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import "./header.css";

function Header() {

  const { loggedIn } = useContext(AuthContext);

  return (
    <Navbar bg="#EB6864" expand="lg" sticky="top-0">

      {loggedIn === true && (
        <>
          <Navbar.Brand href="/" className="d-inline-block snuzeshade">Snüze</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav"><span className="material-icons yellow">
            menu
        </span></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">

              <Nav.Item>
                <Nav.Link className="navitem" href="/mybed" title="My Bed">
                  My Bed
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="navitem" href="/record" title="Record">
                  Record
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="navitem" href="/dream" title="Dreams">
                  Dream
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="navitem" href="/insights" title="Insights">
                  Insights
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="navitem" href="/meditate" title="Meditate">
                  Meditate
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="navitem" href="/resources" title="Resources">
                  Resources
              </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="navitem" href="/community" title="Community">
                  Community
              </Nav.Link>
              </Nav.Item>

              <LogoutBtn />

              <Nav.Item>
                <SpeechToTextNav />
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  )
}


export default Header;

