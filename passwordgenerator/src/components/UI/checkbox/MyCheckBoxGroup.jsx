import React from "react";

import "./toggle.css";

const MyCheckBoxGroup = ({
  setIsUppercase,
  setisLowercase,
  setisNumbers,
  setIsSymbols,
}) => {
  return (
    <div className="group">
      <label
        className="toggle"
        onClick={(e) => setIsUppercase(e.target.checked)}
      >
        <span className="toggle-label">Include Uppercase</span>
        <input className="toggle-checkbox" type="checkbox" />
        <div className="toggle-switch"></div>
      </label>
      <label
        className="toggle"
        onClick={(e) => setisLowercase(e.target.checked)}
      >
        <span className="toggle-label">Include Lowercase</span>
        <input className="toggle-checkbox" type="checkbox" />
        <div className="toggle-switch"></div>
      </label>

      <label className="toggle" onClick={(e) => setisNumbers(e.target.checked)}>
        <span className="toggle-label">Include Numbers</span>
        <input className="toggle-checkbox" type="checkbox" />
        <div className="toggle-switch"></div>
      </label>

      <label className="toggle" onClick={(e) => setIsSymbols(e.target.checked)}>
        <span className="toggle-label">Include Symbols</span>
        <input className="toggle-checkbox" type="checkbox" />
        <div className="toggle-switch"></div>
      </label>
    </div>
  );
};

export default MyCheckBoxGroup;
