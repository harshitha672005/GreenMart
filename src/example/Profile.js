/* import React, { useState } from 'react';
import yourImage from './rgc.jpg'; // Replace with the actual path to your image

const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.username &&
      formData.email &&
      formData.phone &&
      formData.dob &&
      formData.gender
    ) {
      setSubmittedData(formData);
      setFormData({
        username: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
      });
    } else {
      console.error('Please fill out all required fields.');
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${yourImage})`, // Set the background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ 
        maxWidth: '300px', // Reduced the max-width
        width: '100%', 
        backgroundColor: 'rgba(255,255,255,0.9)', 
        padding: '20px', // Adjusted padding
        borderRadius: '8px', 
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)', // Adjusted shadow
        }}>
        {submittedData ? (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Details:</h2>
            <p>
              <strong>Username:</strong> {submittedData.username}
              <br />
              <strong>Email:</strong> {submittedData.email}
              <br />
              <strong>Phone:</strong> {submittedData.phone}
              <br />
              <strong>Date of Birth:</strong> {submittedData.dob}
              <br />
              <strong>Gender:</strong> {submittedData.gender}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <button
              type="submit"
              style={{
                backgroundColor: '#4caf50',
                color: 'white',
                padding: '12px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormExample;
 */
/* import React, { useState } from 'react';
import yourImage from './rgc.jpg'; // Replace with the actual path to your image

const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate phone number (simple check for 10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    // Validate age (assuming minimum age of 18)
    const dobDate = new Date(formData.dob);
    const currentDate = new Date();
    const age = Math.floor((currentDate - dobDate) / (365.25 * 24 * 60 * 60 * 1000));

    if (age < 12) {
      newErrors.dob = 'You must be at least 18 years old.';
    }

    // Validate other fields if needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm() && formData.username && formData.email && formData.phone && formData.dob && formData.gender) {
      setSubmittedData(formData);
      setFormData({
        username: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
      });
      setErrors({});
    } else {
      console.error('Please fill out all required fields correctly.');
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${yourImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ 
        maxWidth: '300px',
        width: '100%', 
        backgroundColor: 'rgba(255,255,255,0.9)', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
        }}>
        {submittedData ? (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Details:</h2>
            <p>
              <strong>Username:</strong> {submittedData.username}
              <br />
              <strong>Email:</strong> {submittedData.email}
              <br />
              <strong>Phone:</strong> {submittedData.phone}
              <br />
              <strong>Date of Birth:</strong> {submittedData.dob}
              <br />
              <strong>Gender:</strong> {submittedData.gender}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  borderColor: errors.phone ? 'red' : '#ccc',
                }}
              />
              {errors.phone && <p style={{ color: 'red', fontSize: '13px' }}>{errors.phone}</p>}
            </label>
            <br />
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  borderColor: errors.dob ? 'red' : '#ccc',
                }}
              />
              {errors.dob && <p style={{ color: 'red', fontSize: '13px' }}>{errors.dob}</p>}
            </label>
            <br />
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <button
              type="submit"
              style={{
                backgroundColor: '#4caf50',
                color: 'white',
                padding: '12px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormExample;
 */
import React, { useState } from 'react';
import yourImage from './rgc.jpg'; // Replace with the actual path to your image

const FormExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate phone number (simple check for 10 digits)
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    // Validate age (assuming minimum age of 18)
    const dobDate = new Date(formData.dob);
    const currentDate = new Date();
    const age = Math.floor((currentDate - dobDate) / (365.25 * 24 * 60 * 60 * 1000));

    if (age < 10) {
      newErrors.dob = 'You must be at least 18 years old.';
    }

    // Validate other fields if needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    const requiredFields = ['username', 'email', 'phone', 'dob', 'gender'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length === 0) {
      // All required fields are filled
      if (validateForm()) {
        setSubmittedData(formData);
        setFormData({
          username: '',
          email: '',
          phone: '',
          dob: '',
          gender: '',
        });
        setErrors({});
      } else {
        // Display errors in the UI
        setErrors({ submit: 'Please fill out all required fields correctly.' });
      }
    } else {
      // Display missing field errors in the UI
      setErrors({ submit: `Please fill out the following required fields: ${missingFields.join(', ')}.` });
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${yourImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ 
        maxWidth: '300px',
        width: '100%', 
        backgroundColor: 'rgba(255,255,255,0.9)', 
        padding: '20px', 
        borderRadius: '8px', 
        boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
        }}>
        {submittedData ? (
          <div>
            <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Details:</h2>
            <p>
              <strong>Username:</strong> {submittedData.username}
              <br />
              <strong>Email:</strong> {submittedData.email}
              <br />
              <strong>Phone:</strong> {submittedData.phone}
              <br />
              <strong>Date of Birth:</strong> {submittedData.dob}
              <br />
              <strong>Gender:</strong> {submittedData.gender}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              />
            </label>
            <br />
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  borderColor: errors.phone ? 'red' : '#ccc',
                }}
              />
              {errors.phone && <p style={{ color: 'red', fontSize: '13px' }}>{errors.phone}</p>}
            </label>
            <br />
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                  borderColor: errors.dob ? 'red' : '#ccc',
                }}
              />
              {errors.dob && <p style={{ color: 'red', fontSize: '13px' }}>{errors.dob}</p>}
            </label>
            <br />
            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxSizing: 'border-box',
                }}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
            <br />
            <button
              type="submit"
              style={{
                backgroundColor: '#4caf50',
                color: 'white',
                padding: '12px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              Submit
            </button>
            {errors.submit && <p style={{ color: 'red', fontSize: '13px', marginTop: '10px' }}>{errors.submit}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default FormExample;
