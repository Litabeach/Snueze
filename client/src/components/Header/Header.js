import React, { useContext } from "react";
import { Nav } from 'react-bootstrap';
import SpeechToTextNav from "../SpeechToTextNav/SpeechToTextNav";
import "./style.css"
import AuthContext from "../../context/AuthContext"
import LogoutBtn from "../LogoutBtn/LogoutBtn"

function Header() {

  const { loggedIn } = useContext(AuthContext);


  return (
    <div className="nav">
      <Nav variant="pills" activeKey="1" >
        <a className="navbar-brand" href="/">Snüze</a>
        {loggedIn === true && (
          <>
            <Nav.Item>
              <Nav.Link href="/mybed" title="My Bed">
                My Bed
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
              <LogoutBtn />
            </Nav.Item>
            <Nav.Item>
              <SpeechToTextNav />
            </Nav.Item>
          </>
        )}
        {loggedIn === false &&
          <>
            <Nav.Item>
              <Nav.Link href="/" title="Login">
                Login
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/register" title="Register">
                Register
              </Nav.Link>
            </Nav.Item>
          </>
        }

      </Nav>
    </div>
  )
}

export default Header;