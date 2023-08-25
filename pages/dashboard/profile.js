import React, { useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import ProfilePost from '@/components/ProfilePost';
import DashboardNavbar from '@/components/ui-components/DashboardNavBar';
import ChatComponent from '@/components/ChatComponent';
import ProfileImages from '@/components/ProfileImages';
import ActionButton from '@/components/ui-components/ActionButton';
import ProfileNav from '@/components/ui-components/ProfileNav';
import Inventory from '@/components/Inventory';


const BusinessProfile = () => {

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
    name: 'Benita Chukuemeka',
    role: 'Certified Chief',
    state: 'Imo state, Nigeria',
    posts: '570',
    outlet: '21k',
    followers: '21k',
    following: '23million',
    bio: 'Web Developer | Coffee Lover | Travel Enthusiast',
    favQuote: "People Fail because they don't know enough",
    coverImage: '/assets/coverImage.png',
    profileImage: '/assets/profileImage.png',
  };

  return (
    <>
      <BaseLayout>
        <DashboardNavbar />
        <div style={{ display: "flex", marginTop: '40px',}}>
          <div style={{marginTop: '90px',}}>
            {/* <ProfileNav/> */}
            <ProfileImages
              name={user.name}
              role={user.role}
              bio={user.bio}
              followers={user.followers}
              posts={user.posts}
              following={user.following}
              state={user.state}
              favQuote={user.favQuote}
              coverImage={user.coverImage}
              profileImage={user.profileImage}
            />
            <div>
              <div style={{ display: 'flex', margin: '10px', }}>

                <ActionButton
                  label={`Post(${user.posts})`}
                  inverse={true}
                  onClick={() => handleButtonClick('profilePost')}
                  style={{ padding: '10px 250px', fontSize:'2em', border: '1px solid #c7c5c5a3', fontSize: '0.7em', color: 'black', }}
                />
                <ActionButton
                  label={`Outlet(${user.outlet})`}
                  inverse={true}
                  onClick={() => handleButtonClick('chat')}
                  style={{ padding: '10px 250px', fontSize:'2em', border: '1px solid #c7c5c5a3', fontSize: '0.7em', color: 'black', }}
                />
              </div>
              <div style={{  margin: '0 5%',}}>
                {displayComponent === 'profilePost' && <ProfilePost />}
                {displayComponent === 'chat' && <ChatComponent />}
              </div>
            </div>
          </div>
          <div style={{padding: '20px', background: 'white',}}>
            <ChatComponent />
            <Inventory />
          </div>
        </div>
      </BaseLayout>

    </>);
};

export default BusinessProfile;