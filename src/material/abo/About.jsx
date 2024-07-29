import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './About.css';

const About = () => {
  return (
    <div>
      {/* Use the Link component from react-router-dom */}
      <Link to="/">Home</Link>
      <Container className="about-container" maxWidth="md">
        <Typography variant="h2" component="div" className="title">
          About Our Grocery App
        </Typography>
        <Typography variant="body1" className="description">
          Welcome to our Grocery App! We are dedicated to providing a seamless and convenient shopping experience for all your grocery needs.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo a turpis sollicitudin efficitur. Quisque fermentum justo ac velit auctor, a semper tortor tincidunt.
        </Typography>
        <Typography variant="body1" className="description">
          Our mission is to make grocery shopping easy, affordable, and enjoyable. Whether you're looking for fresh produce, pantry staples, or household essentials,
          our app has you covered. Browse through our diverse selection, add items to your cart, and have them delivered to your doorstep.
        </Typography>
        <Typography variant="body1" className="description">
          Thank you for choosing our Grocery App. We appreciate your trust and strive to provide the best possible service. If you have any feedback or questions,
          feel free to contact us. Happy shopping!
        </Typography>
      </Container>
    </div>
  );
};

export default About;
