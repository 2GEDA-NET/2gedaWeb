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
                    <div style={{ background: 'white', paddingTop: '100px',}}>
                        <div style={{ }}>
                            <BusinessPage />
                            <SuggestedBusiness />
                        </div>
                    </div>
                    <div style={{ background: 'white', padding: '0px 20px',}}>
                        <TopBusiness />
                        <Inventory />
                    </div>
                </div>
            </BaseLayout>
        </>
    );
};

export default ManageBusiness;