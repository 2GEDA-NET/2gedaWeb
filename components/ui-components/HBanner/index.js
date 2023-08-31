import styles from './Hbanner.module.css'


const HBanner = ({ hbanner }) => {
    return (
        <>
            <div className={styles.container}><img src={hbanner} style={{width:'100%', padding: '0 20px',}} alt='Horizontal Banner' /></div>
        </>
    );
};

export default HBanner;