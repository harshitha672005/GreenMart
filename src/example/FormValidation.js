import React, { useState } from 'react';
import './Newpage.css';
import { createPortal } from 'react-dom';
import Modal from './Modal';

const FormValidation = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(false);
  };

  // State to manage form inputs
  const [formData, setFormData] = useState({
    cardNo: '',
    holderName: '',
    expireDate: '',
    cvv: '',
  });

  // State to manage form errors
  const [formErrors, setFormErrors] = useState({
    cardNo: '',
    holderName: '',
    expireDate: '',
    cvv: '',
  });

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
    // If there are no errors, you can proceed with form submission
    if (isFormValid() && Object.values(formData).every(value => value.trim() !== '')) {
      // Perform form submission logic here
      // For now, let's just open the modal
      
      setModalOpen(true);
    } 
    // else {
    //   // Optionally, you can display an error message or handle the error in some way
    //   alert('Fix your errors');
    // }
  };

  // Function to validate form inputs
  const validateForm = () => {
    const errors = {};

    // Example validation rules (you can customize these)
    // ... (same as your existing code)
    if (!formData.cardNo.trim()) {
        errors.cardNo = 'Card number is required';
      } else if (!/^\d{16}$/.test(formData.cardNo.replace(/\s/g, ''))) {
        errors.cardNo = 'Card number should contain only 16-digit numbers';
      } else {
        // Format the card number by adding spaces after every 4 digits
        formData.cardNo = formData.cardNo.replace(/(\d{4})/g, '$1 ').trim();
      }
      
      if (!formData.holderName.trim()) {
        errors.holderName = 'Holder name is required';
      } else if (!/^[A-Z][a-z]*$/.test(formData.holderName)) {
        errors.holderName = 'Name should start with capital letter';
      }
      

    if (!formData.expireDate.trim()) {
        errors.expireDate = 'Expire date is required';
      } 
      if (!formData.cvv.trim()) {
        errors.cvv = 'CVV code is required';
      } else if (!/^\d{3}$/.test(formData.cvv)) {
        errors.cvv = 'CVV should contain only 3-digit numbers';
      } 

    setFormErrors(errors);
  };

  // Function to check if the form is valid
  const isFormValid = () => {
    return Object.values(formErrors).every((error) => !error);
  };

  return (
    <div style={{ backgroundImage: 'url("https://static.blog.bolt.eu/LIVE/wp-content/uploads/2022/04/30135418/grocery-list.jpg")', backgroundSize: 'cover', height: '100vh' }}>

      <center>
        <form onSubmit={handleSubmit}>
          <div className="input-form">
            <div className="wrapper">
              <div className="container">
                <div className="title">PAYMENT FORM...</div>
                <div className="section-1">
        <div className="items">
        <label className="label">CARD NUMBER:</label>
            <input
            className='input'
              type="phone"
              id="cardNo"
              name="cardNo"
              placeholder='XXXX XXXX XXXX XXXX'
              value={formData.cardNo}
              onChange={handleInputChange}
              
            />
            <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.cardNo}</span>
          </div>
          </div>
          <div className="section-2">
        <div className="items">
        <label className="label">CARD HOLDER:</label>
            <input
            placeholder='HOLDER NAME'
            className="input"
              type="name"
              id="holderName"
              name="holderName"
              
              value={formData.holderName}
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.holderName}</span>
            </div>
          </div>
          
          <div className="section-3">
        <div className="items">
        <label className="label" for="monthYearInput">EXPIRE DATE:</label>
            
            <input
            className="input"
              type="month"
              id="expireDate"
              name="expireDate"
              value={formData.expireDate}
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.expireDate}</span>
            
            
          </div>
          <br></br>
          <br></br>
          
          <div className="items">
          <div className="cvc">
          <label className="label">CVV CODE:</label>
          
          </div>
            <input
            className='input'
              type="cvv"
              id="cvv"
              name="cvv"
              placeholder='XXX'
              value={formData.cvv}
              onChange={handleInputChange}
            />
            <span style={{ color: 'red', fontSize: '13px' }}>{formErrors.cvv}</span>
          </div>
          </div>
          
          
          
                

                <button className='btn' type="submit">SUBMIT</button>

                {modalOpen &&
                  createPortal(
                    <Modal
                      closeModal={handleButtonClick}
                      onSubmit={handleButtonClick}
                      onCancel={handleButtonClick}
                    >
                      <center>
                        <h3 style={{ color: 'red', fontFamily: 'Times New Roman', fontWeight: 'bold' }}>PAYMENT CONFIRMATION</h3>
                        <p style={{ color: 'green', fontFamily: 'Times New Roman', fontWeight: 'bold' }}>THANK YOU!!</p>
                      </center>
                    </Modal>,
                    document.body
                  )}
              </div>
            </div>
          </div>
        </form>
      </center>
    </div>
  );
};

export default FormValidation;