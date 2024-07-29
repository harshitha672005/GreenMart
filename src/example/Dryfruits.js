/* import React from 'react'

const Dryfruits = () => {
  return (
    <div>
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>Limited Time Offer!</h2>
    <img src="https://images.news18.com/webstories/2023/10/Almonds.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Almond</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 270(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>Limited Time Offer!</h2>
    <img src="https://media.post.rvohealth.io/wp-content/uploads/2019/11/cashew-nut-nuts-bowl-732x549-thumbnail.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Cashew</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 240(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>Limited Time Offer!</h2>
    <img src="https://www.natureloc.com/image/cache/catalog/New%202022/pista-600x600.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Pista</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 161(100 gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  <div>
  <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>Limited Time Offer!</h2>
    <img src="https://origin.club/media/catalog/product/cache/86eaafd287624d270d87c663dd3976d5/w/a/walnut_2__1.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Walnut</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs : 180(100 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to Cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>Limited Time Offer!</h2>
    <img src="https://sardarjimewewale.com/wp-content/uploads/2023/12/RoastedFlaxSeeds_800x.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Flax Seeds</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 46(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
    <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>Limited Time Offer!</h2>
    <img src="https://www.nutseedmart.com/wp-content/uploads/2021/08/Phool-Makahne.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Foxnut</p>
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs:100(200 Gm)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
  </div>
  </div>
  </div>
 

  )
}

export default Dryfruits */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Ecart.css';
class Ecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
       { name: 'Cashew', count: 0, pricePerKg: 270, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOQHniE0e1aya-hWYtjL0BvjmznM-xFcPeg&usqp=CAU' },
        { name: 'Foxnut', count: 0, pricePerKg: 100, imageUrl: 'https://www.nutseedmart.com/wp-content/uploads/2021/08/Phool-Makahne.jpg' },
        { name: 'Almond', count: 0, pricePerKg: 270, imageUrl: 'https://images.news18.com/webstories/2023/10/Almonds.jpg' },
        { name: 'Cashew', count: 0, pricePerKg: 240, imageUrl: 'https://www.natureloc.com/image/cache/catalog/New%202022/pista-600x600.jpg' },
        { name: 'Walnut', count: 0, pricePerKg: 180, imageUrl: 'https://origin.club/media/catalog/product/cache/86eaafd287624d270d87c663dd3976d5/w/a/walnut_2__1.jpg' },
        { name: 'Flax Seeds', count: 0, pricePerKg: 46, imageUrl: 'https://sardarjimewewale.com/wp-content/uploads/2023/12/RoastedFlaxSeeds_800x.jpg' }
      
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