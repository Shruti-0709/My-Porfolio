import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#aboutme" className="navbar-link">About Me</a>
        </li>
        <li className="navbar-item">
          <a href="#skills" className="navbar-link">Skills</a>
        </li>
        <li className="navbar-item">
          <a href="#contact" className="navbar-link">Contact me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
