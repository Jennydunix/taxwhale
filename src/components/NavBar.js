import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false )
  return (
    <nav className='navbar'>
        <h3 className='logo'>Taxwhale</h3>
            <ul className= {isMobile? "nav-links-mobile":"nav-links"}
              onClick={() => setIsMobile(false)}
            >
                <Link to='/' className='home'>
                  <li>Tax Professional</li>
                </Link>
                <Link to='/pricing' className='pricing'>
                  <li>Pricing</li>
                </Link>
                <Link to='/resources' className='resources'>
                  <li>Resources</li>
                </Link>
                <Link to='/contact' className='contact'>
                  <li>Contact</li>
                </Link>
                <Link to='/login' className='login'>
                  <li>Login</li>
                </Link>
                <Link to='/signup' className='signup'>
                  <li>Signup</li>
                </Link>
            </ul>

            <button className='mobile-menu-icon'
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? <i className='fas fa-times'></i>: <i className='fa fa-bars'></i>}
            </button>
    </nav>
  )
}

export default NavBar