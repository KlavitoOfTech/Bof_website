import React, { useState } from 'react';
import MainImage from "../images/hero-pic-1.jpg";
import SecondaryImage from "../images/hero-pic-2.jpg";
import { products } from './data.js';
// import { FaWhatsapp } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>About Us: The Students' Professional Bureau of Finance (BOF), OAU</h1>
          <p>Established in 2011 as the very first student-led finance club in Nigeria by the Department 
            of Management and Accounting, Obafemi Awolowo University, BOF was born out of the 
            need to prepare students for the realities of the financial world. While initially rooted in 
            accounting, our membership now spans all faculties, welcoming any OAU student passionate 
            about finance.
          </p>
          <a href="#shop">
            <button className="shop-now">Learn More</button>
          </a>
        </div>
        <div className="hero-images">
          <img src={MainImage} alt="Main Skincare" className="hero-image main-image" />
          <img src={SecondaryImage} alt="Secondary Product" className="hero-image overlay-image" />
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="shop-section">
        <h1 className="shop-title">Meet Our Alumnis</h1>
        <div className="shop-grid">
          {products.map((product, productIndex) => (
            <div key={productIndex} className="product-card">
              <div className='product-container'>
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-img" 
              />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
  <div className="about-container">
    
    {/* Left side */}
    <div className="about-text">
      <h2 className="about-title">Our Vision</h2>
      <p className="about-description">
        To be Africa’s leading student-led finance organization, producing 
        world-class financial professionals equipped with technical expertise, 
        innovative thinking, and ethical leadership.
      </p>
    </div>

    {/* Right side (now also text, like left) */}
    <div className="about-text">
      <h2 className="about-title">Our Mission</h2>
      <p className="about-description">
        To empower students with practical financial skills, industry exposure, and leadership
        development through cutting-edge training, competitions, and networking opportunities.
      </p>
    </div>

  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Our Core Values</h2>
          <p className="contact-subtext">
            ● <b>Excellence</b> – We uphold the highest standards in financial education and professional
            development.<br/>
            ● <b>Innovation</b> – We embrace technology and forward-thinking approaches in finance.<br/>
            ● <b>Integrity</b> – We foster ethical decision-making and accountability.<br/>
            ● <b>Collaboration</b> – We believe in teamwork and strategic partnerships for collective
            growth.<br/>
            ● <b>Impact</b> – We are committed to transforming students into industry-ready professionals.<br/>
          </p>
          {/* <div className="contact-icons">
            <a href="https://wa.me/2348110862695" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a href="https://instagram.com/yourProfile" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} color="#E4405F" />
            </a>
            <a href="mailto:yourEmail@gmail.com">
              <SiGmail size={30} color="#D44638" />
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}

