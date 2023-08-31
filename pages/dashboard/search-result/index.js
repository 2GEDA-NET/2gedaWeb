import BaseLayout from "@/components/BaseLayout";
import React, { useState } from 'react';
import BusinessSearchResult from "@/components/BusinessSearchResult";
import ChatComponent from "@/components/ChatComponent";
import Inventory from "@/components/Inventory";
import PeopleSearchResult from "@/components/PeopleSearchResult";
import ActionButton from "@/components/ui-components/ActionButton";
import ArrowNav from "@/components/ui-components/ArrowNav";
import DashboardNavbar from "@/components/ui-components/DashboardNavBar";
import styles from '@/pages/styles/global.module.css'
import MediaSearchResult from "@/components/MediaSearchResult";
import PlacesSearchResult from "@/components/PlacesSearchResult";

const SearchResultPage = () => {
    const [activeButton, setActiveButton] = useState("People");

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const renderSearchResult = () => {
        if (activeButton === "People") {
            return <PeopleSearchResult />;
        } else if (activeButton === "Business") {
            return <BusinessSearchResult />;
        } else if (activeButton === "Media") {
            return <MediaSearchResult />
        } else if (activeButton === "Places") {
            return <PlacesSearchResult />
        }


        // Add other cases for different search types

        return null; // Default case
    };
    return (
        <BaseLayout>
            <DashboardNavbar />
            <div className={styles.container}>
                <ArrowNav navTitle={'Search Result'} />
                <div style={{ paddingTop: '150px', background: 'white', margin: '0 40px', }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <p style={{ margin: '10px', }}>Search for <em>Adeoye Hammed</em></p>
                        <ActionButton
                            label="People"
                            inverse={true}
                            onClick={() => handleButtonClick("People")}
                            style={{
                                padding: '10px 40px',
                                background: activeButton === "People" ? '#FF5722' : 'transparent',
                                color: activeButton === "People" ? '#FFFFFF' : '',
                            }}
                        />
                        <ActionButton
                            label="Business"
                            inverse={true}
                            onClick={() => handleButtonClick("Business")}
                            style={{
                                padding: '10px 40px',
                                margin: '0 5px',
                                background: activeButton === "Business" ? '#FF5722' : 'transparent',
                                color: activeButton === "Business" ? '#FFFFFF' : '',
                            }}
                        />
                        <ActionButton
                            label="Product"
                            inverse={true}
                            style={{ padding: '10px 40px', margin: '0 5px', }}
                        />
                        <ActionButton
                            label="Media"
                            inverse={true}
                            onClick={() => handleButtonClick("Media")}
                            style={{
                                padding: '10px 40px',
                                margin: '0 5px',
                                background: activeButton === "Media" ? '#FF5722' : 'transparent',
                                color: activeButton === "Media" ? '#FFFFFF' : '',
                            }}
                        />
                        <ActionButton
                            label="Places"
                            inverse={true}
                            onClick={() => handleButtonClick("Places")}
                            style={{
                                padding: '10px 40px',
                                margin: '0 5px',
                                background: activeButton === "Places" ? '#FF5722' : 'transparent',
                                color: activeButton === "Places" ? '#FFFFFF' : '',
                            }}
                        />
                    </div>
                    <div>
                        {renderSearchResult()}
                    </div>
                </div>
                <div style={{ padding: '60px 20px', background: 'white', }}>
                    <ChatComponent />
                    <Inventory />
                </div>
            </div>

        </BaseLayout>
    );
};

export default SearchResultPage;