import ActionButton from "../ui-components/ActionButton";
import PeopleSearchCard from "../ui-components/PeopleSearchCard";
import PeopleSectionCard from '../ui-components/PeopleSectionCard'


const SearchResult = () => {

    const result = [
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
            <div style={{ textAlign: "left", }}>
                <PeopleSearchCard results={result}/>
                
            </div>
        </div>
    );
};

export default SearchResult;