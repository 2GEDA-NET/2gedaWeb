import ActionButton from "../ui-components/ActionButton";
import PeopleSectionCard from '../ui-components/PeopleSectionCard'
import { FaLock } from 'react-icons/fa';

const Conversation = () => {

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
        },{
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
        },{
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

            <div style={{ textAlign: "center", }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0', }}>
                    <ActionButton
                        label='General'
                        inverse={false}
                        // onClick={handlePostSubmit}
                        style={{ padding: '10px 50px', fontWeight: 'bold', justifyItem: 'right', }}
                    />
                    <ActionButton
                        label={<div style={{textAlign: 'center',}}> Private <FaLock size={14}/></div>}
                        inverse={true}
                        // onClick={handlePostSubmit}
                        style={{ padding: '10px 50px', fontWeight: 'bold', color: 'black', justifyItem: 'right', }}
                    />
                </div>
                <PeopleSectionCard followers={recentChat} />

            </div>
        </div>
    );
};

export default Conversation;