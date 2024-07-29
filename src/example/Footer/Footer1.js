import React from 'react';
import veges from '../../ASSETS/veges.png';

const Footer1 = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '20px 0px',
        backgroundColor: 'rgb(240, 240, 240)',
        height: '350px',
        marginTop: '30px',
        overflow: 'hidden',
      }}
    >
      <div style={{ width: '45%' }}>
        <img src={veges} alt='veges' style={{ width: '100%' }} />
      </div>
      <div style={{ width: '45%' }}>
        <h1 style={{ width: '80%', fontSize: '30px', fontWeight: '300', marginBottom: '10px' }}>
          Fresh Vegetables & Groceries at your doorstep
        </h1>
        <p style={{ width: '60%', fontSize: '20px', fontWeight: '300', marginBottom: '10px' }}>
          We deliver fresh Vegetables & Groceries at your doorstep.
        </p>
      </div>
    </div>
  );
};

export default Footer1;
