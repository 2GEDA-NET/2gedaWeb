import ActionButton from "../ui-components/ActionButton";
import FollowerSectionCard from '../ui-components/PeopleSectionCard'


const FollowerSection = () => {

    const followers = [
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
        }, {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        }, {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        }, {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        }, {
            id: 1,
            name: 'Dupe Alagbe',
            location: 'Lekki Lagos',
            image: '/assets/followers.png'
        },

    ]


    return (
        <div style={{ margin: '50px', }}>
            <h4 style={{ marginBottom: '20px', paddingTop: '20px',}}>Followers(24million)</h4>
            <div style={{ textAlign: "center", }}>
                <FollowerSectionCard followers={followers} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', }}>
                    <div></div>
                    <ActionButton
                        label='View all'
                        inverse={true}
                        // onClick={handlePostSubmit}
                        style={{ padding: '10px 0px', fontWeight: 'bold',  border: 'none',color: 'black', justifyItem: 'right', }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FollowerSection;