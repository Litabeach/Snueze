import React from "react";
import { Nav } from 'react-bootstrap';
import SpeechToTextNav from "../SpeechToTextNav/SpeechToTextNav";
import "./header.css"

function Header() {
  return (
    <div className="nav">
      <Nav variant="pills" activeKey="1" >
        <a className="navbar-brand" href="/">Snüze</a>
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
          <Nav.Link href="/stats" title="Retrospect">
            Retrospect
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
          <Nav.Link href="Community" title="Community">
            Community
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/logout" title="Logout">
            Logout
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <SpeechToTextNav />
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header;