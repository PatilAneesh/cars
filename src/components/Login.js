import React, { useState } from 'react'
import Page from './Page'

function Login() {
    const[isLoggedIn,setIsLoggedIn]=useState(false)
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
        // .then(dt => {
        //     console.log('LOGIN DATA FROM API', dt)
        //     return dt
        // })
        .then(dt => {
            console.log('LOGIN DATA FROM API', dt);
            // Assuming your API returns a successful message message
            if (dt?.message === 'Login successful') {
                console.log('LOGIN ', dt);
                setIsLoggedIn(true); // Set login status to true
            }
        })
        .catch(er => console.log('ERR', er))
       
       

    }

    return (
        <div className='login'>
            { isLoggedIn ? (<Page/>) : (<form onSubmit={handleSubmit} className='form-width'>
                <input type='text' name='username' value={formData.username} onChange={handleChange}/>username
                <input type='password' name='password' value={formData.password} onChange={handleChange}/>password
                <button type='submit' className="btn btn-success">Login</button>
            </form>)}
        </div>
    )
}

export default Login
