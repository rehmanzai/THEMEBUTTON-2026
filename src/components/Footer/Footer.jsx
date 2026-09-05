import React from "react";
import "./Footer.css";
import {
  FaCode,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronRight,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Top Gradient Line */}
      <div className="footer-top-line"></div>

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <FaCode />
            <span>Web Coding</span>
          </div>

          <p>
            We build modern, fast and responsive web experiences
            that help your business grow.
          </p>

          <div className="footer-small-line"></div>

          <h3>Follow Us</h3>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-column">
          <h2>Quick Links</h2>

          <ul>
            <li>
              <a href="#home">
                <FaChevronRight /> Home
              </a>
            </li>

            <li>
              <a href="#about">
                <FaChevronRight /> About Us
              </a>
            </li>

            <li>
              <a href="#services">
                <FaChevronRight /> Services
              </a>
            </li>

            <li>
              <a href="#projects">
                <FaChevronRight /> Our Projects
              </a>
            </li>

            <li>
              <a href="#technologies">
                <FaChevronRight /> Technologies
              </a>
            </li>

            <li>
              <a href="#contact">
                <FaChevronRight /> Contact Us
              </a>
            </li>
          </ul>
        </div>


        {/* Services */}
        <div className="footer-column">
          <h2>Services</h2>

          <ul>
            <li>
              <a href="#services">
                <FaChevronRight /> Web Design
              </a>
            </li>

            <li>
              <a href="#services">
                <FaChevronRight /> Web Development
              </a>
            </li>

            <li>
              <a href="#services">
                <FaChevronRight /> UI/UX Design
              </a>
            </li>

            <li>
              <a href="#services">
                <FaChevronRight /> Responsive Design
              </a>
            </li>

            <li>
              <a href="#services">
                <FaChevronRight /> SEO Optimization
              </a>
            </li>

            <li>
              <a href="#services">
                <FaChevronRight /> Maintenance
              </a>
            </li>
          </ul>
        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">
          <h2>Contact Us</h2>

          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <span>
              123 Tech Street,
              <br />
              Digital City, PK
            </span>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <span>+123 456 7890</span>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <span>info@webcoding.com</span>
          </div>
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © 2026 <span>Web Coding</span>. All rights reserved.
        </p>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;