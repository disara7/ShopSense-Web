import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import LoginImg from "../../Components/Assets/LoginImg.png";
import "./ProductAdd02.css";
import Register from "../Register/Register";
import SignUpNavBar from "../../Components/SignUpNavBar/SignUpNavBar";
import OccationDropdown from "../../Components/Occation_DropDown/Occation";
import Color from "../../Components/Color/Color";
import FitDropdown from "../../Components/Fit/fit";
import SizeDropdown from "../../Components/Size/Size";
import FileUploadComponent from "../../Components/FileUpload/FileUpload";
import ProductUploadComponent from "../../Components/ProductUpload/ProductUpload";
import Delivery from "../../Components/DeliveryOption/Delivery";

function ProductAdd2() {
  return (
    <div className="pa-wrapper">
      <SignUpNavBar />
      <div className="productpage2">
        <div className="formheader">- Product Information -</div>
        <h2>Product Images</h2>
        <div className="Imageproduct02">
          <ProductUploadComponent />
          <ProductUploadComponent />
          <ProductUploadComponent />
          <ProductUploadComponent />
        </div>
        <h2>Model or Mannequin Measurements (Optional)</h2>
        <form>
          <div className="user__details">
            <div class="input__box">
              <input type="text" placeholder="Height"></input>
            </div>
            <div class="input__box">
              <input type="text" placeholder="Waist"></input>
            </div>

            <div class="input__box">
              <input type="text" placeholder="Bust/Chest"></input>
            </div>

            <div class="input__box">
              <input type="text" placeholder="Hip"></input>
            </div>
          </div>
        </form>

        <h2>Care Instructions</h2>
        <textarea
          className="producttextbox"
          placeholder="Enter Care Instruction"
        ></textarea>

        <h2>Delivery Information</h2>
        <form>
          <div className="user__details">
            <div class="input__box">
              <Delivery />
            </div>

            <div class="input__box">
              <input
                type="text"
                placeholder="Estimate Time(Days)"
                required
              ></input>
            </div>

            <div class="input__box">
              <input
                type="text"
                placeholder="Delivery Cost(LKR)"
                required
              ></input>
            </div>
          </div>
        </form>

        <div className="buttonHolderProduct">
          <Link to="/ProductAdd1">
            <button className="Backformbtn">Back</button>
          </Link>
          <Link to="/Dashboard">
            <button className="NextBtnProduct">Submit</button>{" "}
          </Link>
        </div>
      </div>
      <br /> <br /> <br />
    </div>
  );
}

export default ProductAdd2;
