import SuggestedBusinessCard from "../ui-components/SuggestedBusinessCard";

const BusinessSearchResult = () => {
    const suggestedBusinessData = [
        {
            id: 1,
            image: '/assets/businessPageImg.png/',
            name: 'Business Page 1',
            location: 'Lagos | Nigeria',
            description: 'Estd. 2011',
            rating: '4.3',
        },
        {
            id: 1,
            image: '/assets/businessPageImg.png/',
            name: 'Business Page 1',
            location: 'Lagos | Nigeria',
            description: 'Estd. 2011',
            rating: '4.3',
        },
        {
            id: 1,
            image: '/assets/businessPageImg.png/',
            name: 'Business Page 1',
            location: 'Lagos | Nigeria',
            description: 'Estd. 2011',
            rating: '4.3',
        },

        {
            id: 1,
            image: '/assets/businessPageImg.png/',
            name: 'Business Page 1',
            location: 'Lagos | Nigeria',
            description: 'Estd. 2011',
            rating: '4.3',
        },

        {
            id: 1,
            image: '/assets/businessPageImg.png/',
            name: 'Business Page 1',
            location: 'Lagos | Nigeria',
            description: 'Estd. 2011',
            rating: '4.3',
        },
        {
            id: 1,
            image: '/assets/businessPageImg.png/',
            name: 'Business Page 1',
            location: 'Lagos | Nigeria',
            description: 'Estd. 2011',
            rating: '4.3',
        },
    ]
    return (
        <div>
            <SuggestedBusinessCard suggestedBusinessData={suggestedBusinessData} />
        </div>
    );
};

export default BusinessSearchResult;