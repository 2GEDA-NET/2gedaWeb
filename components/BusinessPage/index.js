import BusinessPageCard from "../ui-components/BusinessPageCard";

const BusinessPage = () => {
    const businessData = [
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
        <div style={{ margin: '60px 20px', borderRadius: '10px', padding: '20px',}}>
            <h4 style={{ color: 'rgba(0 0 0 0.80)', marginBottom: '20px', }}>Your Business Pages</h4>
            <BusinessPageCard businessData={businessData} />

        </div>
    );
};

export default BusinessPage;