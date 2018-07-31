import React from 'react';
import styles from './Modal.css';

const Modal = ({ handleClose, menuText, children }) => {
  const text = menuText ? 'View Full Menu' : 'Collapse Menu';

  return (
    <div className="modal">
      <div className="modal-main">
        {children}
        <button className="centered btnExpand" onClick={handleClose}>{text}</button>
      </div>
    </div>
  );
};

export default Modal;