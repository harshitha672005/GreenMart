import React from "react";

import "./Modall.css";

const Modal = ({ onSubmit, closeModal, children }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal()}
        >
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={() => onSubmit()}
          >
            DONE
          </button>
          
        </div>
      </div>
    </div>
  );
};
export default Modal