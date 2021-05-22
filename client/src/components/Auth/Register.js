import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./style.css";
import { Form, Button } from "react-bootstrap";

function Register() {

    const[username, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passwordVerify, setPasswordVerify] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function register(e){
        e.preventDefault();

        try{
            const registerData = {
               username, 
               email, 
               password, 
               passwordVerify,
            };

            await axios.post("http://localhost:3001/auth", registerData);
            await getLoggedIn();
            history.push("/");

        }catch(err){
            console.error(err);
        }
    }

    return (
        
        <div className="wrapper">
        <Form onSubmit={register}>
        <h4>Register with Snüze</h4>
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
    
        <Form.Text className="text-muted">
            Already registered? Click <a href="/">here</a> to login.
        </Form.Text>
    </Form>
    </div>
    )
}

export default Register


// <div>
// <h1> Register a new account</h1>
// <form className="login-form" onSubmit={register}>
//     <input 
//     placeholder="Username"
//     className="form-control"
//     onChange={(e) => setUserName(e.target.value)}
//     value={username}
//     />
//     <br />
//     <input 
//     type="email" 
//     placeholder="Email"
//     className="form-control"
//     onChange={(e) => setEmail(e.target.value)}
//     value={email}
//     />
//     <br />
//     <input 
//     type="password" 
//     placeholder="Password"
//     className="form-control"
//     onChange={(e) => setPassword(e.target.value)}
//     value={password}
//     />
//     <br />
//     <input 
//     type="password" 
//     placeholder="Verify Your Password"
//     className="form-control"
//     onChange={(e) => setPasswordVerify(e.target.value)}
//     value={passwordVerify}
//     />
//     <br />
//     <button className="btn btn-primary" type="submit">Register</button>
// </form>
// </div>