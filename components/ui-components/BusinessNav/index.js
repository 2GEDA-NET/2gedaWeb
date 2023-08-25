import ActionButton from '../ActionButton';
import styles from './BusinessNav.module.css'
import { useRouter } from 'next/router';

const BusinessNav = () => {
    const router = useRouter();
    const handlePostSubmit = () => {
        // Use router.push to navigate to the "manage-business" page
        router.push('/dashboard/manage-business');
    };
    return (
        <div className={styles.nav} >
            <div style={{}}>
                <h3 className={styles.profileTitle}>Buy and Sell Instantly</h3>
            </div>
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