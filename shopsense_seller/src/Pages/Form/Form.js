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
export default function Form() {
  const list = [<Example1 />, <Example2 />, <Example3 />, <Example4 />];
  return (
    <div className="Form">
      <FormNavBar />
      <br /> <br /> <br />
      <Stepper list={list} />
    </div>
  );
}

const Example1 = ({ onPrev, onNext }) => {
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

const Example2 = ({ onPrev, onNext }) => {
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

const Example3 = ({ onPrev, onNext }) => {
  return (
    <>
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

const Example4 = ({ onPrev, onNext }) => {
  return (
    <>
      <div>
        <div className="Buttonholdermainpage">
          <button onClick={onPrev} className="Backbtn">
            Back
          </button>
          <button onClick={onNext} className="Nextbtn">
            ADD NEW PRODUCT
          </button>
        </div>
      </div>
    </>
  );
};
