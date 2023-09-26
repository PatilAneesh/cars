import React, { useState } from 'react'
import './Signup.css';

function Signup() {
  const [data, setData] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })
  const [ResponseData, setResponseData] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username:", data);
    fetch('http://localhost:4040/SignUpData', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then(res => res.json())
      .then((dt) => {
        console.log('DATA FROM API', dt);
        setResponseData(dt); // Store the response data in state
      })
      .catch(er => console.log('ERR', er))
  }
  return (
    <div className='formbox'>
      <form onSubmit={handleSubmit} className='form-width'>
        <span className='input-color'>username</span> <input type='text' name='username' required value={data.username} onChange={handleChange} /><br />
        <span className='input-color'>Email</span><input type='email' name='email' required value={data.email} onChange={handleChange} /> <br />
        <span className='input-color'>phone</span> <input type='text' name='phone' required value={data.phone} onChange={handleChange} /><br />
        <span className='input-color'>password</span><input type='password' name='password' required value={data.password} onChange={handleChange} /><br />
        <button type="submit" className="btn btn-primary w-100">Signup</button>
      </form>
      {ResponseData && (
        <>
          <div className="response-data">
            <h2>Response from Server</h2>
            <ul>
              {Object.entries(ResponseData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>

  )
}

export default Signup
