import React, { useEffect } from 'react';
import Footer1 from './Footer/Footer1';
import Footer2 from './Footer/Footer2';

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='extrapage'>
      <div style={{ position: 'relative' }}>
        <img src='https://images.unsplash.com/photo-1448697138198-9aa6d0d84bf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
         alt="grocery" width="1695px" height="450px" />
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
          <h1 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', color: 'white', fontFamily: 'Trebuchet MS', fontSize: '50px'}}>Terms&Condition</h1>
        </div>
      </div>

      <div className='pgcont1'>
        {/* <h3></h3> */}
        <p>
          <h4>
            Welcome to GreenMart, your online destination for fitness-focused grocery shopping. By accessing and using the GreenMart website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use this website.
          </h4>
        </p>
      </div>

      <div className='pgcont1'>
        <h3>Where does it come from?</h3>
        <p>
          a. GreenMart strives to provide accurate and up-to-date information about products. However, we do not warrant the accuracy, completeness, or reliability of any product information on the website.
          <br />
          <br />
          b. Prices and availability are subject to change without notice.
          <br />
          <br />
          c. The content, design, and graphics on this website are owned by or licensed to GreenMart and are protected by intellectual property laws.
          <br />
          <br />
          d. You may not reproduce, distribute, display, or create derivative works of any content on this website without the express written consent of GreenMart.
        </p>
      </div>

      <div className='pgcont1'>
        <h3>Use of the Website</h3>
        <p>
          <b>* </b> You must be 18 years or older to use this website.
          <br />
          <b>* </b>You are responsible for ensuring that the information you provide on the website is accurate and complete.
          <br />
          <b>* </b>Access to certain areas of the website may be restricted. GreenMart reserves the right to restrict access to other areas of the website or the entire website at our discretion.
        </p>
      </div>

      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default TermsAndConditions;
