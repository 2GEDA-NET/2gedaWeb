// components/PostCard.js
import React from 'react';
import { FaThumbsUp, FaComment, FaThumbsDown, FaShareAlt } from 'react-icons/fa'; // Import icons
import styles from './PostCard.module.css'; // Create a CSS module for styling
import Comment from '../../CommentCard';

const PostCard = ({ user, timestamp, content, image }) => {

  
  const comments = [
    {
      id: 1,
      user,
      content: 'This is the first comment.',
      timestamp: '2 hours ago',
    },
    // Add more comments here...
  ];


  return (
    <>
      <div className={styles.postCard}>
        <div style={{ display: 'flex', }}>
          <img className={styles.userProfilePicture} src={user.profilePicture} alt="User Profile" />
          <div style={{ width: '100%' }}>
            <div className={styles.postHeader}>
              {/* <img className={styles.userProfilePicture} src={user.profilePicture} alt="User Profile" /> */}
              <div className={styles.postInfo}>
                <h2>{user.name}</h2>
                <p style={{ fontSize: '0.8em', fontWeight: 'bold', padding: '3px 0' }}>{user.occupation}</p>
                <p style={{ fontSize: '0.6em', }}>{user.location}</p>
                {/* <p>Posted on {timestamp}</p> */}
              </div>
              <p style={{ fontSize: '0.6em' }}>Posted on {timestamp}</p>
            </div>
            <hr />
          </div>
        </div>

        <div className={styles.postContent}>
          <p>{content}</p>
          <img src={image} alt="Post Content" />
        </div>
        <div className={styles.postActions}>
          <FaThumbsUp className={styles.actionButton} style={{ color: '#09CCF6', }} /> {/* Thumbs-up icon */}
          <FaComment className={styles.actionButton} style={{ color: '#41416E', }} /> {/* Comment icon */}
          <FaThumbsDown className={styles.actionButton} style={{ color: '#DF2020', }} /> {/* Comment icon */}
          <FaShareAlt className={styles.actionButton} style={{ color: '#757875', }} /> {/* Share icon */}
        </div>

      </div>
      <div>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            user={comment.user}
            content={comment.content}
            timestamp={comment.timestamp}
          />
        ))}
      </div>
    </>
  );
};

export default PostCard;
