import React, { useState } from "react";
import "./Occation.css";

const OccationDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [otherInput, setOtherInput] = useState("");
  const options = [
    "Work",
    "Everyday",
    "Special Occasion",
    "Sports",
    "Outdoor",
    "Other",
  ];

  const handleSelectOption = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue !== "Other") {
      // Reset other input when selecting a non-"Other" option
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
        className="select-input"
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
        <div>
          <input
            placeholder="Type your option"
            id="otherInput"
            type="text"
            value={otherInput}
            onChange={handleOtherInputChange}
            disabled // Disable input field if option is not "Other"
          />
        </div>
      )}
    </div>
  );
};

export default OccationDropdown;
