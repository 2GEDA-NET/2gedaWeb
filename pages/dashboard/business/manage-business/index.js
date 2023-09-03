import BaseLayout from "@/components/BaseLayout";
import Inventory from "@/components/Inventory";
import ManageBusinessNav from "@/components/ui-components/ManageBusinessNav";
import DashboardNavbar from "@/components/ui-components/DashboardNavBar";
import BusinessPage from "@/components/BusinessPage";
import SuggestedBusiness from "@/components/SuggestedBusiness";
import TopBusiness from "@/components/TopBusiness";

const ManageBusiness = () => {
    return (
        <>
            <BaseLayout>
                <DashboardNavbar />
                <div style={{ display: 'flex', justifyContent: 'space-between',  }}>
                    <ManageBusinessNav />
                    <div style={{ background: 'white', paddingTop: '80px', margin: '20px', }}>
                        <div style={{ width: '70vw',}}>
                            <BusinessPage />
                            <SuggestedBusiness />
                        </div>
                    </div>
                    <div style={{ background: 'white', padding: '50px 20px', }}>
                        <TopBusiness />
                        <Inventory />
                    </div>
                </div>
            </BaseLayout>
        </>
    );
};

export default ManageBusiness;