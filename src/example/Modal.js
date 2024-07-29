import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";


const Modal = ({ onSubmit, onCancel, closeModal, children }) => {
  

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
          <Link to='/'>
          <button
            id="open-popup-btn"
            type="submit"
            className="btn-submit"
           
          >
            OK!
           
          </button></Link>
          
          {/* <button
            type="submit"
            className="btn-cancel"
            onClick={() => onCancel()}
          >
            NO
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;