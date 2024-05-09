import { Link } from "react-router-dom";
import "./Form03.css";
import CompleteBar from "../../Components/CompleteBar/CompleteBar";
import FormNavBar from "../../Components/FormNavBar/FormNavBar";
import { useState } from "react";
import FileUpload from "../../Components/FileUpload/FileUpload";
function Form03() {
  return (
    <div>
      <div className="form03">
        <div className="formheader">
          Hey Seller, How about we get to know you better?
        </div>
        <div className="uploadfileholderform3">
          <FileUpload />
        </div>

        <form>
          <h2>Verify Identification Card</h2>
          <div className="IdUploadHolder"></div>
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

export default Form03;
