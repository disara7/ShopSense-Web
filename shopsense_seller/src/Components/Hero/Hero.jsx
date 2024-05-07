import React from "react";
import "./hero.css";
import Hero_img from "../Assets/Hero.png";
import Badge from "../Assets/Badge.png";
import Color from "../Assets/Color.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p>
          Our platform provides comprehensive tools and services for sellers
          through our website, empowering them to manage their businesses with
          ease.
        </p>
        <img src={Badge} alt="" className="badge" />
      </div>

      <div className="content2">
        <img src={Color} alt="" className="color" />
        <p>
          ShopSense enhances the online shopping experience for blind people
          through screen taps, with artificial intelligence providing
          assistance.
        </p>
      </div>

      <img src={Hero_img} alt="" className="Hero_img" />
    </div>
  );
};

export default Hero;
