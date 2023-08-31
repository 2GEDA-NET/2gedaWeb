import BaseLayout from "@/components/BaseLayout";
import ChatComponent from "@/components/ChatComponent";
import Inventory from "@/components/Inventory";
import SearchResult from "@/components/PeopleSearchResult";
import ActionButton from "@/components/ui-components/ActionButton";
import DashboardNavbar from "@/components/ui-components/DashboardNavBar";
import styles from '@/pages/styles/global.module.css'

const SearchResultPage = () => {
    return (
        <BaseLayout>
            <DashboardNavbar />
            <div className={styles.container}>
                <div style={{paddingTop: '100px',}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', }}>
                        <p>Search for <em>Adeoye Hammed</em></p>
                        <ActionButton 
                            label="People"
                            inverse={false}
                            style={{padding: '10px 50px', background:'#FF5722',}}
                        />
                        <ActionButton 
                            label="Business"
                            inverse={true}
                            style={{padding: '10px 50px',}}
                        />
                        <ActionButton 
                            label="Product"
                            inverse={true}
                            style={{padding: '10px 50px',}}
                        />
                        <ActionButton 
                            label="Media"
                            inverse={true}
                            style={{padding: '10px 50px',}}
                        />
                        <ActionButton 
                            label="Places"
                            inverse={true}
                            style={{padding: '10px 50px',}}
                        />
                    </div>
                    <div>
                        <SearchResult />

                    </div>
                </div>
                <div style={{ padding: '20px', background: 'white', }}>
                    <ChatComponent />
                    <Inventory />
                </div>
            </div>

        </BaseLayout>
    );
};

export default SearchResultPage;