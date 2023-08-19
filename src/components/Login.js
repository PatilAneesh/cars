import React, { useState } from 'react'

function Login() {
    const[formData, seFormData]=useState({
        username:'',
        password:''
    })
    const handleChange=(e) =>{
         const {name, value}= e.target
         seFormData({...formData, [name]:value})
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        fetch(`http://localhost:4040/login?`+ new URLSearchParams(formData))
        .then(res => res.json())
        .then(dt => console.log('LOGIN DATA FROM API', dt))
        .catch(er => console.log('ERR', er))
       
       

    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit} className='form-width'>
                <input type='text' name='username' value={formData.username} onChange={handleChange}/>username
                <input type='password' name='password' value={formData.password} onChange={handleChange}/>password
                <button type='submit' className="btn btn-success">Login</button>
            </form>
        </div>
    )
}

export default Login
