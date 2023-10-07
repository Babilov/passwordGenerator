import React, { useState } from "react";

import MyCheckBoxGroup from "../checkbox/MyCheckBoxGroup";
import MyOutput from "../output/MyOutput";
import MyRange from "../range/MyRange";
import MyModal from "../modal/MyModal";
import MyButton from "../Buttons/MyButton";
import cl from "./MyPasswordForm.module.css";

const MyPasswordForm = () => {
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setisLowercase] = useState(false);
  const [isNumbers, setisNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [rangeValue, setRangeValue] = useState(10);
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className={cl.form}>
      <h2>Password Generator</h2>
      <MyOutput
        password={password}
        isCopied={isCopied}
        setIsCopied={setIsCopied}
      ></MyOutput>
      <MyRange rangeValue={rangeValue} setRangeValue={setRangeValue}></MyRange>
      <MyCheckBoxGroup
        setIsUppercase={setIsUppercase}
        setisLowercase={setisLowercase}
        setisNumbers={setisNumbers}
        setIsSymbols={setIsSymbols}
      ></MyCheckBoxGroup>
      <MyButton
        isUppercase={isUppercase}
        isLowercase={isLowercase}
        isNumbers={isNumbers}
        isSymbols={isSymbols}
        rangeValue={rangeValue}
        setPassword={setPassword}
        setIsError={setIsError}
      ></MyButton>
      <MyModal isError={isError} setIsError={setIsError}></MyModal>
    </div>
  );
};

export default MyPasswordForm;
