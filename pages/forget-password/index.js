import React, { useState } from 'react';
import Input from "@/components/ui-components/Input";
import AuthNav from "@/components/ui-components/AuthNav";
import Link from 'next/link';
import ActionButton from "@/components/ui-components/ActionButton";
import styles from "./forgetPassword.module.css";

const ForgetPassword = () => {
    const [userInput, setUserInput] = useState(''); // Store user's email/phone input
    const [signUpWithEmail, setSignUpWithEmail] = useState(true); // Default to email signup

    const handleUsePhoneNumberClick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        setSignUpWithEmail(false); // Switch to phone number signup
    };

    const handleUseEmailClick = (event) => {
        event.preventDefault(); // Prevent default link behavior
        setSignUpWithEmail(true); // Switch to email signup
    };

    return (
        <div>
            <AuthNav navTitle='Forget Password' />
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src="/assets/forgetPasswordImg.png" alt="forget password" style={{ width: '25vw' }} />
                </div>
                <div className={styles.main}>
                    <h2>Reset Password</h2>
                    {signUpWithEmail ? (
                        <div className={styles.input}>
                            <input
                                type={'email'}
                                placeholder={'Input email address'}
                                value={userInput}
                                onChange={(event) => setUserInput(event.target.value)}
                                style={{ borderRadius: '10px', padding: '10px', width: '20vw', margin: '20px 0', }}
                            />
                        </div>
                    ) : (
                        <div className={styles.input}>
                            <input
                                type={'tel'}
                                placeholder={'Input phone number'}
                                value={userInput}
                                style={{ borderRadius: '10px', padding: '10px', width: '20vw', margin: '20px 0', }}
                                onChange={(event) => setUserInput(event.target.value)}
                            />
                        </div>
                    )}
                    {signUpWithEmail ? (
                        <span
                            className={styles.span}
                            onClick={handleUsePhoneNumberClick}
                        >
                            Use Phone Number Instead
                        </span>
                    ) : (
                        <span
                            className={styles.span}
                            onClick={handleUseEmailClick}
                        >
                            Use Email Instead
                        </span>
                    )}
                    <div style={{ margin: '30px 0', }}>
                        <Link href='/' style={{ textDecoration: 'none', fontWeight: 'bolder', color: 'gray', fontSize: '0.9em', }}>Sign in here</Link>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop:'200px',}}>
                        <div></div>
                        <ActionButton
                            label="Reset Password"
                            inverse={false}
                            onClick={() => handleButtonClick()}
                            style={{ padding: '10px 30px', }}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;
