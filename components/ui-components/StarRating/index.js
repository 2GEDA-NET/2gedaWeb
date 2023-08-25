import React from 'react';
import { FaStar } from 'react-icons/fa';
import styles from './StarRating.module.css'

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'filled' : 'empty'}>
          <FaStar />
        </span>
      );
    }
    return stars;
  };

  return <div className = {styles.starRating}>{renderStars()}</div>;
};

export default StarRating;
