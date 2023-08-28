import ActionButton from "../ui-components/ActionButton";
import FollowerSectionCard from '../ui-components/PeopleSectionCard'
import PeopleSectionCard from "../ui-components/PeopleSectionCard";


const SuggestionSection = () => {

    const people = [
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
            <h4 style={{ marginBottom: '20px', }}>Suggestions</h4>
            <div style={{ textAlign: "center", }}>
                <PeopleSectionCard followers={people} />
            </div>
        </div>
    );
};

export default SuggestionSection;