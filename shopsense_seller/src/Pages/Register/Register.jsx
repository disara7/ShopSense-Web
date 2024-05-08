import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import RegisterImg from "../../Components/Assets/RegisterImg.png";
import "./Register.css";
import logo from "../../Components/Assets/logo.png";
import Arrow from "../../Components/Assets/Arrow.png";

function Register() {
  return (
    <div>
      <div className="Registersection">
        <div className="RegisterImageBar">
          <img src={RegisterImg} className="RegisterMainImg" />
          <div className="Registerimgtexrbar">
            <div className="LogosectionRegister">
              <span>
                <img src={logo} className="logoRegister" />
              </span>
              <span>
                <img src={Arrow} />
              </span>
            </div>
            <p>
              ShopSense elevates online shopping experience to blind people
              through “taps” on the screen, with artificial intelligence.
            </p>
          </div>
        </div>

        <div className="RegisterContent">
          <div className="headersectionRegister">
            <div className="Loginhead1">SHOPSENSE</div>
            <span className="Loginhead2">Let’s Start !</span>
          </div>
          <br />
          <label className="registerlable">Phone</label>
          <br />
          <input
            placeholder="Enter Phone number"
            className="emaillogin"
          ></input>{" "}
          <label className="registerlable">Password</label>
          <br />
          <input
            placeholder="Enter password"
            className="passwordlogin"
            type="password"
          ></input>{" "}
          <input
            placeholder="Confirm Password "
            className="passwordlogin"
            type="password"
          ></input>
          <button className="Signinbtn">
            <Link to="/Form01" className="CustomLink2">
              NEXT
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
