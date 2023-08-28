import StarRating from "../StarRating";

const BusinessReviewCard = ({ businessReviewData }) => {
    return (
        <div style={{ background: '#F7F7F7', borderRadius: 15, margin: '10px 0px', padding: '20px', }}>
            {businessReviewData.map(businessReview => (
                <div style={{}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px',}}>
                        <div style={{textAlign: 'left',}}>
                            <h4 style={{ fontSize: '0.9em', }}>{businessReview.name}</h4>
                            <p style={{ fontSize: '0.9em', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.60', margin: '10px 0', }}>"{businessReview.review}"</p>

                        </div>
                        <StarRating />
                    </div>
                    <hr />
                </div>
            ))}

        </div>
    );
};

export default BusinessReviewCard;