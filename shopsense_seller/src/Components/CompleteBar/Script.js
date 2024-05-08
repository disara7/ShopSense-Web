import React, { useState } from "react";

function MyComponent() {
  const [current, setCurrent] = useState(1);

  const nextStep = () => {
    setCurrent(current + 1);
  };

  const prevStep = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
    alert("Your Form Successfully Signed up");
  };

  return (
    <div className="slide-page">
      {/* Your content goes here */}

      {/* Buttons */}
      {current === 1 && (
        <button className="firstNext" onClick={nextStep}>
          Next
        </button>
      )}
      {current === 2 && (
        <button className="next-1" onClick={nextStep}>
          Next
        </button>
      )}
      {current === 3 && (
        <button className="next-2" onClick={nextStep}>
          Next
        </button>
      )}
      {current === 4 && (
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      )}
      {current > 1 && (
        <button className={`prev-${current - 1}`} onClick={prevStep}>
          Previous
        </button>
      )}

      {/* Progress */}
      <div className="progress-bar">
        <div className="step" style={{ opacity: current >= 1 ? 1 : 0.5 }}>
          1
        </div>
        <div className="step" style={{ opacity: current >= 2 ? 1 : 0.5 }}>
          2
        </div>
        <div className="step" style={{ opacity: current >= 3 ? 1 : 0.5 }}>
          3
        </div>
        <div className="step" style={{ opacity: current >= 4 ? 1 : 0.5 }}>
          4
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
