import FollowersCard from '../ui-components/FollowersCard';

const followersData = [
    { id: 1, name: 'Follower 1', image: '/assets/follower.png' },
    { id: 2, name: 'Follower 2', image: '/assets/follower.png' },
    { id: 1, name: 'Follower 1', image: '/assets/follower.png' },
    { id: 2, name: 'Follower 2', image: '/assets/follower.png' },
    { id: 1, name: 'Follower 1', image: '/assets/follower.png' },
    { id: 2, name: 'Follower 2', image: '/assets/follower.png' },
    { id: 1, name: 'Follower 1', image: '/assets/follower.png' },
    { id: 2, name: 'Follower 2', image: '/assets/follower.png' },
    // Add more follower data...
];

function Follower() {
    return (
        <div>
            {/* Other content */}
            <FollowersCard followers={followersData} />
            {/* Other content */}
        </div>
    );
}

export default Follower;
