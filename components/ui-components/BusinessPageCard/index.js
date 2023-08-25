import React from 'react';
import ActionButton from "../ActionButton";
import StarRating from "../StarRating";

const BusinessPageCard = ({ businessData }) => {
    return (
        <div>
            {businessData.map(business => (
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', alignItems: 'center',}}>
                    <div style={{ display: 'flex', alignItems: 'center',}}>
                        <div>
                            <img src={business.image} alt={business.name} />
                        </div>
                        <div style={{ margin: '10px',}}>
                            <h4 style={{ fontSize: '0.9em', }}>{business.name}</h4>
                            <p style={{ fontSize: '0.8em', }}>{business.location}</p>
                            <p style={{ fontSize: '0.7em', }}>{business.description}</p>
                            <StarRating />
                            <p style={{ fontSize: '0.5em', }}>Average Rating {business.rating}</p>
                        </div>
                    </div>
                    <div style={{ padding: '30px', }}>
                        <ActionButton
                            label='View Page'
                            inverse={true}
                            // onClick={handlePostSubmit}
                            style={{ borderRadius: '10px', padding: '10px 40px'}}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BusinessPageCard;
