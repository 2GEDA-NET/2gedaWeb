import React, { useState, useEffect } from 'react';
import styles from './signInSection.module.css';
import ActionButton from "@/components/ui-components/ActionButton";
import Section from "@/components/ui-components/Section";
import Input from "@/components/ui-components/Input";
import { useRouter } from 'next/router';
import Link from 'next/link';

const WelcomeBackSection = () => {
    const [signUpWithEmail, setSignUpWithEmail] = useState(true); // Default to email signup
    const [signUpWithEmailBusiness, setSignUpWithEmailBusiness] = useState(true); // Separate state for business
    const [signUpWithPhoneNumber, setSignUpWithPhoneNumber] = useState(true); // Default to phone number signup
    const router = useRouter();
    const [userInput, setUserInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');


    // const handleButtonClick = () => {
    //     // Determine the next route based on the current route
    //     const currentRoute = router.asPath;
    //     console.log('Current Route:', currentRoute);

    //     if (currentRoute.includes('/business')) {
    //         console.log('Navigating to Business Dashboard');
    //         router.push('/dashboard?type=business');
    //     } else if (currentRoute.includes('/personal')) {
    //         console.log('Navigating to Personal Dashboard');
    //         router.push('/dashboard?type=personal');
    //     } else {
    //         console.log('Navigating to Default Route');
    //         router.push('/');
    //     }
    // };

    const handleButtonClick = async () => {
        const loginEndpoint = 'https://api.2geda.net/auth/login';

        const loginData = {
            auth: signUpWithEmail ? 'email' : 'phone',
            authValue: userInput,
            password: passwordInput,
        };

        try {
            const response = await fetch(loginEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.success) {
                    // Handle successful login, e.g., navigate to user dashboard
                    console.log('Login successful!', responseData);
                    // You can add logic to navigate to the appropriate dashboard
                } else {
                    // Handle login failure and display the error message
                    console.log('Login failed:', responseData.message);
                    alert(responseData.message); // Display the error message in an alert
                }
            } else {
                // Handle login failure, show error message, etc.
                console.log('Login failed.');
                alert('Login failed. Please try again later.');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('An error occurred:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    
    const handleUsePhoneNumberClick = () => {
        setSignUpWithEmail(false);
        setSignUpWithEmailBusiness(false); // Update the business signup option
        setSignUpWithPhoneNumber(true);
    };

    const handleUseEmailClick = () => {
        setSignUpWithEmail(true);
        setSignUpWithEmailBusiness(true); // Update the business signup option
        setSignUpWithPhoneNumber(false);
    };

    useEffect(() => {
        // Determine the sign-up context based on the current route
        const currentRoute = router.asPath;
        setSignUpWithEmail(currentRoute.includes('/business'));
        setSignUpWithEmailBusiness(currentRoute.includes('/business')); // Update the business signup option
    }, [router.asPath]);

    return (
        <div className={styles.container}>
            <div style={{ margin: '30px' }}>
                <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Welcome Back, Sign In...</h4>
                <div style={{ textAign: 'left' }}>
                    {signUpWithEmail ? (
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ fontSize: '0.7em', fontWeight: 'bold' }}>Sign up with E-mail</p>
                            <Input type={'email'}
                                placeholder={'Input email address'}
                                value={userInput}
                                onChange={(event) => setUserInput(event.target.value)}
                            />
                        </div>
                    ) : (
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ fontSize: '0.7em', fontWeight: 'bold' }}>Sign up with Phone Number</p>
                            <Input type={'tel'}
                                placeholder={'Input phone number'}
                                value={userInput}
                                onChange={(event) => setUserInput(event.target.value)}
                            />
                        </div>
                    )}
                    <Input
                        type={'password'}
                        placeholder={'Input Password'}
                        value={passwordInput}
                        onChange={(event) => setPasswordInput(event.target.value)}
                    />
                    {signUpWithEmail ? (
                        <Link href='#' onClick={handleUsePhoneNumberClick} style={{ textDecoration: 'none', fontWeight: 'bolder', fontSize: '0.7em', marginBottom: '50px' }}>
                            Use Phone Number Instead
                        </Link>
                    ) : (
                        <Link href='#' onClick={handleUseEmailClick} style={{ textDecoration: 'none', fontWeight: 'bolder', fontSize: '0.7em', marginBottom: '50px' }}>
                            Use Email Instead
                        </Link>
                    )}
                </div>
                <div style={{ margin: '15px 0', }}>
                    <Link href='/forget-password' style={{ textDecoration: 'none', fontWeight: 'bolder', color: 'gray', fontSize: '0.6em', }}>Forget Password</Link>
                </div>
                <ActionButton
                    label={signUpWithEmail ? 'Business Sign In' : 'Personal Sign In'}
                    inverse={false}
                    onClick={() => handleButtonClick()}
                    style={{
                        padding: '10px',
                        width: '100%',
                        maxWidth: '100%',
                        backgroundColor: '#BC400BCF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />
                <p style={{ fontSize: '0.7em', margin: '20px', textAlign: 'center' }}>
                    New here?
                    <Link href='/' style={{ textDecoration: 'none', fontWeight: 'bold' }}> Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default WelcomeBackSection;
