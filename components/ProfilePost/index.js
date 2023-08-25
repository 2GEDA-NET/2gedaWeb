// pages/index.js
import React from 'react';
import PostCard from '../ui-components/PostCard';

const user = {
    name: 'Benita Chukuemeka',
    occupation: 'Pharmacist',
    location: 'Lagos, Nigeria',
    profilePicture: '/assets/profileImage.png', // Replace with actual image URL
};

const timestamp = 'August 19, 2023';
const content = 'This is the Opportunity to Join the World Leading Tech Professionals in 2022. All you  need do is to register with the link below. \n www.ileifetech.com/freshmen.';
const image = '/assets/postimage.png'; // Replace with actual image URL

const ProfilePost = () => {
    return (
        <div>
            <PostCard user={user} timestamp={timestamp} content={content} image={image} />
            <PostCard user={user} timestamp={timestamp} content={content} image={image} />
            <PostCard user={user} timestamp={timestamp} content={content} image={image} />
            <PostCard user={user} timestamp={timestamp} content={content} image={image} />
            <PostCard user={user} timestamp={timestamp} content={content} image={image} />
        </div>
    );
};

export default ProfilePost;
