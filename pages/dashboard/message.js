import BaseLayout from '@/components/BaseLayout';
import DashboardNavbar from '@/components/ui-components/DashboardNavBar';
import Inventory from '@/components/Inventory';
import MessageNavBar from "@/components/ui-components/MessageNavBar";
import RecentConversation from "@/components/RecentConversation";
import Conversation from "@/components/Conversation";
import ChatComponent from '@/components/ChatComponent';
import styles from '@/pages/styles/global.module.css'


const Message = () => {
    return (
        <BaseLayout>
            <DashboardNavbar />
            <div className={styles.container} style={{ display: "flex", }}>
                <MessageNavBar />
                <div style={{ marginTop: '100px', }}>
                    <div style={{ background: 'white', margin: '20px', }}>
                        <RecentConversation />
                    </div>
                    <div style={{ background: 'white', margin: '20px', padding: '1px', }}>
                        <Conversation />
                    </div>
                </div>
                <div style={{ background: 'white', padding: ' 100px 30px', }}>
                    <ChatComponent />
                    <Inventory />
                </div>
            </div>

        </BaseLayout>
    );
};


export default Message;