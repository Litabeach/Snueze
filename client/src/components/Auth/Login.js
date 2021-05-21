import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import AuthContext from "../../context/AuthContext";
import { Form, Button, Container } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:3001/auth/login", loginData);
    //   await axios.post(
    //     "https://mern-auth-template-tutorial.herokuapp.com/auth/login",
    //     loginData
    //   );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="wrapper">
    <Container>
        <Form className="login-form mx-auto" onSubmit={login}>
        <h4>Log into Snüze</h4>
    <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
    </Form.Group>
    <Button variant="primary" type="submit">
        Login
    </Button>
    <Form.Text className="text-muted">
        Don't have a login? Click <a href="/register">here</a> to register.
        </Form.Text>
    </Form>
    </Container>
    </div>
  )
}

export default Login;