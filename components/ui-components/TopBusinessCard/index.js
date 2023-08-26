import React from 'react';

const TopBusinessCard = ({ topBusinessData }) => {
    return (
        <div>
            {topBusinessData.map(topBusiness => (
                <div key={topBusiness.id} style={{ padding: '5px 20px',display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <div>
                            <img src={topBusiness.image} alt={topBusiness.name} />
                        </div>
                        <div style={{ margin: '10px', }}>
                            <h4 style={{ fontSize: '0.9em' }}>{topBusiness.name}</h4>
                            <p style={{ fontSize: '0.7em' }}>{topBusiness.industry}</p>
                        </div>
                    </div>
                    <div>
                        <p>{topBusiness.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopBusinessCard;
