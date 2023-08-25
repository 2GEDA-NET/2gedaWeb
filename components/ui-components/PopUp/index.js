import React from 'react';

const PopUpModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ul>
            <li>ehjjghjchjg</li>
        </ul>
        {/* Dropdown content */}
        {/* ... */}
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUpModal;
