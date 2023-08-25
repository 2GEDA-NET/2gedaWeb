// components/Comment.js
import React, { useState } from 'react';
import styles from './Comment.module.css';
import ActionButton from '../ui-components/ActionButton';

const Comment = ({ user, content, timestamp }) => {
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handlePostComment = () => {
        // Add logic here to post the new comment
        console.log('Posting comment:', newComment);
        setNewComment('');
    };

    return (
        <div className={styles.comment}>
            <img className={styles.userProfilePicture} src={user.profilePicture} alt="User Profile" />
            <div className={styles.commentContent}>
                <h3>{user.name}</h3>
                <p>{content}</p>
                <span className={styles.timestamp}>{timestamp}</span>
                <div className={styles.postCommentSection}>
                    <textarea
                        className={styles.commentInput}
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={handleCommentChange}
                        style={{ width: '100%', margin:'10px', }} // Add this line to set the width
                    />

                    <ActionButton
                        label='Post'
                        inverse={false}
                        className={styles.postButton}
                        onClick={handlePostComment}
                        style={{ padding: '10px 50px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Comment;
