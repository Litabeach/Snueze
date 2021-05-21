import React, { useContext } from "react";
import { Nav } from 'react-bootstrap';
import SpeechToTextNav from "../SpeechToTextNav/SpeechToTextNav";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import "./header.css";

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
          <Nav.Link href="Community" title="Community">
            Community
        </Nav.Link>
        </Nav.Item>
         <Nav.Item>
              <LogoutBtn />
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
        <Nav.Item>
          <SpeechToTextNav />
        </Nav.Item>
        </Nav>
        </div>
  )
}


export default Header;