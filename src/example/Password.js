import React, { useState } from 'react';

const Password = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSaveChanges = () => {
    // Perform form validation
    if (oldPassword === newPassword) {
      setErrorMessage("Old and new passwords should be different!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirmation password do not match!");
      return;
    }

    // Confirm the action
    const confirmChange = window.confirm("Are you sure you want to change your password?");
    
    if (confirmChange) {
      // You can perform any necessary actions here (e.g., updating the password).
      // For this example, let's just show the success message.
      setShowSuccessMessage(true);
      setErrorMessage('');
    }
  };

  const backgroundImageUrl =
    'url("https://ecocart.io/wp-content/uploads/resized/2023/01/iStock-1371318211-1120x455-c-default.jpg")'; // Replace with the actual path

  return (
    <div
      style={{
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '40px',
          borderRadius: '10px',
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 style={{ color: '#333', marginBottom: '30px' }}>Change Password</h1>

        <div style={{ margin: '20px 0' }}>
          <div style={{ marginBottom: '20px', position: 'relative' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', color: '#555' }} htmlFor='oldpass'>
              Old Password <span>*</span>
            </label>
            <input
              type={showOldPassword ? 'text' : 'password'}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '5px',
                boxSizing: 'border-box',
              }}
            />
            <button
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#555',
                outline: 'none',
                textDecoration: 'underline',
              }}
              onClick={() => setShowOldPassword(!showOldPassword)}
            >
              {showOldPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div style={{ marginBottom: '20px', position: 'relative' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', color: '#555' }} htmlFor='newpass'>
              New Password <span>*</span>
            </label>
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '5px',
                boxSizing: 'border-box',
              }}
            />
            <button
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#555',
                outline: 'none',
                textDecoration: 'underline',
              }}
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div style={{ marginBottom: '20px', position: 'relative' }}>
            <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', color: '#555' }} htmlFor='confirmPass'>
              Confirm New Password <span>*</span>
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                fontSize: '16px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                marginBottom: '5px',
                boxSizing: 'border-box',
              }}
            />
            <button
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                color: '#555',
                outline: 'none',
                textDecoration: 'underline',
              }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {errorMessage && (
          <p style={{ marginTop: '10px', fontSize: '14px', color: 'red' }}>{errorMessage}</p>
        )}

        <button
          style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '12px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s',
          }}
          onClick={handleSaveChanges}
        >
          Save Changes
        </button>

        {showSuccessMessage && (
          <p style={{ marginTop: '20px', fontSize: '14px', color: 'green' }}>
            Your password was changed successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Password;
