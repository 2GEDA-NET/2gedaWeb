import React from 'react';
import styles from './NotificationPage.module.css'; // Import your CSS module
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import NotificationCard from '../ui-components/NotificationCard';

const NotificationPage = ({ isOpen, onClose }) => {
    const notifications = [
        {
            id: 1,
            image: '/assets/followers.png',
            name: 'james',
            desc: 'James likes your photo'
        },
        {
            id: 2,
            image: '/assets/followers.png',
            name: 'james',
            desc: 'James likes your photo'
        },
    ]
    return (
        <div className={`${styles.notificationPage} ${isOpen ? styles.open : ''}`}>
            {/* Your notification content goes here */}
            <div style={{ display: 'flex', color: 'white', justifyContent: 'space-between', alignItems: 'center', padding: '20px 10px', background: 'linear-gradient(180deg, #B469EF 0%, #4F0DA3 100%)' }}>
                <h4>Notifications</h4>
                <div className={styles.closeButton} onClick={onClose}>
                    <AiOutlineCloseCircle size={24} />
                </div>
            </div>
            <div>
                {/* NotificationCards here */}
                <NotificationCard notifications={notifications} />
            </div>
            <button style={{ padding: '5px', background: 'none', border: '0.5px solid grey', position: 'absolute', bottom: '10px', right: '10px', display: 'flex', alignItems: 'center' }}>
                <RiDeleteBinLine />
                <p style={{ padding: '0px 10px', }}>Clear</p>
            </button>
        </div>
    );
};

export default NotificationPage;
