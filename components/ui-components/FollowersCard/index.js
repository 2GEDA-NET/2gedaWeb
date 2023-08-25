import styles from './FollowersCard.module.css';

function FollowersCard({ followers }) {
  return (
    <div style={{marginTop: '20px',}}>
        <div className={styles.header}>
        <p style={{color: 'rgba(0, 0, 0, 0.60)',}}>Followers</p>
        <span className={styles.seeAll}>See All</span>
      </div>
    <div className={styles.card}>
      
      <div className={styles.followersList}>
        {followers.map((follower) => (
          <div className={styles.follower} key={follower.id}>
            <img src={follower.image} alt={`${follower.name}'s profile`} />
            {/* <p>{follower.name}</p> */}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default FollowersCard;
