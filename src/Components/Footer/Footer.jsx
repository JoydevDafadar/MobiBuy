import React from 'react'
import "./Footer.css";

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <h4>About Us</h4>
                <p>We are an online marketplace providing a platform for buyers and sellers to interact and conduct business transactions.</p>
              </div>
              <div className="col-md-4 col-sm-12">
                <h4>Contact Us</h4>
                <ul>
                  <li>123 Main St</li>
                  <li>Anytown, USA</li>
                  <li>(555) 555-5555</li>
                  <li>info@ecommerce.com</li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12">
                <h4>Connect with Us</h4>
                <ul className="social-icons">
                  <li><Link to="/"><i class="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                  <li><Link to="/"><i class="fab fa-instagram"></i></Link></li>
                  <li><Link to="/"><i class="fab fa-pinterest"></i></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <p>&copy; 2023 Ecommerce. All rights reserved.</p>
              </div>
              <div class="col-md-6 col-sm-12">
                <ul class="footer-links">
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Terms and Conditions</Link></li>
                  <li><Link to="/">FAQs</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer