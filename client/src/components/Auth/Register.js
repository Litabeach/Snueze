import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./style.css";
import { Form, Button, Container } from "react-bootstrap";

function Register() {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVerify, setPasswordVerify] = useState("");

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

            if (password.length < 8){
                alert("password needs to be at least 8 characters")
            }
            if (password !== passwordVerify){
                alert("passwords do not match")
            }

            if (!username || !email || !password || !passwordVerify){
                alert("Please enter all fields")
            }

            await axios.post("http://localhost:3001/auth", registerData);
            // await axios.post("https://snueze.herokuapp.com/auth", registerData);
            await getLoggedIn();
            history.push("/");

        } catch (err) {
            alert("Something went wrong. Please try again or register using different inputs.")
            console.error(err);
        }
    }

    return (
        <Container>
            <Form className="register-form" onSubmit={register}>
                <h5>Register with Snüze</h5>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="What's your name?" onChange={(e) => setUserName(e.target.value)} value={username} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </Form.Group>

                <Form.Group controlId="formBasicCreatePassword">
                    <Form.Control type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </Form.Group>

                <Form.Group controlId="formBasicVerifyPassword">
                    <Form.Control type="password" placeholder="Re-enter your password" onChange={(e) => setPasswordVerify(e.target.value)} value={passwordVerify} />
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