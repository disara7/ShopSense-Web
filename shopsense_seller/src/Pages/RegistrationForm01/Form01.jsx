import { Link } from "react-router-dom";
import "./Form01.css";
import CompleteBar from "../../Components/CompleteBar/CompleteBar";
import FormNavBar from "../../Components/FormNavBar/FormNavBar";

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function Form01() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <div className="form01">
        <div className="formheader">
          Hey Seller, How about we get to know you better?
        </div>

        <form>
          <div className="user__details">
            <div class="input__box">
              <span class="details">Your Store Name</span>
              <input
                type="text"
                placeholder="Enter Store Name"
                required
              ></input>
            </div>
            <div class="input__box">
              <span class="details">Country</span>
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
            </div>
            <div class="input__box">
              <span class="details">Your Mobile Number</span>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                required
              ></input>
            </div>

            <div class="input__box">
              <span class="details">Email Address</span>
              <input
                type="text"
                placeholder="Enter Email Address"
                required
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form01;
