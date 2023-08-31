import React, { useState, useRef } from 'react';
import { Picker } from 'emoji-mart';
import { MdImage, MdVideocam, MdClose } from 'react-icons/md';
import ActionButton from '../ui-components/ActionButton';
import { MdSentimentVerySatisfied } from 'react-icons/md';


const PostTextarea = ({ onPostSubmit }) => {
    const [postText, setPostText] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [uploadedVideos, setUploadedVideos] = useState([])
    const imageFileInputRef = useRef(null);
    const videoFileInputRef = useRef(null)

    const fileInputRef = useRef(null); // Create a ref for the file input element

    const createPost = async () => {
        try {
          const formData = new FormData();
          formData.append('text', postText);
          uploadedImages.forEach((image) => {
            formData.append('images', image);
          });
          uploadedVideos.forEach((video) => {
            formData.append('videos', video);
          });
    
          const response = await fetch('https://api.2geda.net/posts/create-post', {
            method: 'POST',
            body: formData,
            headers: {
              Authorization: 'Bearer YOUR_ACCESS_TOKEN',
            },
          });
    
          if (response.ok) {
            // Post created successfully
            setPostText('');
            setUploadedImages([]);
            setUploadedVideos([]);
            onPostSubmit(); // Optionally, trigger a callback to refresh the feed
          } else {
            // Handle error
            console.error('Error creating post');
          }
        } catch (error) {
          console.error('Error creating post', error);
        }
      };

      const handlePostSubmit = () => {
        if (postText.trim() !== '' || uploadedImages.length > 0 || uploadedVideos.length > 0) {
          createPost(); // Call the API function to create the post
        }
      };

    const handleEmojiSelect = (emoji) => {
        setPostText(postText + emoji.native);
    };

    const handleTextareaChange = (e) => {
        const newText = e.target.value;
        const wordCount = newText.split(/\s+/).length - 1; // Count words
        if (wordCount <= 1000) {
            setPostText(newText);
        }
    };

    const handleAddImageClick = () => {
        // Trigger the file input to open
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const removeImage = (index) => {
        const updatedImages = uploadedImages.filter((_, i) => i !== index);
        setUploadedImages(updatedImages);
    };

    const removeVideo = (index) => {
        const updatedVideos = uploadedVideos.filter((_, i) => i !== index);
        setUploadedVideos(updatedVideos);
    };



    const handleImageUpload = (e) => {
        const selectedFiles = e.target.files;
        const remainingSlots = 20 - uploadedImages.length;

        if (selectedFiles && selectedFiles.length <= remainingSlots) {
            const newImages = Array.from(selectedFiles).filter(file => file.type.startsWith('image/'));
            const urls = newImages.map(file => URL.createObjectURL(file));
            setUploadedImages([...uploadedImages, ...urls]);
        } else {
            alert('You can upload up to ' + remainingSlots + ' more images.');
        }
    };

    const handleVideoUpload = (e) => {
        const selectedFiles = e.target.files;
        const remainingSlots = 20 - uploadedVideos.length;

        if (selectedFiles && selectedFiles.length <= remainingSlots) {
            const newVideos = Array.from(selectedFiles).filter(file => file.type.startsWith('video/'));
            const urls = newVideos.map(file => URL.createObjectURL(file));
            setUploadedVideos([...uploadedVideos, ...urls]);
        } else {
            alert('You can upload up to ' + remainingSlots + ' more videos.');
        }
    };

    const wordCount = postText.split(/\s+/).filter(Boolean).length; // Count words without empty strings

    return (
        <div style={{
            background: '#ffffff',
            borderRadius: '10px',
            // width: '50%',
            // height: '300px',
            margin: '10px 20px',
            padding: '20px',
        }}>
            <p style={{ fontSize: '1em' }}>Post on Feed</p>
            <textarea
                placeholder="Write up to 1000 words"
                value={postText}
                style={{
                    resize: 'none',
                    background: 'none',
                    border: 'none',
                    margin: '5px',
                    padding: '10px',
                    width: '100%',
                    height: '180px',
                    fontFamily: 'inherit',
                    overflow: 'auto',
                    outline: 'none',
                }}
                onChange={handleTextareaChange}
            />
            {/* Word count */}
            <p style={{ fontSize: '0.8em', color: wordCount <= 1000 ? 'black' : 'red' }}>
                {wordCount} / 1000 words
            </p>
            {/* Display uploaded images */}
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '10px', overflow: 'auto', }}>
                {uploadedImages.map((image, index) => (
                    <div key={index} style={{ position: 'relative', marginRight: '10px' }}>
                        <img
                            src={image}
                            alt={`Uploaded Image ${index}`}
                            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                        />
                        <MdClose
                            size={20}
                            style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', color: '#ffffff', }}
                            onClick={() => removeImage(index)}
                        />
                    </div>
                ))}
            </div>

            {/* Display uploaded videos */}
            <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'auto', }}>
                {uploadedVideos.map((video, index) => (
                    <div key={index} style={{ position: 'relative', marginRight: '10px' }}>
                        <video controls style={{ width: '100px', height: '100px', objectFit: 'cover' }}>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <MdClose
                            size={20}
                            style={{ position: 'absolute', top: '5px', right: '5px', cursor: 'pointer', color: '#ffffff' }}
                            onClick={() => removeVideo(index)}
                        />
                    </div>
                ))}
            </div>

            <div style={{ justifyContent: 'space-between', display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex' }}>
                    {/* Image upload */}
                    <div>
                        <div className="image-icon" onClick={() => imageFileInputRef.current.click()} style={{ color: 'grey', cursor: 'pointer' }}>
                            <MdImage size={24} />
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            ref={imageFileInputRef}
                            onChange={handleImageUpload}
                            multiple
                        />
                    </div>

                    {/* Video upload */}
                    <div>
                        <div className="image-icon" onClick={() => videoFileInputRef.current.click()} style={{ color: 'grey', cursor: 'pointer' }}>
                            <MdVideocam size={24} />
                        </div>
                        <input
                            type="file"
                            accept="video/*"
                            style={{ display: 'none' }}
                            ref={videoFileInputRef}
                            onChange={handleVideoUpload}
                            multiple
                        />
                    </div>

                    {/* Emoji picker */}
                    {/* Emoji picker */}
                    <div className="emoji-toggle" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                        <MdSentimentVerySatisfied size={24} style={{ color: 'grey', }} />
                    </div>

                    {showEmojiPicker && (
                        <Picker
                            onSelect={handleEmojiSelect}
                            emojiSize={24}
                            title="Pick an emoji"
                        />
                    )}


                </div>
                {/* Post button */}
                <ActionButton
                    label='Post'
                    inverse={false}
                    onClick={handlePostSubmit}
                    style={{ padding: '10px 50px' }}
                />
            </div>

        </div>
    );
};

export default PostTextarea;
