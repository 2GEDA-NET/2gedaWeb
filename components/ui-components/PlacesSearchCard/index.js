import { FaMapMarkerAlt } from 'react-icons/fa';


const PlacesSearchCard = ({ places }) => {
    return (
        <div style={{ margin: '20px 30px', }}>
            {places.map((place, index) => (
                <div>
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 0',}}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                            <FaMapMarkerAlt />
                            <p style={{margin: '0 10px',}}>{place.address}</p>
                        </div>
                        <div>
                            <p>{place.kilometers} KM</p>
                        </div>
                    </div>
                    <hr />
                </div>
            ))}

        </div>
    );
};


export default PlacesSearchCard;