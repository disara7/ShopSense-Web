import React from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";

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
          <li>About Us</li>
          <li>Benefit</li>
        </ul>
      </div>
      <div>
        <button className="Join_button">Join Us</button>
      </div>
    </nav>
  );
}

export default Navbar;
