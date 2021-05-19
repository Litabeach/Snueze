import React, { useState } from 'react';
import axios from 'axios';


function Login() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    async function login(e){
        e.preventDefault();

        try{
            const loginData = {
               email, 
               password, 
            };

            await axios.post("http://localhost:3001/auth/login", loginData);

        }catch(err){
            console.error(err);
        }
    }

    return (
        <div>
            <h1> Log in to your account</h1>
            <form onSubmit={login}>
                
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
            
                <button type="submit">Log in</button>
            </form>
        </div>

    )
}

export default Login