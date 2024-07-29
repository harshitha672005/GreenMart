import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
    // Reset the specific error when the user starts typing or checking the checkbox
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform validation before submitting
    if (validateForm()) {
      // Perform signup logic or API call
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate name
    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    // Validate agreement to terms
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  return (
    <div className='log'>
      <div id="algn">
        <div id="container">
          <p className="head">Signup</p>
          <form onSubmit={handleFormSubmit} className="input-container">
            <input
              type="text"
              placeholder="Enter your name"
              className="inpt"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {formErrors.name && <span className="error">{formErrors.name}</span>}

            <input
              type="email"
              placeholder="Enter email"
              className="inpt"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}

            <input
              type="password"
              placeholder="Create password"
              className="inpt"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}

            <div className="rem-forgot">
              <div className="rem">
                <input
                  type="checkbox"
                  id="rem-tik"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                />
                <label htmlFor="rem-tik">I agree to the terms</label>
              </div>
              {formErrors.agreeToTerms && <span className="error">{formErrors.agreeToTerms}</span>}
            </div>

            <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}><Link to='/'style={{ color: 'white', fontSize: '16px', textDecoration: "none" }}>Signup</Link></button>
          
          </form>
          <p className="footer">
            Already have an account? <Link to='/login' style={{ color: 'white', fontSize: '11px', textDecoration: "none" }}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
