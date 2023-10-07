import React from "react";
import cl from "./MyOutput.module.css";

const MyOutput = ({ password, setIsCopied }) => {
  const copy = () => {
    navigator.clipboard.writeText(password);
    setIsCopied(true);
  };

  return (
    <div className={cl.output_block}>
      <input
        className={cl.output}
        readOnly
        placeholder="Password"
        value={password}
      ></input>
      <button className={cl.btn_copy} onClick={copy}>
        &#128190;
      </button>
    </div>
  );
};

export default MyOutput;
