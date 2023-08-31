
import React, { useState, useEffect } from 'react';
import CategoryCard from '../ui-components/CategoryCard';

const Category = () => {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        // Fetch category data from the API
        fetch('https://api.2geda.net/store/outlet-items')
            .then(response => response.json())
            .then(data => {
                setCategoryData(data.categories);
            })
            .catch(error => {
                console.error('Error fetching category data:', error);
            });
    }, []);

    return (
        <div>
            <CategoryCard categoryData={categoryData} />
        </div>
    );
};

export default Category;
