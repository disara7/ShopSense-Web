import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LoginImg from "../../Components/Assets/LoginImg.png";
import "./Login.css";
import Register from "../Register/Register";

function Login() {
  return (
    <div>
      <Navbar />

      <div className="Loginsection">
        <div className="LoginImageBar">
          <img src={LoginImg} className="LoginImg" />
        </div>

        <div className="LoginContent">
          <div className="headerlogin">
            <div className="Loginhead1">SHOPSENSE</div>
            <span className="Loginhead2">SELLER CENTER</span>
          </div>

          <p>
            Please login using the ShopeSense seller account
            <br />
            (do not use buyer account)
          </p>
          <input
            placeholder="Enter Email"
            type="Email"
            className="emaillogin"
          ></input>
          <input
            placeholder="Enter password"
            className="passwordlogin"
            type="password"
          ></input>
          <div className="foget">Forgot Password?</div>
          <button className="Signinbtn">SIGN IN</button>
          <div>
            Dont have an Account?{" "}
            <Link to="/Register" className="Registeinlogin">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
