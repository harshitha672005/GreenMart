import React from 'react'
import payimg from '../../ASSETS/pay.png'

import social from '../../ASSETS/social.png'
import './Footer2.css'
import { Link } from 'react-router-dom'
const Footer2 = () => {
  return (
    <div className='footer'>
      <div className='footerin1'>
        <div className='f1'>
        <div className='brand' style={{ fontFamily: 'sans-serif', fontSize: '25px', fontWeight: 'bold', color: '#006400' }}>
        GreenMart
      </div>
          <p>GreenMart is a leading online grocery store in the country. We are committed to providing the best quality products at the best prices.</p>
          <img src={social} alt='social' className='social' />

        </div>
        <div className='f2'>
          <h3>About Us</h3>
          <Link to='/aboutt' className='stylenone'>
            <p>About us</p>
          </Link>
          <Link to='/rating' className='stylenone'>
            <p>Contact us</p>
          </Link>
          {/* <p>About team</p>
          <p>Customer Support</p> */}
        </div>
        <div className='f2'>

          <h3>Our Information</h3>
          <Link to='/privacy' className='stylenone'>
            <p>Privacy policy</p>
          </Link>
          <Link to='/terms' className='stylenone'>
            <p>Terms & conditions</p>
          </Link>
          {/* <p>Return Policy</p>
          <p>Site Map</p> */}

        </div>
        
        
      </div>
      <div className='footerin2'>
        <h3>© Copyright 2023 GreenMart, Inc.  All rights reserved</h3>
        <img src={payimg} alt='payimg' />
      </div>
    </div>
  )
}

export default Footer2