import React, { useEffect } from 'react';
import './Privacy.css';
import Footer1 from './Footer/Footer1';
import Footer2 from './Footer/Footer2';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='extrapage'>
      <div style={{ position: 'relative' }}>
        <img src='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80' alt="grocery" width="1695px" height="450px" />
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Adjust the alpha value for the desired darkness
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', color: 'white', fontFamily: 'Trebuchet MS', fontSize: '50px'}}>Privacy Policy</h1>
        </div>
      </div>

      <div className='pgcont1'>
        <h3>Policy:</h3>
        <p>Welcome to GreenMart, your go-to grocery application for a convenient and delightful shopping experience. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By using the GreenMart application, you agree to the terms outlined in this policy.</p>
      </div>

      <div className='pgcont1'>
        <h3>Information We Collect:</h3>
        <p>We collect both personal and non-personal information to provide you with a seamless shopping experience. Personal information may include your name, address, email, phone number, and payment details. Non-personal information includes device information, location data, and browsing preferences.</p>
      </div>

      <div className='pgcont1'>
        <h3>Data Security</h3>
        <p>We prioritize the security of your information. We employ industry-standard security measures to protect against unauthorized access, disclosure, alteration, and destruction of your personal data. Our payment processing is secured through encrypted connections. We may update this Privacy Policy to reflect changes in our practices or for legal reasons. We will notify you of any significant changes through the application or other means.</p>
      </div>

      <div className='pgcont1'>
        <h3>Cookies</h3>
        <p>We use cookies and similar technologies to enhance your browsing experience and collect information about how you use the application. You can manage your cookie preferences through your device settings. You have the right to access, correct, or delete your personal information. You can manage your communication preferences and opt-out of promotional emails through your account settings.</p>
      </div>
      <Footer1/>
        <Footer2/>
    </div>
  );
};

export default PrivacyPolicy;
