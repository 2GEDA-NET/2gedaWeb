import ActionButton from '../ActionButton';
import styles from './ManageBusinessNav.module.css'
import { FaArrowLeft, FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';

const ManageBusinessNav = () => {
    const router = useRouter();
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