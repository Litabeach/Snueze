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
        <Navbar.Brand href="/" className="d-inline-block snuzeshade">Snüze</Navbar.Brand>
        {loggedIn === true && (
          <>
        <Navbar.Toggle aria-controls="navbar-nav"><span className="material-icons yellow">
        menu
        </span></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
        
                <Nav.Item>
                  <Nav.Link href="/mybed" title="My Bed">
                    My Bed
              </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/survey" title="Sleep">
                    Sleep
              </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/journal" title="Dream">
                    Dream
              </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/stats" title="Analyze">
                    Analyze
              </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/tools" title="Reflect">
                    Reflect
              </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/resources" title="Resources">
                    Resources
              </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/community" title="Community">
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

