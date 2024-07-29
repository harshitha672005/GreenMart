import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the specific error when the user starts typing
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform validation before submitting
    if (validateForm()) {
      // Perform login logic or API call
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

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

    setFormErrors(newErrors);
    return valid;
  };

  return (
    <div className='log'>
      <div id="algn">
        <div id="container">
          <p className="head">Login</p>
          <form onSubmit={handleFormSubmit} className="input-container">
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
              placeholder="Enter password"
              className="inpt"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}

            <div className="rem-forgot">
              <div className="rem">
                <input type="checkbox" id="rem-tik" />
                <label htmlFor="rem-tik">Remember me</label>
              </div>
              <span>Forgot password</span>
            </div>
            <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}><Link to='/'style={{ color: 'white', fontSize: '16px', textDecoration: "none" }}>Login</Link></button>
          </form>
          <p className="footer">
            Don't have an account? <Link to='/sign' style={{ color: 'white', fontSize: '11px', textDecoration: "none" }}>Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
