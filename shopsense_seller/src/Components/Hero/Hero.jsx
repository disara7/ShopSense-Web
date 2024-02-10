import React from 'react'
import './hero.css'
import logo from '../Assets/logo.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="image">
            <img src={logo} alt="" />
        </div>
        <button>Become a Seller</button>
        <button>Login</button>
    </div>
  )
}

export default Hero