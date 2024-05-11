import { Link } from "react-router-dom";
import CompleteBar from "../../Components/CompleteBar/CompleteBar";
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBar from "../../Components/ButtonBar/ButtonBar";
import Stepper from "../../Stepper";
import "./Form.css";
import Form01 from "../RegistrationForm01/Form01";
import Form02 from "../RegistrationForm02/Form02";
import FormNavBar from "../../Components/FormNavBar/FormNavBar";
import Form03 from "../RegistrationForm03/Form3";
import Form04 from "../RegistrationForm04/Form04";
export default function Form() {
  const list = [<Formdata01 />, <Formdata02 />, <Formdata03 />, <Formdata04 />];
  return (
    <div className="Form">
      <FormNavBar />
      <br /> <br /> <br />
      <br /> <br /> <br />
      <Stepper list={list} />
    </div>
  );
}

const Formdata01 = ({ onPrev, onNext }) => {
  return (
    <>
      <Form01 />
      <div className="Buttonholdermainpage">
        <button onClick={onNext} className="Nextbtn">
          Next
        </button>
      </div>
    </>
  );
};

const Formdata02 = ({ onPrev, onNext }) => {
  return (
    <>
      <Form02 />
      <div>
        <div className="Buttonholdermainpage">
          <button onClick={onPrev} className="Backbtn">
            Back
          </button>
          <button onClick={onNext} className="Nextbtn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const Formdata03 = ({ onPrev, onNext }) => {
  return (
    <>
      <Form03 />
      <div>
        <div className="Buttonholdermainpage">
          <button onClick={onPrev} className="Backbtn">
            Back
          </button>
          <button onClick={onNext} className="Nextbtn">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

const Formdata04 = ({ onPrev, onNext }) => {
  return (
    <>
      <Form04 />
      <div>
        <div className="Buttonholdermainpage">
          <button onClick={onPrev} className="Backbtn">
            Back
          </button>
          <Link to="/ProductAdd1">
            <button className="Nextbtn">ADD NEW PRODUCT</button>
          </Link>
        </div>
      </div>
    </>
  );
};
