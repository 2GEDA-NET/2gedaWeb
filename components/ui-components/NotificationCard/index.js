const NotificationCard = ({ notifications }) => {
    return (
        <div style={{ padding: '20px 10px', }}>
            {notifications.map((notification, index) => (
                <>
                    <div key={index} style={{ display: 'flex', alignContent: 'center', alignItems: 'center', margin: '10px 5px',}}>
                        <div>
                            <img src={notification.image} alt={notification.name} style={{ borderRadius: '200px', width: '50px', height: '50px', marginRight: '20px', }} />
                        </div>
                        <div>
                            <p>{notification.desc}</p>
                        </div>
                    </div>
                    <hr />
                </>
            ))}

        </div>
    );
};

export default NotificationCard;