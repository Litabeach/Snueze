import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function login(e){
        e.preventDefault();

        try {
            const loginData = {
                email,
                password,
            };

            await axios.post("http://localhost:3001/auth/login", loginData);
            await getLoggedIn();
            history.push("/")

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="wrapper">
            <h1> Log in to your account</h1>
            <form  className="login-form">
                <div className="form-group" onSubmit={login}>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}
                                value={email}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                                value={password}/>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>

    )
}

export default Login