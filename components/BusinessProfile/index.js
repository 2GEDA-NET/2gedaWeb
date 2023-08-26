import React, { useState } from 'react'; // Import useState
import styles from './BusinessProfile.module.css';
import ActionButton from '../ui-components/ActionButton';
import { FaCamera } from 'react-icons/fa'; // Import the camera icon from react-icons
import { useHistory } from 'react-router-dom'; // Import useHistory
import Link from 'next/link';
import StarRating from '../ui-components/StarRating';



const BusinessProfile = ({ coverImage, profileImage, rating, name, state, posts, followers, following }) => {

    const [newImage, setNewImage] = useState(null); // Define newImage and setNewImage


    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            setNewImage(URL.createObjectURL(selectedImage));
        }
    };


    return (
        <div className={styles.profileImageContainer}>
            <div className={styles.coverImage}>
                <img src={coverImage} alt="Cover" />
            </div>
            <div className={styles.profileDetails}>
                <div className={styles.profilePicture}>
                    <img src={profileImage} alt="Profile" />
                    <div className={styles.cameraIcon}>
                        <label htmlFor="imageInput">
                            <FaCamera />
                        </label>
                        <input
                            type="file"
                            id="imageInput"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
                <div className={styles.profileInfo}>
                    <div>
                        <h2 className={styles.profileName}>{name}</h2>
                        <p className={styles.profileBio}>{state}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div className={styles.profileBox}>
                            <div>
                                <p className={styles.heading} >Posts</p>
                                <p className={styles.subheading}>{posts}</p>
                            </div>
                            <div style={{ margin: '0 40px' }}>
                                <p className={styles.heading} >Following</p>
                                <p className={styles.subheading}>{following}</p>
                            </div>
                            <div >
                                <p className={styles.heading} >Followers</p>
                                <p className={styles.subheading} >{followers}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ margin: '10px', }}>
                        <StarRating />
                    </div>
                    <p className={styles.subheading} >Average rating:{rating}</p>
                </div>
            </div>

        </div>
    );
};

export default BusinessProfile;