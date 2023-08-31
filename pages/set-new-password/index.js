import React, { useState } from 'react';
import Input from "@/components/ui-components/Input";
import AuthNav from "@/components/ui-components/AuthNav";
import Link from 'next/link';
import ActionButton from "@/components/ui-components/ActionButton";
import styles from "./setNewPassword.module.css";

const SetNewPassword = () => {
    const [userInput, setUserInput] = useState(''); // Store user's email/phone input
    

    return (
        <div>
            <AuthNav navTitle='Set New Password' />
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src="/assets/forgetPasswordImg.png" alt="forget password" style={{ width: '25vw' }} />
                </div>
                <div className={styles.main}>
                    <h2>Input Password</h2>
                    <div className={styles.input}>
                            <input
                                type={'password'}
                                placeholder={'Password'}
                                // value={userInput}
                                onChange={(event) => setUserInput(event.target.value)}
                                style={{ borderRadius: '10px', padding: '10px', width: '20vw', margin: '20px 0', }}
                            />
                        </div>
                        <div className={styles.input}>
                            <input
                                type={'password'}
                                placeholder={'Confirm Password'}
                                // value={userInput}
                                onChange={(event) => setUserInput(event.target.value)}
                                style={{ borderRadius: '10px', padding: '10px', width: '20vw', margin: '5px 0', }}
                            />
                        </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop:'200px',}}>
                        <div></div>
                        <ActionButton
                            label="Done"
                            inverse={false}
                            onClick={() => handleButtonClick()}
                            style={{ padding: '10px 50px', }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SetNewPassword;
