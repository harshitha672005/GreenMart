import React, { useState } from 'react';
import FormValidation from './FormValidation';
import './Newpayment.css';

const Delivery = () => {
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
        } 
        // else {
        //     alert('Fill out the input fields');
        // }
    };

    // Function to validate form inputs
    const validateForm = () => {
        const errors = {};
        // Example validation rules (you can customize these)
        if (!formData.deliveryName.trim()) {
            errors.deliveryName = 'First name is required';
          } else if (!/^[A-Z]$/.test(formData.deliveryName) || formData.deliveryName.length !== 1) {
            errors.deliveryName = 'First name should contain exactly one capital letter';
          }
          if (!formData.deliveryLastName.trim()) {
            errors.deliveryLastName = 'Last name is required';
          } else if (!/^[A-Z][a-z]*$/.test(formData.deliveryLastName)) {
            errors.deliveryLastName = 'Last name should start with capital letter';
          }
          if (!formData.deliveryAddress.trim()) {
            errors.deliveryAddress = 'Address field is required';
          } 
          if (!formData.deliveryPhone.trim()) {
            errors.deliveryPhone = 'Phone number is required';
          } else if (!/^\d{10}$/.test(formData.deliveryPhone)) {
            errors.deliveryPhone = 'Phone number should contain only 10-digit numbers';
          }
        
        // Validation logic for deliveryName, deliveryLastName, deliveryAddress, deliveryPhone fields...

        setFormErrors(errors);
    };

    // Function to check if the form is valid
    const isFormValid = () => {
        return Object.values(formErrors).every((error) => !error);
    };

    return (
      
        <div   style={{ backgroundImage: 'url("https://static.blog.bolt.eu/LIVE/wp-content/uploads/2022/04/30135418/grocery-list.jpg")', backgroundSize: 'cover', height: '100vh' }}>

            <center>
                {!deliveryDetailsProvided ? (
                    <form onSubmit={handleSubmit} className='form1'>
                        <div className='main'>
                      
        <h1 className='h1'>DELIVERY ADDRESS</h1>
        <label className="label">FIRST NAME:</label>
            <input
            className="input-font input"
              type="text"
              
              id="deliveryName"
              name="deliveryName"
              value={formData.deliveryName}
              placeholder='ENTER YOUR FIRST NAME'  
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '15px' }}>{formErrors.deliveryName}</span>
          </div>
          <br></br>
          <div>
          <label className="label">LAST NAME:</label>
            <input
              type="text"
              className="input-font input"
              id="deliveryLastName"
              name="deliveryLastName"
              value={formData.deliveryLastName}
              placeholder='ENTER YOUR LAST NAME'  
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '15px' }}>{formErrors.deliveryLastName}</span>
          </div>
          <br></br>
          <div>
          <label className="label">ADDRESS:</label>
            <input
              type="text"
              className="input-font input"
              id="deliveryAddress"
              name="deliveryAddress"
              value={formData.deliveryAddress}
              placeholder='ENTER YOUR ADDRESS'  
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '15px' }}>{formErrors.deliveryAddress}</span>
          </div>
          <br></br>
          
          <div>
            
          <label className="label">PHONE NO:</label>
            <input
            className="input-font input"
              type="text"
              id="deliveryPhone"
              name="deliveryPhone"
              value={formData.deliveryPhone}
              placeholder='ENTER YOUR PHONE NO'  
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '15px' }}>{formErrors.deliveryPhone}</span>
            
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

export default Delivery;
