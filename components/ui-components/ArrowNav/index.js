import React, { useState } from 'react';
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import styles from './ProfileNav.module.css';


const ArrowNav = ({navTitle}) => {

    const handleBackClick = () => {
        window.history.back();
    };

    return (
        <div className={styles.profileNavbar}>
            <div className={styles.backIcon}
                onClick={handleBackClick}>
                <FaArrowLeft />
            </div>
            <div className={styles.profileTitle}>
                {navTitle}
            </div>
            <div></div>
        </div>
    );
};

export default ArrowNav;