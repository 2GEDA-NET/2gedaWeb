import React, { useState, useEffect } from 'react';
import ProductBox from '../ui-components/ProductBox';
import TrendingBox from '../ui-components/ProductBox'

const Trending = () => {
        const [trendingData, setTrendingData] = useState([]);

    useEffect(() => {
        // Fetch category data from the API
        fetch('https://api.2geda.net/store/outlet-items')
            .then(response => response.json())
            .then(data => {
                setTrendingData(data.items.trending);
            })
            .catch(error => {
                console.error('Error fetching category data:', error);
            });
    }, []);


    
    return (
        <>
            <div style={{margin: '20px', background: 'white', borderRadius: '10px', padding: '20px',}}>
                <h4 style={{color: 'rgba(0 0 0 0.80)', marginBottom: '20px',}}>Trending and hot</h4>
                <ProductBox
                    productData = {trendingData}
                />
            </div>
        </>
    );
};

export default Trending;