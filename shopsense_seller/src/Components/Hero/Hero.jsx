import React from 'react'
import './hero.css'
import logo from '../Assets/logo.png'
import { MdNavigateNext } from "react-icons/md";


const Hero = () => {
  return (
    <div className='hero'>
      <h1>ONLINE SHOPPING FOR THE BLIND</h1>
        <div className="image">
            <img src={logo} alt="" />
        </div>
        <p>ShopSense elevates online shopping experience to blind people through 
          “taps” on the screen, with artificial intelligence assisting you 
          selecting your perfect fit with comprehensive narrating.</p>
        <button>ADD YOUR PRODUCT <MdNavigateNext /></button>
    </div>
  )
}

export default Hero