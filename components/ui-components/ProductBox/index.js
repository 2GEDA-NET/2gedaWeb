import styles from './TrendingBox.module.css'
import React from 'react';
import Link from 'next/link';

const ProductBox = ({ productData }) => {
    return (
        <div className={styles.card}>
            {productData.map(trending => (
                <div key={trending.id}>
                    <Link href={`/dashboard/product/${trending.id}`} style={{textDecoration:'none', color:'black',}}>
                    <div>
                        {trending.attachment && trending.attachment.length > 0 && (
                            <img src={trending.attachment[0].path} alt={trending.product_name} style={{ width: '100px', height: '100px', borderRadius: '10px',}} />
                        )}
                    </div>
                    <div>
                        <p style={{ fontSize: '0.7em', }}>{trending.product_name}</p>
                        <h4>{trending.price}</h4>
                        <p style={{ fontSize: '0.6em', }}>{trending.tagLocation}</p>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductBox;