import React, { useState } from 'react';
import Logo from "../images/bof-logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo-image" />
          <h2 className="logo">BOF OAU</h2>
        </div>
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <ul className="sidebar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Alumnis</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="hamburger-menu" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
