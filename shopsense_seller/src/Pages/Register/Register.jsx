import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LoginImg from "../../Components/Assets/LoginImg.png";
import "./Register.css";

function Register() {
  return (
    <div>
      <Navbar />

      <div className="Loginsection">
        <div className="LoginImageBar">
          <img src={LoginImg} />
        </div>

        <div className="LoginContent">
          <h1>SHOPSENSE</h1>
          <h2>Seller center</h2>
          <p>
            Please login using the AliExpress seller account(do not use buyer
            account)
          </p>
          <input placeholder="Email or phone number"></input>
          <input placeholder="Enter password"></input>
          <span>Forget Password ?</span>
          <button>SIGN IS</button>
          <span>Dont have an Account ? Sign Up</span>
        </div>
      </div>
    </div>
  );
}

export default Register;
