import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='list'>
          <li>SELLER PORTAL</li>
          <div className="left">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Join</li>
          </div>
        </ul>
    </div>
  )
}

export default Navbar