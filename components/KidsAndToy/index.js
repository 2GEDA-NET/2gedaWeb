import React, { useState, useEffect } from 'react';
import ProductBox from '../ui-components/ProductBox';
import TrendingBox from '../ui-components/ProductBox';

const KidsAndToy = () => {

    const [kidsAndToyData, setkidsAndToyData] = useState([]);

    useEffect(() => {
        // Fetch category data from the API
        fetch('https://api.2geda.net/store/outlet-items')
            .then(response => response.json())
            .then(data => {
                setkidsAndToyData(data.items.kidsAndToy);
            })
            .catch(error => {
                console.error('Error fetching category data:', error);
            });
    }, []);


    return (
        <>
            <div style={{ margin: '20px', background: 'white', borderRadius: '10px', padding: '20px', }}>
                <h4 style={{ color: 'rgba(0 0 0 0.80)', marginBottom: '20px', }}>Kids and Toy</h4>
                <ProductBox
                    productData={kidsAndToyData}
                />
            </div>
        </>
    );
};

export default KidsAndToy;