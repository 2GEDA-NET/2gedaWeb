import React, { useState } from 'react'; // Import useState
import styles from './ProfileImage.module.css';
import ProfileNav from '@/components/ui-components/ProfileNav';
import ActionButton from '../ui-components/ActionButton';
import { FaCamera } from 'react-icons/fa'; // Import the camera icon from react-icons
import { useHistory } from 'react-router-dom'; // Import useHistory
import Link from 'next/link';


const ProfileImages = ({ coverImage, profileImage, name, bio, role, outlet, state, favQuote, posts, followers, following }) => {
    const [newImage, setNewImage] = useState(null); // Define newImage and setNewImage


    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            setNewImage(URL.createObjectURL(selectedImage));
        }
    };

    return (
        <div className={styles.profileImageContainer}>
            <ProfileNav />

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
                        <p className={styles.profileBio}>{role}</p>
                        <p className={styles.profileBio}>{state}</p>
                        <blockquote className={styles.profileBio}>
                            <em>"{favQuote}"</em>
                        </blockquote>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div style={{ padding: '10px', }} >
                            <ActionButton
                                label="Following"
                                inverse={true}
                                onClick={() => handleButtonClick()}
                                style={{ paddingLeft: '30px',paddingRight: '30px', margin: '0 20px', color: '#19A871', fontSize: '0.7em', borderColor: '#19A871' }}
                            />
                        </div>
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
                        <div style={{ padding: '10px', }} >
                            <ActionButton
                                label="Direct Message"
                                inverse={true}
                                onClick={() => handleButtonClick()}
                                style={{ margin: '0 20px', fontSize: '0.7em', color: 'white', backgroundColor: 'black' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfileImages;
