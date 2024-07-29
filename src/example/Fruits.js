/* import React from 'react'

 const Fruits = () => {
  return (
    
     <div>
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
     <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>21% Offer!</h2>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhNdqh0xEFdBAUfpYv3y_ycmn3TgP_5jPbNvZyxVlEKS8KTSf6hHo9hI4fwlhLxVUPvQ&usqp=CAU" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Apple</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 270(2 Kg)</p>
     <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
   </div>
   <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>29% Offer!</h2>
     <img src="https://m.media-amazon.com/images/I/611a1wD9ZGL._AC_UF1000,1000_QL80_.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Pomogranate</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 140(1 Kg)</p>
     <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
   </div>
   <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>21% Offer!</h2>
     <img src="https://www.shutterstock.com/shutterstock/photos/2053015835/display_1500/stock-photo-orange-with-sliced-and-green-leaves-isolated-on-white-background-2053015835.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Orange</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 101(1 kg)</p>
     <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
  </div>
   </div>
   <div>
   <div style={{display:'flex',justifyContent:'space-around',marginTop:'20px'}}>
   <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>43% Offer!</h2>
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/800px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
    <p style={{ color: '#555', fontSize: '1.2rem' }}>Kiwi</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs : 155(3 pcs)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to Cart</button>
   </div>
   <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>33% Offer!</h2>
    <img src="https://www.melissas.com/cdn/shop/products/image-of-organic-mini-red-seedless-watermelon-fruit-29678417018924_512x512.jpg?v=1644607939" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Watermelon</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs: 46(1 Kg)</p>
    <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
   </div>
   <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', textAlign: 'center', flex: 1, maxWidth: 'calc(50% - 20px)' }}>
     <h2 style={{ color: '#333', fontSize: '2rem', margin: '0' }}>27% Offer!</h2>
    <img src="https://fruitboxco.com/cdn/shop/products/asset_19_grande.jpg?v=1594383262" alt="Offer" style={{ maxWidth: '100%', height: '200px', margin: '15px 0' }} />
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Guava</p>
     <p style={{ color: '#555', fontSize: '1.2rem' }}>Rs:120(1 Kg)</p>
     <button style={{ backgroundColor: '#006400', color: 'white', padding: '12px 16px', fontSize: '1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add to cart</button>
   </div>
   </div>
   </div>
   </div>
   )
 }

 export default Fruits */
 import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Ecart.css';
 class Ecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'pomegranate', count: 0, pricePerKg: 180, imageUrl: 'https://m.media-amazon.com/images/I/611a1wD9ZGL._AC_UF1000,1000_QL80_.jpg' },
        { name: 'Banana', count: 0, pricePerKg: 260, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000025_27-fresho-banana-robusta.jpg?tr=w-1080,q=80' },
        { name: 'Guava', count: 0, pricePerKg: 160, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-1080,q=80' },
        { name: 'Watermelon', count: 0, pricePerKg: 48, imageUrl: 'https://www.melissas.com/cdn/shop/products/image-of-organic-mini-red-seedless-watermelon-fruit-29678417018924_512x512.jpg?v=1644607939' },
        { name: 'Orange', count: 0, pricePerKg: 98, imageUrl: 'https://www.shutterstock.com/shutterstock/photos/2053015835/display_1500/stock-photo-orange-with-sliced-and-green-leaves-isolated-on-white-background-2053015835.jpg' },
        { name: 'Kiwi', count: 0, pricePerKg: 480, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20000911_32-fresho-kiwi-green.jpg?tr=w-1080,q=80' },
        
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