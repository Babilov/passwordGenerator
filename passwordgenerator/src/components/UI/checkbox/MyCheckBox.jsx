import React from "react";

const MyCheckBox = ({ option }) => {
  return (
    <div>
      <span>{option}</span>
      <input type="checkbox" />
    </div>
  );
};

export default MyCheckBox;
