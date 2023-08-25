import React from 'react';


const InventoryCard = ({ inventoryData }) => {
    return (
        <div>
            {
                inventoryData.map(inventory => (
                    <div style={{ display: "flex", justifyContent: "space-between", margin: '7px', }}>
                        <div style={{ display: "flex", }}>
                            <div>
                                <img src={inventory.image} alt={inventory.name} />
                            </div>
                            <div style={{margin: '0 10px',}}>
                                <p>{inventory.name}</p>
                                <p style={{ fontSize: '0.7em'}}>{inventory.price}</p>
                            </div>
                        </div>
                        <p style={{marginTop: '30px', fontSize: '0.7em',}}>Posted {inventory.date}</p>
                    </div>
                ))
            }
        </div>
    );
};


export default InventoryCard;