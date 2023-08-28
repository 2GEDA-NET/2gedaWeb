import ActionButton from "../ui-components/ActionButton";
import BusinessReviewCard from "../ui-components/BusinessReviewCard";


const BusinessReview = () => {
    const businessReviewData = [
        {
            id: 1,
            name: 'Hammed Bashir',
            review: 'I have been using this service for almost 20 year, they are always on point and consistent'
        },
        {
            id: 2,
            name: 'Hammed Bashir',
            review: 'I have been using this service for almost 20 year, they are always on point and consistent'
        },
        {
            id: 2,
            name: 'Hammed Bashir',
            review: 'I have been using this service for almost 20 year, they are always on point and consistent'
        },
    ]


    return (
        <div style={{ margin: '50px', }}>
            <h4 style={{ marginBottom: '20px', }}>Business Review</h4>
            <div style={{textAlign: "center",}}>
                <BusinessReviewCard businessReviewData={businessReviewData} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', }}>
                    <div></div>
                    <ActionButton
                        label='Show all'
                        inverse={true}
                        // onClick={handlePostSubmit}
                        style={{ padding: '10px 50px', color: 'black', justifyItem: 'right', }}
                    />
                </div>
            </div>
        </div>
    );
};


export default BusinessReview;