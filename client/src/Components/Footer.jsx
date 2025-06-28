import React from 'react';
import '../Css/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glitz-glam-footer">
      <div className="footer-top">
        <div className="brand-info">
          <h2 className="logo">GLITZ & GLAM</h2>
          <p className="brand-description">
            Lorem ipsum dolor sit amet, consectetur, sedid do eiusmod tempor incidit ut labore et dolore magna aliqua. 
            Quis ipsum usendi laboris mollit
          </p>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Shop Online</h3>
          <ul className="footer-links">
            <li>Jewellery Materials</li>
            <li>Sizing Children's Jewellery</li>
            <li>Delivery & Returns</li>
            <li>Order Tracking</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Categories</h3>
          <ul className="footer-links">
            <li>Rings</li>
            <li>Accessories</li>
            <li>Earrings</li>
            <li>Gold Buckle</li>
            <li>Bracelets</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Information</h3>
          <ul className="footer-links">
            <li>Order Tracking</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Tutorials</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="column-title">Need Help?</h3>
          <address className="contact-info">
            <p>Head Office: 785 15h Street,<br />Office 478 Ben<br />De 81566</p>
            <p>Tel: 0123456778</p>
            <p>Email: hello@glitz-glam.com</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Glitz & Glam. All Rights Reserved</p>
        <p>AALIYA KHAN</p>
      </div>
    </footer>
  );
};

export default Footer;