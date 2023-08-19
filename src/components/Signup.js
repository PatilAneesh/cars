import React, { useState } from 'react'
import './Signup.css';

function Signup() {
    const[data,setData] = useState({
        username:'',
        email:'',
        phone:'',
        password:''
    })
    const handleChange =(e)=> {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("username:", data);
        fetch('http://localhost:4040/SignUpData', {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        })
        .then(res => res.json())
        .then(dt => console.log('DATA FROM API', dt))
        .catch(er => console.log('ERR', er))
    }
    return (
        <div className='formbox'>
            <form onSubmit={handleSubmit} className='form-width'>
                <input type='text' name='username' required value={data.username}  onChange={handleChange}/>username <br/>
                <input type='email' name='email' required value={data.email} onChange={handleChange}/>Email <br/>
                <input type='text' name='phone' required value={data.phone} onChange={handleChange}/>phone<br/>
                <input type='password' name='password' required value={data.password} onChange={handleChange}/>password<br/>
                <button type="submit" className="btn btn-primary w-100">Signup</button>
            </form>
        </div>
    )
}

export default Signup
