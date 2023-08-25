import React, { useState } from 'react';
import { useRouter } from 'next/router';

import BaseLayout from '@/components/BaseLayout';
import Category from '@/components/Category';
import Followers from '@/components/Followers';
import HBanner from '@/components/ui-components/HBanner';
import VBanner from '@/components/ui-components/VBanner';
import PostTextarea from '@/components/PostTextArea';
import PostFeed from '@/components/PostFeed';
import DashboardNavbar from '@/components/ui-components/DashboardNavBar';
import ChatComponent from '@/components/ChatComponent';


const Dashboard = () => {
  const router = useRouter();
  const { type } = router.query;
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <BaseLayout>
        <DashboardNavbar />
        <div style={{ display: "flex", }}>
          <div>
            <PostTextarea onPostSubmit={handlePostSubmit} />
            <HBanner hbanner={'/assets/hbanner.png/'} />
            <PostFeed />
          </div>
          <div style={{ width: '400px', }}>
            <VBanner vbanner1={'/assets/vbanner1.png/'} vbanner2={'/assets/vbanner2.png/'} vbanner3={'/assets/vbanner3.png/'} />
          </div>
          <div>
            <Category />
            <Followers />
            <ChatComponent/>

          </div>
        </div>
      </BaseLayout>

    </>);
};

export default Dashboard;