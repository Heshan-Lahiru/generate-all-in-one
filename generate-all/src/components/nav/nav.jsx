import React from 'react';
import './nav.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Brand</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/pdf">PDF</a></li>
        <li><a href="/audio">Audio</a></li>
        <li><a href="/video">Video</a></li>
        <li><a href="/image">image</a></li>
      </ul>
      <div className="navbar-toggle">&#9776;</div>
    </nav>
  );
};

export default Navbar;
