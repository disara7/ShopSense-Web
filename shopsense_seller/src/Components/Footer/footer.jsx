import React from "react";
import "./footer.css";
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/linkedin.png";
import twitter from "../Assets/twitter.png";
import logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Logo_bar">
        <img src={twitter} alt="" className="twitter" />
        <img src={linkedin} alt="" className="linkedin" />
        <img src={facebook} alt="" className="facebook" />
      </div>

      <div className="button_holder">
        <button className="button_footer">HOME</button>
        <button className="button_footer">ABOUT</button>
        <button className="button_footer">BENIFIT</button>
        <button className="joinbutton_footer">JOIN US</button>
      </div>
      <div class="line"></div>

      <div className="logobar_footer">
        <img src={logo} alt="" className="Logo_footer" />
        <div className="logofooter_content">
          Our platform provides comprehensive tools and services for sellers
          through our website, empowering them to manage their businesses with
          ease.
        </div>
      </div>
    </div>
  );
};

export default Footer;
