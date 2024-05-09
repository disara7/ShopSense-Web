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
          <li className="stuck">Home</li>
          <li>
            <Link to="/About" className="CustomLink">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/Benifit" className="CustomLink">
              Benefit{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="Join_button">Join Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
