import ChatCard from '../ui-components/ChatCard';
import styles from './ChatComponent.module.css';


const chatData = [
  {
    id: 1,
    name: 'John Doe',
    profileImage: '/assets/follower.png',
    message: 'Hey, how are you doing?',
    timestamp: '2h ago',
  },
  {
    id: 2,
    name: 'Jane Smith',
    profileImage: '/assets/follower.png',
    message: 'Just finished that project. What about you?',
    timestamp: '3h ago',
  },
  {
    id: 1,
    name: 'John Doe',
    profileImage: '/assets/follower.png',
    message: 'Hey, how are you doing?',
    timestamp: '2h ago',
  },
  {
    id: 2,
    name: 'Jane Smith',
    profileImage: '/assets/follower.png',
    message: 'Just finished that project. What about you?',
    timestamp: '3h ago',
  },
  {
    id: 1,
    name: 'John Doe',
    profileImage: '/assets/follower.png',
    message: 'Hey, how are you doing?',
    timestamp: '2h ago',
  },
  {
    id: 2,
    name: 'Jane Smith',
    profileImage: '/assets/follower.png',
    message: 'Just finished that project. What about you?',
    timestamp: '3h ago',
  },
  // Add more chat data...
];

function ChatComponent() {
  return (
    <div style={{margin:'30px 0', background: '#DAD7DE', borderRadius: 5,}}>
      {/* Other content */}
      <div className={styles.chatHeader}>
                Message
            </div>
      {chatData.map((user) => (
        <ChatCard key={user.id} user={user} />
      ))}
      {/* Other content */}
    </div>
  );
}

export default ChatComponent;
