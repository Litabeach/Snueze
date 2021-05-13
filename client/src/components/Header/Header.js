import React from "react";
import { Nav, NavDropdown} from 'react-bootstrap';

function Header() {
   return (
    
    <Nav variant="pills" activeKey="1" >
    <a className="navbar-brand" href="/">Snüze</a>
      <NavDropdown title="Me" id="nav-dropdown">
      <NavDropdown.Item href="/mybed">MyBed</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/survey">Survey</NavDropdown.Item>
        <NavDropdown.Item href="/journal">Journal</NavDropdown.Item>
        <NavDropdown.Item href="/stats">Stats</NavDropdown.Item>
        <NavDropdown.Item href="/tools">Tools</NavDropdown.Item>
      </NavDropdown>
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
    </Nav>
  )
}

export default Header;
