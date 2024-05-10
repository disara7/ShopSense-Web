import "./adminNav.css";
import logo from "../../../Components/Assets/logo.png";
import Bell from "../../../Components/Notification/bell";
import Profile from "../../../Components/Assets/Profile.jpg";

function AdminNav() {
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

export default AdminNav;
