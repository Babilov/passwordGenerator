import React from "react";

import getPasswordSymbols from "../../../utils/getPasswordSymbols";
import getPassword from "../../../utils/getPassword";
import cl from "./MyButton.module.css";

const MyButton = ({
  isUppercase,
  isLowercase,
  isNumbers,
  isSymbols,
  rangeValue,
  setPassword,
  setIsError,
}) => {
  const generate = () => {
    const allowedSymbols = getPasswordSymbols(
      isUppercase,
      isLowercase,
      isNumbers,
      isSymbols
    );
    getPassword(allowedSymbols, rangeValue, setPassword, setIsError);
  };

  return (
    <div className={cl.btn_block}>
      <button className={cl.btn} onClick={generate}>
        Generate Password
      </button>
    </div>
  );
};

export default MyButton;
