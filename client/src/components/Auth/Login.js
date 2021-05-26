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


      if (!email){
        alert("Please enter you email address")
      }

      if (!password){
        alert("Please enter you password")
      }
      
      // await axios.post("http://localhost:3001/auth/login", loginData);
      await axios.post("https://snueze.herokuapp.com/auth/login", loginData);
      await getLoggedIn();
      history.push("/");
      console.log("login route")
    } catch (err) {
      console.error(err);
      alert("Invalid email or password. Please try again or regiser for an account.")
    }
  }

  return (
    
    <Container className="login">
        <Form className="login-form mx-auto" onSubmit={login}>
        <h1 className="d-inline-block snuzeshade" style={{margin: "0 auto", textAlign: "center"}}>Snüze</h1>
        <h3 id="login-phrase">Your best bet for better sleep.</h3>
        <h5>Log into Snüze</h5>
    <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
    </Form.Group>
    <Button type="submit">
        Login
    </Button>
    <Form.Text className="text-muted" id="login-to-register">
        Don't have a login? Click <a href="/register">here</a> to register.
        </Form.Text>
    </Form>
    </Container>
    
  )
}

export default Login;