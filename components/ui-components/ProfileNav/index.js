import { FaArrowLeft, FaBars } from 'react-icons/fa';
import styles from './ProfileNav.module.css'
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import PopUpModal from '../PopUp';


const Overlay = ({ cursorPosition, onClose }) => {
    const handleOverlayClick = (event) => {
        // Prevent the click event from propagating to the content
        event.stopPropagation();
        // Close the overlay when clicking outside of it
        onClose();
    };

    const overlayStyle = {
        top: cursorPosition.y,
        left: cursorPosition.x,
    };

    return (
        <div className={styles.overlay} style={overlayStyle} onClick={handleOverlayClick}>
            <div className={styles.overlayContent}>
                {/* Content for the overlay */}
                <ul>
                    <li>Menu Item 1</li>
                    <li>Menu Item 2</li>
                    <li>Menu Item 3</li>
                </ul>
            </div>
        </div>
    );
};

const ProfileNav = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMenuClick = (event) => {
    const { clientX, clientY } = event;
    setCursorPosition({ x: clientX, y: clientY });
    setShowOverlay(true);
  };

    const handleBackClick = () => {
        window.history.back();
    };

    const handleOverlayClose = () => {
        setShowOverlay(false);
    };
    return (
        <>
            <div className={styles.profileNavbar}>
                <div className={styles.backIcon}
                    onClick={handleBackClick}>
                    <FaArrowLeft />
                </div>
                <div className={styles.profileTitle}>
                    User Profile
                </div>
                <div>
                    <div className={styles.menuIcon} onClick={handleMenuClick}>
                        <FaBars />
                    </div>
                </div>

            </div>
            {showOverlay && <Overlay cursorPosition={cursorPosition} onClose={handleOverlayClose} />}

        </>
    );
};

export default ProfileNav;