import { Link } from "react-router-dom";
import "./FormNavBar.css";
import logo from "../Assets/logo.png";

function FormNavBar() {
  return (
    <nav className="FormNavBar">
      <div>
        {" "}
        <img src={logo} alt="" className="Logo" />
      </div>

      <div>
        <Link to="/Register">
          <button className="Join_button2">Join Us</button>
        </Link>
      </div>
    </nav>
  );
}

export default FormNavBar;
