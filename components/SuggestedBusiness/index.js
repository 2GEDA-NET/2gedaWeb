import SuggestedBusinessCard from "../ui-components/SuggestedBusinessCard";

const SuggestedBusiness = () => {
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
        <div style={{ margin: '20px', background: 'white', borderRadius: '10px', padding: '20px', }}>
            <h4 style={{ color: 'rgba(0 0 0 0.80)', marginBottom: '20px', }}>Suggested Business</h4>
            <SuggestedBusinessCard suggestedBusinessData={suggestedBusinessData} />
        </div>
    );
};


export default SuggestedBusiness;