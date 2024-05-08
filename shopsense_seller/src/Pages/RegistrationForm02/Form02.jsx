import { Link } from "react-router-dom";
import "./Form02.css";
import CompleteBar from "../../Components/CompleteBar/CompleteBar";
import FormNavBar from "../../Components/FormNavBar/FormNavBar";
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBar from "../../Components/ButtonBar/ButtonBar";
import Form from "../Form/Form";
function Form02() {
  const history = useNavigate();

  return (
    <div>
      <div className="form01">
        <div className="formheader">Address Information</div>

        <form>
          <div className="user__details">
            <div class="input__box">
              <span class="details">Store Address</span>
              <input type="text" placeholder="State" required></input>
              <br />
              <input type="text" placeholder="Area" required></input>
              <br />
              <input type="text" placeholder="District" required></input>
            </div>

            <div class="input__box">
              <span class="details">Full Address</span>
              <textarea
                type="text"
                placeholder="Enter Full Address
                "
                className="Adressform2"
                required
              ></textarea>
              <div className="ToggleSwitchHolder">
                <ToggleSwitch label="Pickup Address" />
                <ToggleSwitch label="Return Address" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form02;
