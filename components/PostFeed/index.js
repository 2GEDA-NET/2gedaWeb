// pages/index.js
import React from 'react';
import PostCard from '../ui-components/PostCard';

const user = {
  name: 'User Name',
  occupation: 'Pharmacist',
  location: 'Lagos, Nigeria',
  profilePicture: '/assets/logo.png', // Replace with actual image URL
};

const timestamp = 'August 19, 2023';
const content = 'This is the Opportunity to Join the World Leading Tech Professionals in 2022. All you  need do is to register with the link below. \n www.ileifetech.com/freshmen.';
const image = '/assets/postimage.png'; // Replace with actual image URL

const PostFeed = () => {
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

export default PostFeed;
