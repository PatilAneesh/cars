import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
  <>
    <div className='header'>
      <h1>Cars showroom</h1>
    </div>
    <div className='login-btn'>
    <Link to="/login">
    <button type="button" class="btn btn-dark">Login</button>
     </Link>
     <Link to="/cars">
    <button type="button" class="btn btn-dark">Cars</button>
     </Link>
    </div>
        </>
  )
}

export default Header
