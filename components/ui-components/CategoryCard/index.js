// components/CategoryCard.js
import React from 'react';
import styles from './CategoryCard.module.css';

const CategoryCard = ({ categoryData }) => {
  return (
    <>
    <div className={styles.categoryCard}>
      <h3 style={{color:'white',padding:'5px',}}>Select Category</h3>
      <div className={styles.categories}>
        {categoryData.map(category => (
          <div key={category.id} className={styles.categoryItem}>
            <img src={category.image} alt={category.title} />
            <p style={{fontSize:'0.8em',}}>{category.title}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default CategoryCard;
