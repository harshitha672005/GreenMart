/* import React from 'react'

const Vegetables = () => {
  return (
    <div>
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>27% Offer!</h2>
    <img src="https://thumbs.dreamstime.com/b/tomatoes-half-tomato-isolated-white-png-file-transparent-background-tomatoes-half-tomato-isolated-white-136961939.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Tomato</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 27(1 Kg)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>35% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/10000063_20-fresho-broccoli.jpg?tr=w-1920,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Broccoli</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 37.23(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>25% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/10000273_16-fresho-mushrooms-button.jpg?tr=w-1920,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Mushrooms</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 48.5(1 pack)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  <div>
  <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>43% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/10000316_15-fresho-baby-potato.jpg?tr=w-1920,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Baby potato</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs : 51.1(1 Kg)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to Cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>32% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40004992_14-fresho-sweet-corn.jpg?tr=w-1920,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Sweet Corn</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 55.48(2 pcs)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>17% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/30006456_1-fresho-chilli-thai-bird.jpg?tr=w-1920,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Chilli</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs:1204.2( i Kg)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Vegetables */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Ecart.css';
class Ecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Tomato', count: 0, pricePerKg: 27, imageUrl: 'https://thumbs.dreamstime.com/b/tomatoes-half-tomato-isolated-white-png-file-transparent-background-tomatoes-half-tomato-isolated-white-136961939.jpg' },
        { name: 'Broccoli', count: 0, pricePerKg: 37, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000063_20-fresho-broccoli.jpg?tr=w-1920,q=80' },
        { name: '>Mushrooms', count: 0, pricePerKg: 48.5, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000273_16-fresho-mushrooms-button.jpg?tr=w-1920,q=80' },
        { name: 'Baby potato', count: 0, pricePerKg: 51.1, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000316_15-fresho-baby-potato.jpg?tr=w-1920,q=80' },
        { name: 'Sweet Corn', count: 0, pricePerKg: 58.45, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40004992_14-fresho-sweet-corn.jpg?tr=w-1920,q=80' },
        { name: 'Chilli', count: 0, pricePerKg: 1204.2, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/30006456_1-fresho-chilli-thai-bird.jpg?tr=w-1920,q=80'}
        ],
      selectedOption: null,
    };
  }

  handleIncrement = (index) => {
    const updatedItems = [...this.state.items];
    updatedItems[index].count++;
    this.setState({ items: updatedItems });
  };

  handleDecrement = (index) => {
    const updatedItems = [...this.state.items];
    if (updatedItems[index].count > 0) {
      updatedItems[index].count--;
      this.setState({ items: updatedItems });
    }
  };

  handleRemove = (index) => {
    const updatedItems = [...this.state.items];
    updatedItems.splice(index, 1);
    this.setState({ items: updatedItems });
  };

  handleBuyNow = () => {
    alert('Buying items...');
  };

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  calculatePrice = (count, pricePerKg) => {
    return count * pricePerKg;
  };

  calculateTotalPrice = () => {
    return this.state.items.reduce((total, item) => {
      return total + this.calculatePrice(item.count, item.pricePerKg);
    }, 0);
  };

  render() {
   

    return (
      <div>
        

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexWrap: 'wrap' }}>
          {this.state.items.map((item, index) => (
            <div key={index} className="product-container">
              <img src={item.imageUrl} alt={item.name} className="product-image" />
              <div className="product-details">
                <span>{item.name}</span>
                <div className="quantity-controls">
                  <button onClick={() => this.handleDecrement(index)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => this.handleIncrement(index)}>+</button>
                </div>
                <p>₹{this.calculatePrice(item.count, item.pricePerKg)}</p>
                <button className="remove-button" onClick={() => this.handleRemove(index)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="total-price">
            <strong>Total Price:</strong> ₹{this.calculateTotalPrice()}
            <button className="buy-now-button" onClick={this.handleBuyNow}>
              <Link to='/address' style={{ textDecoration: 'none', color: 'white' }}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Ecart;