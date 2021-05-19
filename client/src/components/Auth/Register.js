import React from 'react'

function Register() {

    const[userName, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passwordVerify, setPasswordVerify] = useState("");

    return (
        <div>
            <h1> Register a new account</h1>
            <form>
                <input 
                // type="username" 
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
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