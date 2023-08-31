import ActionButton from "../ui-components/ActionButton";
import PeopleSectionCard from '../ui-components/PeopleSectionCard'


const RecentConversation = () => {

    const recentChat = [
        {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        },
        {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        },
        {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        },
        {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        },
        {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        },
        {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        },
        {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        },

    ]


    return (
        <div style={{ margin: '50px', }}>
            <h4 style={{ marginBottom: '20px', paddingTop: '20px',}}>Recent Conversations</h4>
            <div style={{ textAlign: "center", }}>
                <PeopleSectionCard followers={recentChat} />
                
            </div>
        </div>
    );
};

export default RecentConversation;