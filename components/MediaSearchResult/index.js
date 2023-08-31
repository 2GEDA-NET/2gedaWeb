import MediaSearchCard from "../ui-components/MediaSearchCard";

const MediaSearchResult = () => {
    const result = [
        {
            id: 1,
            media: '/assets/Automobile.png',
        },
        {
            id: 2,
            media: '/assets/Automobile.png',
        },
        {
            id: 3,
            media: '/assets/Automobile.png',
        },
        {
            id: 4,
            media: '/assets/Automobile.png',
        },
        {
            id: 5,
            media: '/assets/Automobile.png',
        },
    ]
    return(
        <div style={{padding: '40px',}}>
            <MediaSearchCard results={result} />
        </div>
    );
};


export default MediaSearchResult;