import React, { useState, useEffect } from 'react';
import ProductBox from '../ui-components/ProductBox';
import TrendingBox from '../ui-components/ProductBox'

const Automobile = () => {

     const [automobileData, setAutomobileData] = useState([]);

    useEffect(() => {
        // Fetch category data from the API
        fetch('https://api.2geda.net/store/outlet-items')
            .then(response => response.json())
            .then(data => {
                setAutomobileData(data.items.Automobile);
            })
            .catch(error => {
                console.error('Error fetching category data:', error);
            });
    }, []);


    return (

        <div style={{ margin: '20px', background: 'white', borderRadius: '10px', padding: '20px', }}>
            <h4 style={{ color: 'rgba(0 0 0 0.80)', marginBottom: '20px', }}>Automobile</h4>
            <ProductBox
                productData={automobileData}
            />
        </div>

    );
};

export default Automobile;