import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./style.css";
import { Form, Button, Container, Alert } from "react-bootstrap";

function Register() {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState();

    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function register(e) {
        e.preventDefault();

        try {
            const registerData = {
                username,
                email,
                password,
                passwordVerify,
            };

            await axios.post("/auth", registerData);
            await getLoggedIn();
            history.push("/");

        } catch (err) {
            console.error(err);
            setError(true)
          setErrorMsg("Account already exists. Please chose a different e-mail address.")
            
        }
    }

    return (
        <Container>
            <Form className="register-form" onSubmit={register}>
            <h1 className="d-inline-block snuzeshade auth-logo" style={{margin: "0 auto", textAlign: "center"}}>Snüze</h1>
            <h3 id="login-phrase">Your best bet for better sleep.</h3>
            {error ? <Alert className="dangerAlert" variant="warning" onClose={() => setError(false)} dismissible><p>{errorMsg}</p></Alert> : null} 
                <h5>Register with Snüze</h5>
                <Form.Group controlId="formBasicName">
                    <Form.Control required type="text" placeholder="What's your name?" onChange={(e) => setUserName(e.target.value)} value={username} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control required type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Group>

                <Form.Group controlId="formBasicCreatePassword">
                    <Form.Control required type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </Form.Group>

                <Form.Group controlId="formBasicVerifyPassword">
                    <Form.Control required type="password" placeholder="Re-enter your password" onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify} />
                </Form.Group>

                <Button type="submit">
                    Register
        </Button>

                <Form.Text className="text-muted" id="register-to-login">
                    Already registered? Click <a href="/">here</a> to login.
        </Form.Text>
            </Form>
        </Container>
    )
}

export default Register