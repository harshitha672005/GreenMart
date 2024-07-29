import React, { Component } from 'react';
import './Ecart.css'
import { Link } from 'react-router-dom';
class Ecart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      otherCount: 0,
      thirdCount: 0,
      fourthCount: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleOtherIncrement = () => {
    this.setState({ otherCount: this.state.otherCount + 1 });
  };

  handleOtherDecrement = () => {
    this.setState({ otherCount: this.state.otherCount - 1 });
  };

  handleThirdIncrement = () => {
    this.setState({ thirdCount: this.state.thirdCount + 1 });
  };

  handleThirdDecrement = () => {
    this.setState({ thirdCount: this.state.thirdCount - 1 });
  };

  handleFourthIncrement = () => {
    this.setState({ fourthCount: this.state.fourthCount + 1 });
  };

  handleFourthDecrement = () => {
    this.setState({ fourthCount: this.state.fourthCount - 1 });
  };

  handlePlaceOrder = () => {
    // Implement logic to place the order
    alert('Your order has been placed!');
  };

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div>
        <Link to="/">Home</Link>
          <p className="bold-text">My Cart</p>           
          <h4>Quantity(kg): {this.state.count}</h4>
          Add to basket<br></br>
          <button onClick={this.handleIncrement}>Add</button>
          <button onClick={this.handleDecrement}>Decrease</button>
          <img src='https://media.istockphoto.com/id/624925456/photo/green-cabbage-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=FweZuhYlv-tS4jRwDOl7Zqb6S3rO9HfFe25HaHR0E3c=' alt="Cabbage" />
        </div>
        <div>
          <p className="bold-text"></p>           
          <h4>Quantity(kg): {this.state.otherCount}</h4>
          Add to basket<br></br>
          <button onClick={this.handleOtherIncrement}>Add</button>
          <button onClick={this.handleOtherDecrement}>Decrease</button>
          <img src='https://cdn.pixabay.com/photo/2022/09/05/09/50/tomatoes-7433786_640.jpg' alt="Tomato"/>
        </div>
        <div>
          <p className="bold-text"></p>           
          <h4>Quantity(kg): {this.state.thirdCount}</h4>
          Add to basket<br></br>
          <button onClick={this.handleThirdIncrement}>Add</button>
          <button onClick={this.handleThirdDecrement}>Decrease</button>
          <img src='https://www.aashirvaad.com/img/Gluten-Free-Flour-Flour---618-by-618.png' alt="Aata"/>
        </div>
        <div style={{ marginBottom: '20px' }}> {/* Add margin bottom to create space */}
          <p className="bold-text"></p>           
          <h4>Quantity(kg): {this.state.fourthCount}</h4>
          Add to basket<br></br>
          <button onClick={this.handleFourthIncrement}>Add</button>
          <button onClick={this.handleFourthDecrement}>Decrease</button>
          <img src='https://edenthestore.in/uploads/products/17151.jpg' alt='Rice'/>
        </div>
        <button onClick={this.handlePlaceOrder} style={{ backgroundColor: 'red', color: 'white' }}>Place Order</button> {/* Apply inline styles for red color */}
      </div>
    );
  }
}

export default Ecart;