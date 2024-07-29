/* import React from 'react'

const Dairy = () => {
  return (
    <div>
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>7% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40224136_2-fresho-fresho-butter-pasteurised.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Premium Butter-pasteurised</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 56(100 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>15% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/1209134_4-milky-mist-natural-set-curd.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Farm Fresh Curd-No Preservatives</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 24(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>15% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40006899_9-amul-cooking-butter-unsalted.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Amul Butter-Unsalted</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 161(100 gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  <div>
  <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>12% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40096747_8-amul-malai-fresh-paneer.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Amul Malai Fresh Panner</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs : 80(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to Cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>12% Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/266093_5-nestle-everyday-dairy-whitener-milk-powder-for-tea.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Nestle Everday Dairy whitener milk powder</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 127(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>Limited Time Offer!</h2>
    <img src="https://www.bigbasket.com/media/uploads/p/m/40000564_8-modern-100-whole-wheat-bread-daily-dose-of-fibre-protein.jpg?tr=w-1080,q=80" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>100% Whole Wheat Bread</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs:40(400 g-pouch)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Dairy */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Ecart.css';

class Ecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Everyday dairy whitener', count: 0, pricePerKg: 10, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40020214_12-nestle-everyday-dairy-whitener-milk-powder-for-tea.jpg?tr=w-1080,q=80' },
        { name: 'Wheat Bread', count: 0, pricePerKg: 50, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40000564_9-modern-100-whole-wheat-bread-daily-dose-of-fibre-protein.jpg?tr=w-1080,q=80' },
        { name: 'Health Milk', count: 0, pricePerKg: 22, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40147597_7-heritage-daily-health-toned-milk.jpg?tr=w-1080,q=80' },
        { name: 'Fresho-Butter', count: 0, pricePerKg: 285, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40224137_2-fresho-fresho-butter-pasteurised.jpg?tr=w-1080,q=80' },
        { name: 'Butteer-Unsalted', count: 0, pricePerKg: 218, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40006899_9-amul-cooking-butter-unsalted.jpg?tr=w-1080,q=80' },
        { name: 'Nestle Everday Dairy whitener milk powder', count: 0, pricePerKg: 127, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/266093_5-nestle-everyday-dairy-whitener-milk-powder-for-tea.jpg?tr=w-1080,q=80' },
        
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