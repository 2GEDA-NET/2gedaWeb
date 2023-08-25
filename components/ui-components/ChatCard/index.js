import styles from './ChatCard.module.css';

function ChatCard({ user }) {
    return (
        <>
            <div className={styles.chatCard}>
                <img className={styles.profileImage} src={user.profileImage} alt={`${user.name}'s profile`} />
                <div className={styles.chatContent}>
                    <h5>{user.name}</h5>
                    <p className={styles.messageSnippet}>{user.message}</p>
                </div>
                <span className={styles.timestamp}>{user.timestamp}</span>
            </div>
        </>

    );
}

export default ChatCard;
