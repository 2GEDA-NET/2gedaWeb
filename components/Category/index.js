// pages/index.js
import React from 'react';
import CategoryCard from '../ui-components/CategoryCard';

const categoryData = [
    {
        id: 1,
        title: 'Phone and Devices',
        image: '/assets/categoryImg/phone_and_devices.png', // Replace with actual image URL
    },
    {
        id: 2,
        title: 'Automobile',
        image: '/assets/categoryImg/automobile.png', // Replace with actual image URL
    },
    {
        id: 3,
        title: 'Home and Property',
        image: '/assets/categoryImg/home_and_property.png', // Replace with actual image URL
    },
    {
        id: 4,
        title: 'Automobile',
        image: '/assets/categoryImg/automobile.png', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'Electronics',
        image: '/assets/categoryImg/electronics.png', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'Electronics',
        image: '/assets/categoryImg/electronics.png', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'Electronics',
        image: '/assets/categoryImg/electronics.png', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'Electronics',
        image: '/assets/categoryImg/electronics.png', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'Electronics',
        image: '/assets/categoryImg/electronics.png', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'Electronics',
        image: '/assets/categoryImg/electronics.png', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'Electronics',
        image: '/assets/categoryImg/electronics.png', // Replace with actual image URL
    },
    {
        id: 5,
        title: 'Electronics',
        image: '/assets/categoryImg/electronics.png', // Replace with actual image URL
    },
    // Add more categories here...
];

const Category = () => {
    return (
        <div>
            <CategoryCard categoryData={categoryData} />
        </div>
    );
};

export default Category;
