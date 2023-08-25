import React from 'react';
import ActionButton from "../ActionButton";
import StarRating from "../StarRating";

const SuggestedBusinessCard = ({ suggestedBusinessData }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr', gridGap: '16px', alignStart: 'start' }}>
            {suggestedBusinessData.map(suggestedBusiness => (
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px', alignItems: 'center', }}>
                    <div style={{ display: 'flex', alignItems: 'center', }}>
                        <div>
                            <img src={suggestedBusiness.image} alt={suggestedBusiness.name} />
                        </div>
                        <div style={{ margin: '10px', }}>
                            <h4 style={{ fontSize: '0.9em', }}>{suggestedBusiness.name}</h4>
                            <p style={{ fontSize: '0.8em', }}>{suggestedBusiness.location}</p>
                            <p style={{ fontSize: '0.7em', }}>{suggestedBusiness.description}</p>
                            <StarRating />
                            <p style={{ fontSize: '0.5em', }}>Average Rating {suggestedBusiness.rating}</p>
                        </div>
                    </div>
                    <div style={{ padding: '30px', }}>
                        <ActionButton
                            label='Follow'
                            inverse={false}
                            // onClick={handlePostSubmit}
                            style={{ borderRadius: '20px', padding: '10px 40px', }}
                        />
                    </div>
                </div>

            ))}

        </div>
    );
};


export default SuggestedBusinessCard;