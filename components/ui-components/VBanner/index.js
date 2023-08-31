import styles from './Vbanner.module.css';

const VBanner = ({ vbanner1, vbanner2, vbanner3 }) => {
    return (
        <>
            <div className={styles.container} style={{ marginTop: '10px', }}>
                <img src={vbanner1} style={{ width: '100%', padding: '0 20px', }} alt='Vertical Banner1' />
                <img src={vbanner2} style={{ width: '100%', padding: '0 20px', }} alt='Vertical Banner2' />
                <img src={vbanner3} style={{ width: '100%', padding: '0 20px', }} alt='Vertical Banner3' />
            </div>
        </>
    );
};

export default VBanner;