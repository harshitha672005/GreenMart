

import React from 'react';
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import './Home.css';
import { Link } from 'react-router-dom';
 
const Home = (props) => {
  return (
    <div>
      
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" component="div" className="navbar-title">
            {props.ourGroupProject}
          </Typography>
          
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="ecart">Cart</Link></Button>
          <Button color="inherit"><Link to="Form">Payment</Link></Button>
          <Button color="inherit"><Link to="about">About</Link></Button>
          <Button color="inherit"><Link to="login">Login</Link></Button>
        </Toolbar>
      </AppBar>

      <Container className="home-container" maxWidth="md">
        <Typography variant="h2" component="div" className="title">
          Welcome to Our GreenMart<br></br>
        </Typography>
        <Typography variant="body1" className="description">
          Explore our amazing products and services. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
        </Typography>
        <Button variant="contained" color="primary" className="explore-button">
        
          Explore Now
        </Button>
      </Container>
    </div>
  );
};

export default Home;
