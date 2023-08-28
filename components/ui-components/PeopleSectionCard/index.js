import styles from './PeopleSectionCard.module.css'

const PeopleSectionCard = ({ followers }) => {
    return (
        <div  className={styles.followersList}>
            {followers.map((follower) => (
                <div key={follower.id} className={styles.follower}>
                    <div >
                        <img src={follower.image} alt={follower.name} />
                    </div>
                    <div style={{textAlign: 'left',}}>
                        <p style={{ fontSize: '0.8em',}}>{follower.name}</p>
                        <p style={{fontSize: '0.6em',}}>{follower.location}</p>
                    </div>
                </div>
            ))}

        </div>
    );
};


export default PeopleSectionCard;