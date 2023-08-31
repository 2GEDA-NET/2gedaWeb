import ActionButton from "@/components/ui-components/ActionButton";
import AuthNav from "@/components/ui-components/AuthNav";
import { FaLeaf } from "react-icons/fa";

const Verify = () => {
    return (
        <div style={{ margin: '20px', }}>
            {/* Nav Bar */}
            <AuthNav navTitle='Almost there ...' />
            <div style={{ display: "flex", justifyContent: 'space-between', }}>
                <div style={{ marginTop: '120px', }}>
                    <h2 style={{color: '#00000066', fontWeight: 'lighter',}}>Your Email Address is </h2>
                    <p style={{color: '#4F0DA3', fontWeight: 'bolder',}}>josephpromise14@gmail.com</p>
                </div>
                <div style={{ width: '75vw', borderLeft: '0.5px solid grey', padding: '100px' }}>
                    <h2>We sent a 6 digit code to your email</h2>
                    <div style={{ display: 'flex', margin: '30px 0', }}>
                        <input type="number" style={{ width: '50px', height: '50px', borderRadius: '10px', marginRight: '15px', }} />
                        <input type="number" style={{ width: '50px', height: '50px', borderRadius: '10px', margin: '0 15px', }} />
                        <input type="number" style={{ width: '50px', height: '50px', borderRadius: '10px', margin: '0 15px', }} />
                        <input type="number" style={{ width: '50px', height: '50px', borderRadius: '10px', margin: '0 15px', }} />
                        <input type="number" style={{ width: '50px', height: '50px', borderRadius: '10px', margin: '0 15px', }} />
                        <input type="number" style={{ width: '50px', height: '50px', borderRadius: '10px', margin: '0 15px', }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '100px 0', }}>
                        <p>Resent</p>
                        <p>0:39</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: 'space-between', marginTop: '300px', }}>
                        <p>Step 2</p>
                        <ActionButton
                            label="Verify"
                            inverse={false}
                            style={{padding: '10px 70px',}}
                        />
                    </div>

                </div>
            </div>

        </div>
    );
};


export default Verify;