import React, { useState } from 'react';
import ActionButton from '../ActionButton';
import styles from './BusinessNav.module.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';

const BusinessNav = () => {
    const router = useRouter();
    const { type } = router.query;

    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearchInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      // Navigate to the search results page with the search query
      router.push(`search-result?query=${searchQuery}`);
    };
  

    const handlePostSubmit = () => {
        // Use router.push to navigate to the "manage-business" page
        router.push('/dashboard/business/manage-business');
    };
    return (
        <div className={styles.nav} >
            <div style={{}}>
                <h3 className={styles.profileTitle}>Buy and Sell Instantly</h3>
            </div>
            <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
          <div className={styles.searchInputContainer}>
            <input
              type='search'
              placeholder='Search Name, Place and Job'
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSearchSubmit(e);
                }
              }}
              className={styles.searchInput}
            />
            <AiOutlineSearch className={styles.searchIcon} />
          </div>
        </form>
            <ActionButton
                label='Manage Business'
                inverse={false}
                onClick={handlePostSubmit}
                style={{ padding: '10px 50px', background: '#FF5722', }}
            />
        </div>
    );
};


export default BusinessNav;