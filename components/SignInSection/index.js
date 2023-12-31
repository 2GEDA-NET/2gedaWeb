import React, { useState } from 'react';
import styles from './signInSection.module.css';
import ActionButton from "@/components/ui-components/ActionButton";
import Input from "@/components/ui-components/Input";
import { useRouter } from 'next/router';
import Link from 'next/link';

const SignInSection = () => {
  const router = useRouter();
  const [signUpWithEmail, setSignUpWithEmail] = useState(true); // Default to email signup
  const [accountType, setAccountType] = useState('personal'); // Default account type is Personal
  const [userInput, setUserInput] = useState(''); // Store user's email/phone input
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');


  const getDeviceId = () => {
    return navigator.userAgent;
  };
  // const handleButtonClick = () => {
  //   // Add your logic here to handle the submission based on the selected accountType
  //   // For example, you can navigate to different pages based on the accountType
  //   if (accountType === 'business') {
  //     router.push('/business/');
  //   } else if (accountType === 'personal') {
  //     router.push('/personal/');
  //   }
  // };

  const handleButtonClick = async () => {
    const registrationEndpoint = 'https://api.2geda.net/auth/register';

    const registrationData = {
      auth: signUpWithEmail ? 'email' : 'phone',
      value: userInput,
      username: userInput, // You might need to adjust this based on your requirements
      password: passwordInput, // Use the password input value
      deviceId: getDeviceId(),
    };

    try {
      const response = await fetch(registrationEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        const responseData = await response.json();
        // Assuming the response data has a property 'success' indicating the success status
        if (responseData.success) {
          // Handle successful registration, e.g., navigate to a success page
          console.log('Registration successful!');
          router.push('/success'); // Replace with the appropriate success page route
        } else {
          // Handle registration failure, show error message, etc.
          alert('Registration failed. Please check your information and try again.');
        }
      } else {
        // Handle registration failure, show error message, etc.
        alert('Registration failed. Please try again later.');
      }
    } catch (error) {
      // Handle network or other errors
      alert('An error occurred. Please try again later.');
    }
  };


  const handleUsePhoneNumberClick = () => {
    setSignUpWithEmail(false); // Switch to phone number signup
  };

  const handleUseEmailClick = () => {
    setSignUpWithEmail(true); // Switch to email signup
  };

  return (
    <div className={styles.container}>
      <div style={{ margin: '30px' }}>
        <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Become a member in few clicks</h4>
        {signUpWithEmail ? ( // Conditional rendering based on email/phone signup state
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.7em', fontWeight: 'bold' }}>Sign up with E-mail</p>
            <Input
              type={'email'}
              placeholder={'Input email address'}
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
            <p style={{ fontSize: '0.6em' }}>We will verify the email to be sure it belongs to you</p>
          </div>
        ) : (
          <div style={{ textAlign: 'left' }}>
            <p style={{ fontSize: '0.7em', fontWeight: 'bold' }}>Sign up with Phone Number</p>
            <Input
              type={'tel'}
              placeholder={'Input phone number'}
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
            <p style={{ fontSize: '0.6em' }}>We will send an OTP to your phone</p>
          </div>
        )}
        <Input
          type={'password'}
          placeholder={'Input Password'}
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
        />
        <Input
          type={'password'}
          placeholder={'Confirm Password'}
          value={confirmPasswordInput}
          onChange={(event) => setConfirmPasswordInput(event.target.value)}
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
        <div style={{ marginTop: '15px' }}>
          <p style={{ color: 'gray', fontSize: '0.8em' }}>Select account type</p>
          <div className={styles.buttonsContainer}>
            <ActionButton
              label="Business"
              inverse={accountType === 'business'}
              onClick={() => setAccountType('business')}
              style={{ padding: '10px 50px', margin: '10px' }}
            />
            <ActionButton
              label="Personal"
              inverse={accountType === 'personal'}
              onClick={() => setAccountType('personal')}
              style={{ padding: '10px 50px', margin: '10px' }}
            />
          </div>
        </div>
        <ActionButton
          label="Continue"
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
          Already a member?
          <Link href={accountType === 'business' ? '/business/' : '/personal/'} style={{ textDecoration: 'none', fontWeight: 'bold' }} >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignInSection;
