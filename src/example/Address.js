import React, { useState } from 'react';
import FormValidation from './pay/FormValidation';
import './Address.css';

const Address = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        deliveryName: "",
        deliveryLastName: "",
        deliveryAddress: "",
        deliveryPhone: "",
    });

    // State to manage form errors
    const [formErrors, setFormErrors] = useState({
        deliveryName: "",
        deliveryLastName: "",
        deliveryAddress: "",
        deliveryPhone: "",
    });

    // State to track whether all delivery details are provided
    const [deliveryDetailsProvided, setDeliveryDetailsProvided] = useState(false);

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form inputs
        validateForm();
        // If there are no errors and all delivery details are provided, set deliveryDetailsProvided to true
        if (isFormValid() && Object.values(formData).every(value => value.trim() !== '')) {
            setDeliveryDetailsProvided(true);
        } else {
            alert('Fix your error');
        }
    };

    // Function to validate form inputs
    const validateForm = () => {
        const errors = {};

        // Example validation rules (you can customize these)
        // Validation logic for deliveryName, deliveryLastName, deliveryAddress, deliveryPhone fields...

        setFormErrors(errors);
    };

    // Function to check if the form is valid
    const isFormValid = () => {
        return Object.values(formErrors).every((error) => !error);
    };

    return (
        <div>
            <center>
                {!deliveryDetailsProvided ? (
                    <form onSubmit={handleSubmit} className='form1'>
                        <div>
        <h1 className='h1'>DELIVERY ADDRESS</h1>
        <label className="label">FIRST NAME:</label>
            <input
            className="input-font"
              type="text"
              id="deliveryName"
              name="deliveryName"
              value={formData.deliveryName}
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.deliveryName}</span>
          </div>
          <br></br>
          <div>
          <label className="label">LAST NAME:</label>
            <input
              type="text"
              className="input-font"
              id="deliveryLastName"
              name="deliveryLastName"
              value={formData.deliveryLastName}
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.deliveryLastName}</span>
          </div>
          <br></br>
          <div>
          <label className="label">ADDRESS:</label>
            <input
              type="phone"
              className="input-font"
              id="deliveryAddress"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.deliveryAddress}</span>
          </div>
          <br></br>
          
          <div>
            
          <label className="label">PHONE NO:</label>
            <input
            className="input-font"
              type="text"
              id="deliveryPhone"
              name="deliveryPhone"
              value={formData.deliveryPhone}
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.deliveryPhone}</span>
            
          </div>
                        <button className='button' type="submit">PROCEED TO PAY</button>
                    </form>
                ) : (
                    <FormValidation formData={formData} />
                )}
            </center>
        </div>
    );
};

export default Address;