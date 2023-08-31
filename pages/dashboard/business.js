import React, { useState } from 'react';
import HBanner from '@/components/ui-components/HBanner';
import DashboardNavbar from '@/components/ui-components/DashboardNavBar';
import BaseLayout from '@/components/BaseLayout';
import Trending from '@/components/Trending';
import Automobile from '@/components/Automobile';
import FashionAndStyle from '@/components/FashionAndLifestyle';
import KidsAndToy from '@/components/KidsAndToy';
import FurnitureAndDecoration from '@/components/FurnitureAndDecoration';
import SkinCare from '@/components/SkinCare';
import Category from '@/components/Category';
import ProfileNav from '@/components/ui-components/ProfileNav';
import BusinessNav from '@/components/ui-components/BusinessNav';
import SuggestedBusiness from '@/components/SuggestedBusiness';
import ChatComponent from '@/components/ChatComponent';
import Inventory from '@/components/Inventory';
import styles from '@/pages/styles/global.module.css'


const Business = () => {
    return (
        <BaseLayout>
            <DashboardNavbar />
            {/* <ProfileNav/> */}
            <div className={styles.container} style={{ display: 'flex' }}>
                <div style={{ width: '130%', marginTop: '130px', }}>
                    <BusinessNav />
                    <Trending />
                    <HBanner hbanner={'/assets/businessVbanner.png/'} />
                    <Automobile />
                    <SuggestedBusiness />
                    <FashionAndStyle />
                    <KidsAndToy />
                    <FurnitureAndDecoration />
                    <SkinCare />
                </div>
                <div style={{ background: 'white', padding: ' 100px 30px', }}>
                    <h4 style={{ justifyItems: 'center', textAlign: 'center', }}>Post on Outlet</h4>
                    <Category />
                    <Inventory />
                    <ChatComponent />
                </div>
            </div>


        </BaseLayout>

    );
}

export default Business;