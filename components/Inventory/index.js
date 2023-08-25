import InventoryCard from "../ui-components/InventoryCard";

const Inventory = () => {
    const inventoryData = [
        {
            id: 1,
            name: 'Red Nike',
            price: 'NGN2000',
            image: '/assets/inventory1.png',
            date: '2/4/2001'
        },
        {
            id: 1,
            name: 'Red Nike',
            price: 'NGN2000',
            image: '/assets/inventory1.png',
            date: '2/4/2001'
        },
        {
            id: 1,
            name: 'Red Nike',
            price: 'NGN2000',
            image: '/assets/inventory1.png',
            date: '2/4/2001'
        },

        {
            id: 1,
            name: 'Red Nike',
            price: 'NGN2000',
            image: '/assets/inventory1.png',
            date: '2/4/2001'
        },
    ]
    return (
        <div style={{background: 'rgba(196, 196, 196, 0.20)', borderRadius: 10, padding: 15, margin: '20px 0',}}>
            <h4 style={{ color: 'rgba(0 0 0 0.80)', marginBottom: '20px', }}>My Inventory</h4>
            <InventoryCard inventoryData={inventoryData} />
        </div>
    );
};


export default Inventory;