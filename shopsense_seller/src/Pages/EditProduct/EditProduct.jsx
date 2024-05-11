import { Link } from "react-router-dom";
import "./EditProduct.css";
import OccationDropdown from "../../Components/Occation_DropDown/Occation";
import Color from "../../Components/Color/Color";
import FitDropdown from "../../Components/Fit/fit";
import SizeDropdown from "../../Components/Size/Size";
import Dress from "../../Components/Assets/dress01.jpg";
import Dress2 from "../../Components/Assets/dress02.jpg";
import Dress3 from "../../Components/Assets/dress03.jpg";

function EditProduct() {
  return (
    <div className="productpage">
      <h2>
        <button className="BackProductEdit">
          <Link to="/Product" className="CustomLink">
            ↩
          </Link>
        </button>
        Product Details
      </h2>
      <div className="ProductImageHplder">
        <div className="ImageEditHolder">
          <span>✎</span>
          <img src={Dress} />
        </div>

        <div className="ImageEditHolder">
          <span>✎</span>
          <img src={Dress2} />
        </div>

        <div className="ImageEditHolder">
          <span>✎</span>
          <img src={Dress3} />
        </div>
      </div>

      <form>
        <div className="user__details">
          <div class="input__box">
            <span class="details">Product Name</span>
            <div className="EditBoxHolder">
              <input
                type="text"
                placeholder="Midnight Blue Velvet Dress"
                id="lockedInput"
                required
                readOnly
              ></input>
              <div>
                <button className="editbtn2">✎</button>
              </div>
            </div>
          </div>

          <div class="input__box">
            <span class="details">Price</span>
            <div className="EditBoxHolder">
              <input type="text" placeholder="690.00" required readOnly></input>
              <div>
                <button className="editbtn2">✎</button>
              </div>
            </div>
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
            <div className="EditBoxHolder">
              <input type="text" placeholder="Embark" required readOnly></input>
              <div>
                <button className="editbtn2">✎</button>
              </div>
            </div>
          </div>
          <div class="input__box">
            <span class="details">Fit</span>
            <FitDropdown />
          </div>

          <div class="input__box">
            <span class="details">Availability</span>
            <div className="EditBoxHolder">
              <input type="text" placeholder="25" required readOnly></input>
              <div>
                <button className="editbtn2">✎</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="buttonHolderProduct">
        <Link to="/ProductAdd2">
          <button className="NextBtnProduct">Save</button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default EditProduct;
