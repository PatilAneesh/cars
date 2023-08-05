import React, { useState } from 'react'
import './Login.css';

function Login() {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login successful!");
        console.log("username:", username);
        console.log("Password:", password);
        console.log("email:", email);
        console.log("phone:", phone);
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit} className='form-width'>
                <input type='text' value={username}  onChange={(e) => setUsername(e.target.value)}/>username <br/>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>Email <br/>
                <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>phone<br/>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>password<br/>
                <button type="submit" className="btn btn-primary w-100">login</button>

            </form>
        </div>
    )
}

export default Login
