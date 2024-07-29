import React from 'react';
import './Nave.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="top-navbar">
        <ul>
          <li><a href="#search">Search</a></li>
          <li><a href="#favorite">Favorite</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#app-name">App Name</a></li>
        </ul>
      </div>

      {/* Main Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
