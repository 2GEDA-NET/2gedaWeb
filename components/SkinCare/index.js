import ProductBox from '../ui-components/ProductBox';
import TrendingBox from '../ui-components/ProductBox';

const SkinCare = () => {

    const trendingData = [
        {
            id: 1,
            image: '/assets/FashionAndStyle1.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 2,
            image: '/assets/FashionAndStyle2.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 3,
            image: '/assets/FashionAndStyle3.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 4,
            image: '/assets/FashionAndStyle4.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 5,
            image: '/assets/FashionAndStyle5.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 6,
            image: '/assets/Automobile6.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        }, {
            id: 2,
            image: '/assets/Automobile2.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 3,
            image: '/assets/Automobile3.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 4,
            image: '/assets/Automobile4.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 5,
            image: '/assets/Automobile5.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 6,
            image: '/assets/Automobile6.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },

        {
            id: 7,
            image: '/assets/Automobile7.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
        {
            id: 7,
            image: '/assets/Automobile8.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        }, {
            id: 7,
            image: '/assets/Automobile9.png',
            name: 'Semi detached duplex',
            price: '#200,000',
            location: 'Lekki, Lagos',
        },
    ]

    return (
        <>
            <div style={{ margin: '20px', background: 'white', borderRadius: '10px', padding: '20px', }}>
                <h4 style={{ color: 'rgba(0 0 0 0.80)', marginBottom: '20px', }}>Skin Care</h4>
                <ProductBox
                    productData={trendingData}
                />
            </div>
        </>
    );
};

export default SkinCare;