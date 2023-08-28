import BaseLayout from "@/components/BaseLayout";
import Category from "@/components/Category";
import Inventory from "@/components/Inventory";
import FollowerSection from "@/components/FollowerSection";
import DashboardNavbar from "@/components/ui-components/DashboardNavBar";
import PeopleNavBar from "@/components/ui-components/PeopleNavBar";
import ActionButton from "@/components/ui-components/ActionButton";
import HBanner from "@/components/ui-components/HBanner";
import SuggestionSection from "@/components/Suggestions";

const People = () => {
    return (
        <BaseLayout>
            <DashboardNavbar />
            <div style={{ display: "flex", }}>
                <PeopleNavBar />
                <div style={{ marginTop: '100px', }}>
                    <div style={{ background: 'white', margin: '20px', }}>
                        <FollowerSection />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px', }}>
                        <ActionButton
                            label='See those you Follow'
                            inverse={false}
                            // onClick={handlePostSubmit}
                            style={{ padding: '20px 70px', fontWeight: 'bold', background: '#FF8A15', borderRadius: 20, color: 'white', fontSize: '1.2em', boxShadow: '2px 2px 5px 0px rgba(0, 0, 0, 0.5)', }}
                        />
                    </div>
                    <div style={{ margin: '30px', }}>
                        <HBanner hbanner={'/assets/businessVbanner.png/'} />
                    </div>
                    <div style={{ background: 'white', margin: '20px', padding: '1px', }}>
                        <SuggestionSection />
                    </div>
                </div>
                <div style={{ background: 'white', padding: '100px 30px', }}>
                    <p style={{ textAlign: 'center', }}>Post an Outlet</p>
                    <Category />
                    <Inventory />
                </div>
            </div>
        </BaseLayout>
    );
};


export default People;