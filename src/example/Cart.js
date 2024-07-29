import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './Ecart.css';

class Ecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'pomegranate', count: 0, pricePerKg: 180, imageUrl: 'https://m.media-amazon.com/images/I/611a1wD9ZGL._AC_UF1000,1000_QL80_.jpg' },
        { name: 'Tomato', count: 0, pricePerKg: 27, imageUrl: 'https://thumbs.dreamstime.com/b/tomatoes-half-tomato-isolated-white-png-file-transparent-background-tomatoes-half-tomato-isolated-white-136961939.jpg' },
        { name: 'Aashirvaad Atta', count: 1, pricePerKg: 240, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/126903_10-aashirvaad-atta-whole-wheat.jpg?tr=w-1080,q=80' },
        { name: 'Cashew', count: 0, pricePerKg: 270, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsOQHniE0e1aya-hWYtjL0BvjmznM-xFcPeg&usqp=CAU' },
        { name: 'Onion', count: 0, pricePerKg: 45 , imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40075537_5-fresho-onion.jpg?tr=w-1080,q=80' },
        { name: 'Idly/Dosa Batter', count: 0, pricePerKg: 72, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/271205_16-id-fresho-idly-dosa-batter.jpg?tr=w-1080,q=80' },
        { name: 'TenderCocunut', count: 0, pricePerKg: 50, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40057966_6-fresho-tender-coconut-medium.jpg?tr=w-1080,q=80' },
        { name: 'Banana', count: 0, pricePerKg: 260, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000025_27-fresho-banana-robusta.jpg?tr=w-1080,q=80' },
        { name: 'Organic Mustard', count: 0, pricePerKg: 160, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40135853_8-bb-royal-organic-mustardrai-small.jpg?tr=w-1920,q=80' },
        { name: 'Guava', count: 0, pricePerKg: 160, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/30002322_11-fresho-guava-thai.jpg?tr=w-1080,q=80' },
        { name: 'Kiwi', count: 0, pricePerKg: 480, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/20000911_32-fresho-kiwi-green.jpg?tr=w-1080,q=80' },
        { name: 'Fresho-Butter', count: 0, pricePerKg: 285, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40224137_2-fresho-fresho-butter-pasteurised.jpg?tr=w-1080,q=80' },
        { name: 'Butteer-Unsalted', count: 0, pricePerKg: 218, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40006899_9-amul-cooking-butter-unsalted.jpg?tr=w-1080,q=80' },
        { name: 'Everyday dairy whitener', count: 0, pricePerKg: 10, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40020214_12-nestle-everyday-dairy-whitener-milk-powder-for-tea.jpg?tr=w-1080,q=80' },
        { name: 'Wheat Bread', count: 0, pricePerKg: 50, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40000564_9-modern-100-whole-wheat-bread-daily-dose-of-fibre-protein.jpg?tr=w-1080,q=80' },
        { name: 'Health Milk', count: 0, pricePerKg: 22, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/40147597_7-heritage-daily-health-toned-milk.jpg?tr=w-1080,q=80' },
        { name: 'Chicken-Boneless', count: 0, pricePerKg: 450, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10001001_7-fresho-chicken-breast-boneless-antibiotic-residue-free.jpg?tr=w-1080,q=80' },
        { name: 'Catla fish', count: 0, pricePerKg: 380, imageUrl: 'https://www.bigbasket.com/media/uploads/p/m/10000755_27-fresho-catla-fish-large-curry-cutbengali-cut-preservative-free-12-15-pcs.jpg?tr=w-1080,q=80' }
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
    const { selectedOption } = this.state;
    const options = [
      { label: 'Fruits', value: 'fruits' },
      { label: 'Vegetables', value: 'vegetables' },
      { label: 'Dryfruits', value: 'dryfruits' },
      // ... other options ...
    ];

    return (
      <div>
        <Select
          options={options}
          value={selectedOption}
          onChange={this.handleSelectChange}
          placeholder="Select your product"
        />

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
            <strong>Total Price:</strong> ₹{this.calculateTotalPrice()}<br></br>
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
