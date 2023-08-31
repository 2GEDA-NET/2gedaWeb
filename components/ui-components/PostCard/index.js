import React, { useState } from 'react';
import { FaThumbsUp, FaComment, FaThumbsDown, FaShareAlt } from 'react-icons/fa'; // Import icons
import styles from './PostCard.module.css'; // Create a CSS module for styling
import Comment from '../../CommentCard';

const PostCard = ({ user, timestamp, state, content, image, occupation, comments = [], likes, profilePicture, comment_count, retweet_count, dislikes }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const maxWords = 20; // Maximum number of words to show initially

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  // Split the content into words
  const words = content.split(' ');

  // Create the truncated content
  const truncatedContent = words.slice(0, maxWords).join(' ');

  return (
    <div style={{}}>
      <div className={styles.postCard}>
        <div style={{ display: 'flex', }}>
          <img className={styles.userProfilePicture} src={profilePicture} alt="User Profile" />
          <div style={{ width: '100%' }}>
            <div className={styles.postHeader}>
              {/* <img className={styles.userProfilePicture} src={user.profilePicture} alt="User Profile" /> */}
              <div className={styles.postInfo}>
                <h2>{user}</h2>
                <p style={{ fontSize: '0.8em', fontWeight: 'bold', padding: '3px 0' }}>{occupation}</p>
                <p style={{ fontSize: '0.6em', }}>{state}</p>
                {/* <p>Posted on {timestamp}</p> */}
              </div>
              <p style={{ fontSize: '0.7em' }}>{timestamp}</p>
            </div>
            <hr />
          </div>
        </div>

        <div className={styles.postContent}>
          <p>
            {showFullContent ? content : truncatedContent}
            {words.length > maxWords && (
              <p onClick={toggleContent}>
                {showFullContent ? 'See Less' : 'See More'}
              </p>
            )}
          </p>
          <img src={image} style={{ maxWidth: '100%', height: '500px', }} alt="Post Content" />
        </div>
        <div className={styles.postActions}>
          <div>
            <FaThumbsUp className={styles.actionButton} style={{ color: '#09CCF6', }} /> {/* Thumbs-up icon */}
            <p>{likes}</p>
          </div>
          <div>
            <FaComment className={styles.actionButton} style={{ color: '#41416E', }} /> {/* Comment icon */}
            <p>{comment_count}</p>
          </div>
          <div>
            <FaThumbsDown className={styles.actionButton} style={{ color: '#DF2020', }} /> {/* Comment icon */}
            <p>{dislikes}</p>
          </div>
          <div>
            <FaShareAlt className={styles.actionButton} style={{ color: '#757875', }} /> {/* Share icon */}
            <p>{retweet_count}</p>
          </div>
        </div>

      </div>
      <div className={styles.commentsContainer}>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            user={comment.user}
            content={comment.content}
            timestamp={comment.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
