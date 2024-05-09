import { Link } from "react-router-dom";
import "./Form03.css";
import CompleteBar from "../../Components/CompleteBar/CompleteBar";
import FormNavBar from "../../Components/FormNavBar/FormNavBar";
import { useState } from "react";
import FileUploadComponent from "../../Components/FileUpload/FileUpload";
function Form03() {
  return (
    <div>
      <div className="form03">
        <div className="formheader">ID & Bank Account Information</div>

        <form>
          <h2>Verify Identification Card</h2>

          <div className="uploadfileholderform3">
            <div>
              <div>ID Card Front Side</div>
              <FileUploadComponent />
            </div>
            <div>
              <div>ID Card Back Side</div>
              <FileUploadComponent />
            </div>
          </div>

          <div className="user__details">
            <div class="input__box">
              <input
                type="text"
                placeholder="Name on the ID card"
                required
              ></input>
            </div>
            <div class="input__box">
              <input type="text" placeholder="ID Number" required></input>
            </div>
          </div>

          <h2>Verify Bank Account</h2>
          <p>
            Upload the Front Page for Bankbook/Bank Statement/Cheque Copy/Mobile
            Banking Screenshot
          </p>

          <FileUploadComponent />

          <div className="user__details">
            <div class="input__box">
              <input
                type="text"
                placeholder="Account Holder Name"
                required
              ></input>
            </div>
            <div class="input__box">
              <input type="text" placeholder="Bank Name" required></input>
            </div>
            <div class="input__box">
              <input type="text" placeholder="Branch Name" required></input>
            </div>
            <div class="input__box">
              <input type="text" placeholder="Bank Code" required></input>
            </div>

            <div class="input__box">
              <input type="text" placeholder="Account Number" required></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form03;
