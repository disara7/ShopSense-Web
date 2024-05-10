import { Link } from "react-router-dom";
import "./Form04.css";
import CompleteBar from "../../Components/CompleteBar/CompleteBar";
import FormNavBar from "../../Components/FormNavBar/FormNavBar";
import { useState } from "react";
import ProductImg from "../../Components/Assets/Product.png";

function Form04() {
  return (
    <div>
      <div className="form04">
        <div className="formheader">Hey Seller, Add your first product</div>
        <img src={ProductImg} className="productImg" />
        <p className="paragraphform04">
          Sell on ShopSense by completing the first 3 verification steps, and
          adding at least 1 product to your shop. You can also earn rewards
          (such as a free-shipping budget) by completing the new seller
          challenges within the first 30 days after verification.
        </p>
      </div>
    </div>
  );
}

export default Form04;
