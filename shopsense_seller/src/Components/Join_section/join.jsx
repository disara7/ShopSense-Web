import React from "react";
import "./join.css";
import Join_img from "../Assets/join_img.jpg";
import { Link } from "react-router-dom";

const Join_section = () => {
  return (
    <div>
      <div className="Join_section">
        <div className="content_section">
          <div className="Header_text">
            {" "}
            GET STARTED WITH <br />
            SHOPSENSE !
          </div>
          <br />
          <div className="text_box">
            ShopSense elevates online shopping experience to blind people
            through “taps” on the screen, with artificial intelligence assisting
            you selecting your perfect fit with comprehensive narrating.
          </div>
          <br />
          <br />
          <div className="Button_section">
            <button className="Join_btn">Join</button>
            <button className="Signin_btn">
              <Link to="/Login" className="CustomLink">
                Sign In
              </Link>
            </button>
          </div>
        </div>
        <div className="Image_section">
          <img src={Join_img} alt="" className="Join_img" />
        </div>
      </div>
      <div className="Card_header">
        Set up your e-commerce store in a flash,{" "}
        <span className="Highlight">it's easy and free!</span>
      </div>
    </div>
  );
};

export default Join_section;
