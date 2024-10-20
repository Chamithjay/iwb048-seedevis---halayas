import React from 'react';
import './css/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Blood Donation</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#donors">Donors</a></li>
        <li><a href="#sign-up">Sign Up</a></li>
        <li><button className="donate-button">Donate</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
