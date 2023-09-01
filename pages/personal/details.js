import React, { useState } from 'react';
import AuthNav from "@/components/ui-components/AuthNav";
import styles from './Details.module.css';
import Input from "@/components/ui-components/Input";
import Link from "next/link";
import ActionButton from "@/components/ui-components/ActionButton";
import { FaCamera } from 'react-icons/fa';

const BusinessDetails = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCoverImage, setSelectedCoverImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;

                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Set the desired dimensions for the cropped image
                    const cropWidth = 134; // Adjust to your desired width
                    const cropHeight = 134; // Adjust to your desired height

                    // Calculate the aspect ratio of the initial image
                    const aspectRatio = img.width / img.height;

                    // Calculate the dimensions for cropping while maintaining the aspect ratio
                    let newWidth, newHeight;
                    if (aspectRatio >= 1) {
                        newWidth = cropWidth;
                        newHeight = cropWidth / aspectRatio;
                    } else {
                        newWidth = cropHeight * aspectRatio;
                        newHeight = cropHeight;
                    }

                    // Set the canvas dimensions to match the desired cropped dimensions
                    canvas.width = cropWidth;
                    canvas.height = cropHeight;

                    // Draw the selected image onto the canvas and crop it to the desired dimensions
                    ctx.drawImage(img, (img.width - newWidth) / 2, (img.height - newHeight) / 2, newWidth, newHeight, 0, 0, cropWidth, cropHeight);

                    // Convert the canvas content to a data URL
                    const croppedImage = canvas.toDataURL('image/jpeg'); // You can specify the format (e.g., 'image/jpeg')

                    setSelectedImage(croppedImage);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCoverImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;

                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Set the desired dimensions for the cropped image
                    const cropWidth = 234.6; // Adjust to your desired width
                    const cropHeight = 71.43; // Adjust to your desired height

                    // Calculate the aspect ratio of the initial image
                    const aspectRatio = img.width / img.height;

                    // Calculate the dimensions for cropping while maintaining the aspect ratio
                    let newWidth, newHeight;
                    if (aspectRatio >= 1) {
                        newWidth = cropWidth;
                        newHeight = cropWidth / aspectRatio;
                    } else {
                        newWidth = cropHeight * aspectRatio;
                        newHeight = cropHeight;
                    }

                    // Set the canvas dimensions to match the desired cropped dimensions
                    canvas.width = cropWidth;
                    canvas.height = cropHeight;

                    // Draw the selected image onto the canvas and crop it to the desired dimensions
                    ctx.drawImage(img, (img.width - newWidth) / 2, (img.height - newHeight) / 2, newWidth, newHeight, 0, 0, cropWidth, cropHeight);

                    // Convert the canvas content to a data URL
                    const croppedImage = canvas.toDataURL('image/jpeg'); // You can specify the format (e.g., 'image/jpeg')

                    setSelectedCoverImage(croppedImage);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={styles.main}>
            <AuthNav />

            <div style={{ padding: '100px 7%', }}>
                <h4 style={{ color: 'white', margin: '2px 0', }}>Basic Profile Details</h4>
                <div className={styles.container} style={{ display: 'flex', justifyContent: 'space-evenly', background: 'white', position: 'relative', }}>
                    <div>
                        <div style={{ textAlign: "center", padding: '40px', }}>
                            <h4 style={{ textAlign: "center", color: '#4F0DA3', }}>Fill Personal Details</h4>
                            <Input type="text" placeholder="First Name" inputContainerStyle={{ width: '300px', }} />
                            <Input type="text" placeholder="Last Name" />
                            <Input type="text" placeholder="Work" />
                            <Input type="text" placeholder="Current City" />
                            <div style={{ textAlign: 'left', }}>
                                <span style={{ fontSize: '0.6em', }}>Enter Date of Birth</span>
                                <Input type="date" placeholder="Date of Birth" />
                            </div>
                            <textarea placeholder="Bio" style={{ resize: 'none', background: '#eee', height: '100px', border: '0.2px solid #e9e8e8', borderRadius: '7px', outline: 'none', padding: '10px', width: '100%', }} />
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div style={{ textAlign: "left", padding: '40px', }}>
                            <div>
                                <h5>Select your Display Image</h5>
                                <div className={styles.container} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                                    <div className="image-preview" style={{ margin: '10px', }}>
                                        {selectedImage ? (
                                            <img src={selectedImage} alt="Selected" style={{ borderRadius: '200px', }} />
                                        ) : (
                                            <img src="/assets/initialProfileImg.png" alt="Initial" />
                                        )}
                                    </div>
                                    <div>
                                        <label className={styles.button}>
                                            <FaCamera style={{margin: '5px',}}/>
                                            <p>Select File</p>
                                            <input type="file" accept="image/*" onChange={handleImageChange} className={styles.inputFile} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div style={{ margin: '20px 0', }}>
                                <h5>Select your cover image</h5>
                                <div className={styles.container} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px', }}>

                                    <div className="image-preview" style={{ margin: '10px', }}>
                                        {selectedCoverImage ? (
                                            <img src={selectedCoverImage} alt="Selected" />
                                        ) : (
                                            <img src="/assets/initialCoverImg.png" alt="Initial" />
                                        )}
                                    </div>
                                    <div>
                                        <label className={styles.button}>
                                            <FaCamera style={{margin: '5px',}}/>
                                            <p>Select File</p>
                                            <input type="file" accept="image/*" onChange={handleCoverImageChange} className={styles.inputFile} />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div style={{ color: 'rgba(0, 0, 0, 0.30)' }}>
                                <p style={{ margin: '20px 0', }}>Images must clearly show your face, blurry images will not be <br />approved!</p>
                                <p>Logos and designs that do not correlate with the profile data and <br /> purpose will not be approved also.</p>
                            </div>
                            <ActionButton
                                label="Save & Continue"
                                inverse={false}
                                style={{ right: 10, bottom: 2, position: 'absolute', }}
                            />
                        </div>

                    </div>

                </div>
                <Link href='/business/details' style={{ color: 'white', textDecoration: 'none', }}>Switch to Business</Link>

            </div>
        </div>

    );
};

export default BusinessDetails;