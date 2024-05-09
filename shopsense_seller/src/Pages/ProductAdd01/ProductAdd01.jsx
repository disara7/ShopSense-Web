import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LoginImg from "../../Components/Assets/LoginImg.png";
import "./ProductAdd01.css";
import Register from "../Register/Register";
import SignUpNavBar from "../../Components/SignUpNavBar/SignUpNavBar";
import OccationDropdown from "../../Components/Occation_DropDown/Occation";
import Color from "../../Components/Color/Color";
import FitDropdown from "../../Components/Fit/fit";
import SizeDropdown from "../../Components/Size/Size";

function ProductAdd1() {
  return (
    <div>
      <SignUpNavBar />

      <div className="productpage">
        <div className="formheader">- Product Information -</div>

        <form>
          <div className="user__details">
            <div class="input__box">
              <span class="details">Product Name</span>
              <input type="text" placeholder="Product Name" required></input>
            </div>

            <div class="input__box">
              <span class="details">Price</span>
              <input type="text" placeholder="Price" required></input>
            </div>
            <div class="input__box">
              <span class="details">Color(S)</span>
              <Color />
            </div>
            <div class="input__box">
              <span class="details">Occation</span>
              <OccationDropdown />
            </div>

            <div class="input__box">
              <span class="details">Size</span>
              <SizeDropdown />
            </div>
            <div class="input__box">
              <span class="details">Brand</span>
              <input type="text" placeholder="Brand Name" required></input>
            </div>
            <div class="input__box">
              <span class="details">Fit</span>
              <FitDropdown />
            </div>

            <div class="input__box">
              <span class="details">Availability</span>
              <input type="text" placeholder="Availability" required></input>
            </div>
          </div>
        </form>
        <div className="buttonHolderProduct">
          <Link to="/ProductAdd2">
            <button className="NextBtnProduct">Next</button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default ProductAdd1;
