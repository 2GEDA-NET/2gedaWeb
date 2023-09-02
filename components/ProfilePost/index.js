import React, { useEffect, useState } from 'react';
import PostCard from '../ui-components/PostCard';



function formatTimestamp(timestamp) {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    const timeDifference = currentTime - postTime;

    if (timeDifference < 60000) {
        return 'Just now';
    } else if (timeDifference < 3600000) {
        const minutes = Math.floor(timeDifference / 60000);
        return `${minutes} min ago`;
    } else if (timeDifference < 86400000) {
        const hours = Math.floor(timeDifference / 3600000);
        return `${hours} hr ago`;
    } else {
        // Handle other cases, like days, weeks, etc.
        // You can implement this based on your requirements
        return timestamp; // Fallback to original timestamp if needed
    }
}


const ProfilePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.2geda.net/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
                setPosts(data.posts);
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    {post.person ? (
                        <PostCard
                            user={`${post.person.first_name} ${post.person.last_name}`}
                            state={post.person.state}
                            timestamp={formatTimestamp(post.date_time_with_timezone)}
                            content={post.post_text}
                            image={post.attachment && post.attachment.length > 0 ? post.attachment[0].path : null}
                            profilePicture={post.person.image_path.path}
                            likes={post.likes_count}
                            comments={post.comments}
                            comment_count={post.comment_count}
                            retweet_count={post.retweet_count}
                            occupation={post.person.occupation}
                        />
                    ) : post.business ? (
                        <PostCard
                            user={post.business.business_name} // Adjust this according to the business structure
                            timestamp={formatTimestamp(post.date_time_with_timezone)}
                            content={post.post_text}
                            image={post.attachment[0].path}
                            profilePicture={post.business.image_path.path} // Use the correct path to the business profile picture
                            likes={post.likes_count}
                            comments={post.comments}
                            comment_count={post.comment_count}
                            retweet_count={post.retweet_count}
                            occupation={post.business.category} // Adjust this according to the business structure
                        />
                    ) : (
                        <p>Author information missing</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProfilePost;
