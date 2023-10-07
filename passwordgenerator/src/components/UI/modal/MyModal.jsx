import React from "react";
import cl from "./MyModal.module.css";

const MyModal = ({ isError, setIsError }) => {
  return (
    <div>
      {isError && (
        <form className={cl.modal}>
          <div className={cl.modalContent}>
            <span>Choise at least one option</span>
            <button onClick={() => setIsError(false)}>Ok</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MyModal;
