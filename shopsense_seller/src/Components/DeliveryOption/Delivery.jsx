import React, { useState } from "react";
import "./Delivery.css";

const Delivery = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherInput, setOtherInput] = useState("");
  const options = ["Cash on Delivery", "Card Payment", "Both"];

  const handleSelectOption = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue !== "Other") {
      setOtherInput("");
    }
  };

  const handleOtherInputChange = (event) => {
    setOtherInput(event.target.value);
  };

  return (
    <div className="occasion-dropdown-container">
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectOption}
        className="Dselect-input"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption === "Other" ? (
        <div>
          <input
            placeholder="Type your option"
            id="otherInput"
            type="text"
            value={otherInput}
            onChange={handleOtherInputChange}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Delivery;
