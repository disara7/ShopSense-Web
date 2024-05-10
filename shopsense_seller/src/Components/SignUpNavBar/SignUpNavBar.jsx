import { Link } from "react-router-dom";
import "./SignUpNavBar.css";
import logo from "../Assets/logo.png";
import Bell from "../Notification/bell";
import Profile from "../Assets/Profile.jpg";

function SignUpNavBar() {
  return (
    <nav className="FormNavBar">
      <div>
        <img src={logo} alt="" className="Logo" />
      </div>
      <div className="profilebar">
        <Bell />
        <img src={Profile} className="ProfileImg" />
      </div>
    </nav>
  );
}

export default SignUpNavBar;
