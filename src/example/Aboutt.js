import React from 'react';
import './Aboutt.css';
import Footer1 from './Footer/Footer1';
import Footer2 from './Footer/Footer2';

const About = () => {
  return (
    <div className='extrapage'>
      <div className='pgleft pgcommon'>
        <img
          src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          alt='noimg'
        />
        <div>
          <h1>Our Story</h1>
          <p>
            Introducing GreenMart: Your Destination for Healthy Living

            GreenMart is your go-to online store for all things healthy and convenient. We're on a mission to promote wellness and make nutritious options easily accessible. From organic produce to gluten-free alternatives and superfood snacks, we offer a curated selection of premium-quality products to nourish your body. With a user-friendly website and mobile app, shopping with GreenMart is a breeze. Join our community of health enthusiasts and embark on a journey towards optimal well-being. Welcome to GreenMart, where every choice is a step towards a healthier you. Start your wellness journey today!
          </p>
        </div>
      </div>
      <div className='pgright pgcommon'>
        <img
          src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          alt='noimg'
        />
        <div>
          <h1>Who are we</h1>
          <p>
            GreenMart: Your Health and Wellness Partner

            At GreenMart, we're your dedicated partner in achieving a healthier lifestyle. We offer a curated selection of nutritious and delicious products, from organic produce to gluten-free options and energizing superfoods. With a user-friendly platform and a supportive community, we're here to empower you on your wellness journey. Join us at GreenMart and embrace a healthier and happier you today.
          </p>
        </div>
      </div>
      <div className='pgleft pgcommon'>
        <img
          src='https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          alt='noimg'
        />
        <div>
          <h1>Our Customer Bondings</h1>
          <p>
            Strong Customer Bonds with GreenMart: Quality products, Convenient shopping, Supportive community. Experience the GreenMart difference today!
          </p>
        </div>
      </div>
      <Footer1/>
      <Footer2/>
    </div>
  );
};

export default About;
