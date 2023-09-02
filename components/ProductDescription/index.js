// ProductDescription.js
import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import DashboardNavbar from '@/components/ui-components/DashboardNavBar';
import ChatComponent from '@/components/ChatComponent';
import styles from '@/pages/styles/global.module.css';
import Inventory from '@/components/Inventory';
import ActionButton from "../ui-components/ActionButton";
import Link from 'next/link';



const ProductDescription = ({ product }) => {
    return (
        <BaseLayout>
            <DashboardNavbar />
            <div className={styles.container} style={{ display: "flex", margin: '80px 0', }}>

                <div className={styles.container} style={{ display: 'flex', justifyContent: 'space-between', width: '60vw', }}>
                    <div>
                        <img src={product.attachment[0].path} alt={product.product_name} height style={{ width: '400px', height: '400px', }} />
                    </div>
                    <div style={{ margin: '0 50px', border: '2px solid black', width: '600vw', }}>
                        <div style={{}}>
                            <div >
                                <h1 style={{ fontSize: '1.5em', }}>{product.name}</h1>
                            </div>
                            <div style={{ display: 'flex', justiftyContent: 'space-between', alignItem: 'bottom', margin: '10px 0', }}>
                                <p style={{ fontSize: '0.9em', }}>{product.location}</p>
                                <p style={{ color: '#4F0DA3', fontSize: '2em', fontFamily: 'Ubuntu', fontWeight: '700', marginLeft: '45%', }}>{product.price}</p>
                            </div>
                        </div>
                        {/* other images */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '20px 180px 20px 0px', }}>
                            <img src={product.otherImage1} alt={product.name} height style={{ width: '70px', height: '30px', }} />
                            <img src={product.otherImage2} alt={product.name} height style={{ width: '70px', height: '30px', }} />
                            <img src={product.otherImage3} alt={product.name} height style={{ width: '70px', height: '30px', }} />
                            <img src={product.otherImage4} alt={product.name} height style={{ width: '70px', height: '30px', }} />
                        </div>
                        <div style={{margin: '20px 0',}}>
                            <h1 style={{ fontSize: '0.8em', }}>Product Description</h1>
                            <p>{product.desc}</p>
                        </div>
                        <div style={{margin: '20px 0',}}>
                            <h1 style={{ fontSize: '0.8em', }}>About Business</h1>
                            <div>
                                <img src={product.businessImg} alt={product.name} height style={{ width: '100px', height: '100px', }} />
                                <div>
                                    <p>{product.business}</p>
                                    {product.businessLink && (
                                        <Link href={product.businessLink}>{product.businessProfile}</Link>
                                    )}


                                </div>
                            </div>
                        </div>

                        <ActionButton
                            label='Message Seller'
                            inverse={false}
                            // onClick={handlePostSubmit}
                            style={{ padding: '10px 50px', fontWeight: 'bold', }}
                        />
                    </div>

                </div>


                <div>
                    <ChatComponent />
                    <Inventory />
                </div>

            </div>





        </BaseLayout >

    );
};

export default ProductDescription;
