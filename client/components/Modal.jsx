import React from 'react';
// import './Modal.css';

const Modal = (props) => {
  const {
    handleClose,
    menuText,
    children
  } = props;

  const text = menuText ? 'View Full Menu' : 'Collapse Menu';

  return (
    <div className="modal">
      <div className="modal-main">
        {children}
        <button type="button" className="centered btnExpand" onClick={handleClose}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default Modal;
