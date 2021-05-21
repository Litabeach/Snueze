import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import "./style.css";

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
        <div>
            <h1> Register a new account</h1>
            <form onSubmit={register}>
                <input 
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
                />
                <br />
                <input 
                type="email" 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <br />
                <input 
                type="password" 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <br />
                <input 
                type="password" 
                placeholder="Verify Your Password"
                onChange={(e) => setPasswordVerify(e.target.value)}
                value={passwordVerify}
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>

    )
}

export default Register