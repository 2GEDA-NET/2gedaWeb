// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import styles from './dashboardNavBar.module.css';
import ActionButton from "@/components/ui-components/ActionButton";
import { useRouter } from 'next/router';

const DashboardNavbar = ({ buttonLabel, handleButtonClick }) => {
  const router = useRouter();
  const { type } = router.query;

  const handleProfileClick = () => {
    // Navigate to the profile page for the specific type
    router.push(`/dashboard/profile`);
  };

  const isProfileRoute = router.asPath.includes('/profile');

  // Render the link conditionally using the same structure for server and client
  const linkContent = isProfileRoute ? (
    <div style={{ textDecoration: 'none', cursor: 'not-allowed' }}>
      <img src="/assets/logo.png" style={{ height: '40px' }} />
      <p style={{ fontSize: '0.8em' }}>My Profile</p>
    </div>
  ) : (
    <Link href="/dashboard?type=some-type/profile" passHref>
      <div style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={handleProfileClick}>
        <img src="/assets/logo.png" style={{ height: '40px' }} />
        <p style={{ fontSize: '0.8em' }}>My Profile</p>
      </div>
    </Link>

  );

  return (
    <div className={styles.navbar}>
      <Link href="/" style={{padding: '0 50px', justifyContent: 'spaceBetween', textDecoration: 'none', display: 'flex', textAlign: 'center', alignItems: 'center' }}>
        <div className={styles.logo}>
          <img src="/assets/logo.png" alt="Logo" style={{ height: '40px' }} />
        </div>
        <p style={{ padding: '20px', fontSize: '1em', fontWeight: 'bold' }}>2geda</p>
      </Link>
      <div style={{ justifyContent: 'spaceBetween', display: 'flex', textAlign: 'center', alignItems: 'center' }}>
        <input type='search' placeholder='Search Name, Place and Job' style={{ padding: '10px', margin: '10px', fontStyle: 'italics', width: '400px', fontSize: '0.8rem', borderRadius: '10px' }} />
        <div>
          <div style={{ textDecoration: 'none', cursor: 'pointer' }} onClick={handleProfileClick}>
            <img src="/assets/logo.png" style={{ height: '40px' }} />
            <p style={{ fontSize: '0.8em' }}>My Profile</p>
          </div>
        </div>
        
      </div>
    </div>
  )
};

export default DashboardNavbar;
