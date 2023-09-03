import React, { useState } from 'react';
import BaseLayout from "@/components/BaseLayout";
import ProfilePost from '@/components/ProfilePost';
import DashboardNavbar from '@/components/ui-components/DashboardNavBar';
import ActionButton from '@/components/ui-components/ActionButton';
import Inventory from '@/components/Inventory';
import TopBusiness from '@/components/TopBusiness';
import ChatComponent from '@/components/ChatComponent';
import ProfileImages from '@/components/ProfileImages';
import BusinessProfile from '@/components/BusinessProfile';
import BusinessProfileNav from '@/components/ui-components/BusinessProfileNav';
import BusinessReview from '@/components/BusinessReview';



const ViewOtherBusinessPage = () => {
    const [posts, setPosts] = useState([]);
    const [displayComponent, setDisplayComponent] = useState('profilePost');
    const handleButtonClick = (componentName) => {
        if (componentName === 'profilePost') {
            setDisplayComponent('profilePost');
        } else if (componentName === 'chat') {
            setDisplayComponent('chat');
        }
    };
    const handlePostSubmit = (newPost) => {
        setPosts([newPost, ...posts]);
    };
    const user = {
        name: 'Business Page 1',
        state: 'Imo state | Nigeria',
        posts: '570',
        outlet: '21k',
        followers: '21k',
        rating: '4.5',
        following: '23million',
        bio: 'Web Developer | Coffee Lover | Travel Enthusiast',
        coverImage: '/assets/businesscoverImg.png',
        profileImage: '/assets/businessPageImg.png',
    };
    return (
        <BaseLayout>
            <DashboardNavbar />
            <div style={{ display: "flex", marginTop: '40px', }}>
                <div style={{ marginTop: '90px', }}>
                    <BusinessProfileNav/>
                    <BusinessProfile
                        name={user.name}
                        bio={user.bio}
                        followers={user.followers}
                        posts={user.posts}
                        following={user.following}
                        rating={user.rating}
                        state={user.state}
                        coverImage={user.coverImage}
                        profileImage={user.profileImage}
                    />
                    <div>
                        <div style={{ display: 'flex', margin: '10px', width: '64vw',}}>
                            <ActionButton
                                label={`Post(${user.posts})`}
                                inverse={true}
                                onClick={() => handleButtonClick('profilePost')}
                                style={{ padding: '10px 150px', fontSize: '2em', border: '1px solid #c7c5c5a3', fontSize: '0.7em', color: 'black', }}
                            />
                            <ActionButton
                                label={`Outlet(${user.outlet})`}
                                inverse={true}
                                onClick={() => handleButtonClick('chat')}
                                style={{ padding: '10px 150px', fontSize: '2em', border: '1px solid #c7c5c5a3', fontSize: '0.7em', color: 'black', }}
                            />
                            <ActionButton
                                label='Catalogue'
                                inverse={true}
                                onClick={() => handleButtonClick('catalogue')}
                                style={{ padding: '10px 150px', fontSize: '2em', border: '1px solid #c7c5c5a3', fontSize: '0.7em', color: 'black', }}
                            />
                        </div>
                        <div style={{ margin: '0 5%', }}>
                            {displayComponent === 'profilePost' && <ProfilePost />}
                            {displayComponent === 'chat' && <ChatComponent />}
                        </div>
                        <BusinessReview /> 
                    </div>
                </div>
                <div style={{ padding: '20px', background: 'white', }}>
                    <TopBusiness/>
                    <Inventory />
                </div>
            </div>
        </BaseLayout>
    );
};


export default ViewOtherBusinessPage;