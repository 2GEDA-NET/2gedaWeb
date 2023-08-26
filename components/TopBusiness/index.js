import TopBusinessCard from "../ui-components/TopBusinessCard";
import { BsArrowUpSquare } from "react-icons/bs";

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
        <div style={{ background: 'rgba(196, 196, 196, 0.20)', margin: '60px 0px', borderRadius: '10px', }}>
            <div style={{ color: 'white', marginBottom: '20px', background: '#000030', padding: '10px', borderRadius: '5px', justifyContent: 'space-between', display: 'flex', }}>
                <h4 >Top Businesses</h4>
                <BsArrowUpSquare style={{ color: '#F9D413', }} />
            </div>
            <TopBusinessCard topBusinessData={topBusinessData} />
        </div>
    );
};

export default TopBusiness;