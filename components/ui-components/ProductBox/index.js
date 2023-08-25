import styles from './TrendingBox.module.css'
import React from 'react';


const ProductBox = ({ productData }) => {
    return (
        <div className={styles.card}>
            {productData.map(trending => (
                <div>
                    <div>
                        <img src={trending.image} alt={trending.name} style={{ width: '', }} />
                    </div>
                    <div>
                        <p style={{ fontSize: '0.7em', }}>{trending.name}</p>
                        <h4>{trending.price}</h4>
                        <p style={{ fontSize: '0.6em', }}>{trending.location}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductBox;