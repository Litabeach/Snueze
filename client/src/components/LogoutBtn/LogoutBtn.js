import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Nav } from 'react-bootstrap';

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("http://localhost:3001/auth/logout");

    await getLoggedIn();
    history.push("/");
  }

  return (
    <Nav.Item>
      <Nav.Link title="Logout">
        <p onClick={logOut}>Logout</p>
      </Nav.Link>
    </Nav.Item>
  )
}

export default LogOutBtn;