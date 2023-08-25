import TopBusinessCard from "../ui-components/TopBusinessCard";

const TopBusiness = () => {
    const topBusinessData = [
        {
            id: 1,
            image: '/assets/topBusiness1.png/',
            name: 'Forte Oil',
            industry: 'Oil and Gas',
            rating: '4.5',
        },
        {
            id: 1,
            image: '/assets/topBusiness1.png/',
            name: 'Forte Oil',
            industry: 'Oil and Gas',
            rating: '4.5',
        },
        {
            id: 1,
            image: '/assets/topBusiness1.png/',
            name: 'Forte Oil',
            industry: 'Oil and Gas',
            rating: '4.5',
        },
        {
            id: 1,
            image: '/assets/topBusiness1.png/',
            name: 'Forte Oil',
            industry: 'Oil and Gas',
            rating: '4.5',
        },
        {
            id: 1,
            image: '/assets/topBusiness1.png/',
            name: 'Forte Oil',
            industry: 'Oil and Gas',
            rating: '4.5',
        },
    ]

    return (
        <div style={{background: 'rgba(196, 196, 196, 0.20)', margin: '60px 0px', borderRadius: '10px', padding: '20px',}}>
            <h4 style={{ color: 'rgba(0 0 0 0.80)', marginBottom: '20px', }}>Top Businesses</h4>
            <TopBusinessCard topBusinessData={topBusinessData} />
        </div>
    );
};

export default TopBusiness;