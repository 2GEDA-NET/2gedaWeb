import React, { useState } from 'react';
import ActionButton from '../ActionButton';
import styles from './ManageBusinessNav.module.css'
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';

const ManageBusinessNav = () => {
    const router = useRouter();

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
        router.push('/dashboard/manage-business');
    };
    const handleBackClick = () => {
        window.history.back();
    };
    return (
        <div className={styles.nav} >
            <div onClick={handleBackClick}>
                <FaArrowLeft />
            </div>
            <div>
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
                <p>Manage Business</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <ActionButton
                    label='+'
                    inverse={false}
                    onClick={handlePostSubmit}
                    style={{ background: '#FF5722', }}
                />
                <p style={{ padding: '10px', }}>Add a new Business Page</p>
            </div>
        </div>
    );
};


export default ManageBusinessNav;