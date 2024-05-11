import React from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div>
        {" "}
        <img src={logo} alt="" className="Logo" />
      </div>

      <div>
        <ul className="List">
          <li>
            {" "}
            <Link to="/" className="CustomLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="CustomLink">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Benifit" className="CustomLink">
              Benefits{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/Register">
          <button className="Join_button">Join Us</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
