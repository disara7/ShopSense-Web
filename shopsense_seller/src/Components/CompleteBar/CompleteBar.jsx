import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import RegisterImg from "../../Components/Assets/RegisterImg.png";
import "./CompleteBar.css";
import "./Script";

function CompleteBar() {
  return (
    <div class="container">
      <div class="progress-bar">
        <div class="step">
          <p>Add Profile</p>
          <div class="bullet">
            <span>1</span>
          </div>
          <div class="check fas fa-check"></div>
        </div>
        <div class="step">
          <p>Add Address</p>
          <div class="bullet">
            <span>2</span>
          </div>
          <div class="check fas fa-check"></div>
        </div>
        <div class="step">
          <p>Verify ID & Bank</p>
          <div class="bullet">
            <span>3</span>
          </div>
          <div class="check fas fa-check"></div>
        </div>
        <div class="step">
          <p>Add Product</p>
          <div class="bullet">
            <span>4</span>
          </div>
          <div class="check fas fa-check"></div>
        </div>
      </div>
    </div>
  );
}

export default CompleteBar;
