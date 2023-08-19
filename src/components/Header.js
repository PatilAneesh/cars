import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
  <>
    <div className='header'>
      <h1>Cars showroom</h1>
    </div>
    <div className='Signup-btn'>
    <Link to="/Signup">
    <button type="button" className="btn btn-dark">Signup</button>
     </Link>
     <Link to="/cars">
    <button type="button" className="btn btn-dark">Cars</button>
     </Link>
     <Link to="/Login">
     <button type='button' className='btn btn-primary'>Login</button>
     </Link>
    </div>
        </>
  )
}

export default Header
