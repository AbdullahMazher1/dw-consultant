import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className='site-head'>
          DW-Consultant.
        </h1>
      </div>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes size={24} color="white" /> : <FaBars size={24} color="white" />}
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <li><button className='nav-buttons' href="#home">Home</button></li>
        <li><button className='nav-buttons' href="#about">About</button></li>
        <li><button className='nav-buttons' href="#contact">Contact</button></li>
        <li><button className='nav-buttons' href="#pricing">Pricing</button></li>
        <li><button className='nav-buttons' href="#products">Products</button></li>
        <li><button className='nav-buttons' href="#price">Price</button></li>
      </ul>
      <div className="contact-info">
        <p className='ph-number'>(+92) 02045678898</p>
        <div className="social-icons">
          <FaInstagram color='white' size={22} />
          <FaLinkedin color='white' size={22} />
          <FaFacebook color='white' size={22} />
          <FaWhatsapp color='white' size={22} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
