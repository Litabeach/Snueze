import React from 'react'

function Register() {
    return (
        <div>
            <h1> Register a new account</h1>
            <form>
                <input type="username" placeholder="Username"/>
                <br />
                <input type="email" placeholder="Email"/>
                <br />
                <input type="password" placeholder="Password"/>
                <br />
                <input type="password" placeholder="Verify Your Password"/>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>

    )
}

export default Register