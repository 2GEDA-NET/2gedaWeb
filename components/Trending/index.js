import ProductBox from '../ui-components/ProductBox';
import TrendingBox from '../ui-components/ProductBox'

const Trending = () => {

    const trendingData = [
        {
            id: 1,
            image: '/assets/trendingImg1.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 2,
            image: '/assets/trendingImg2.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 3,
            image: '/assets/trendingImg3.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 4,
            image: '/assets/trendingImg4.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 5,
            image: '/assets/trendingImg5.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 6,
            image: '/assets/trendingImg6.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        
        {
            id: 7,
            image: '/assets/trendingImg7.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
    ]

    return (
        <>
            <div style={{margin: '20px', background: 'white', borderRadius: '10px', padding: '20px',}}>
                <h4 style={{color: 'rgba(0 0 0 0.80)', marginBottom: '20px',}}>Trending and hot</h4>
                <ProductBox
                    productData = {trendingData}
                />
            </div>
        </>
    );
};

export default Trending;