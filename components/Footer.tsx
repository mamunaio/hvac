"use client";

import React from "react";
import { Globe, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo footer-logo">
              <a href="/">
                <span className="logo-arctic">ARCTIC</span>
                <span className="logo-air">AIR</span>
                <span className="logo-solutions">SOLUTIONS</span>
              </a>
            </div>
            <p className="footer-desc">
              Your trusted partner for expert HVAC services. Licensed, insured, and committed to your comfort 24 hours a day.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><Globe size={20} /></a>
              <a href="#" className="social-link" aria-label="Twitter"><Globe size={20} /></a>
              <a href="#" className="social-link" aria-label="Instagram"><Globe size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Our Services</h3>
            <ul>
              <li><a href="#services">AC Repair</a></li>
              <li><a href="#services">Heating Repair</a></li>
              <li><a href="#services">Installation</a></li>
              <li><a href="#services">Duct Cleaning</a></li>
              <li><a href="#services">Air Quality</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>123 HVAC Blvd, Suite 100<br />Dallas, TX 75201</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: service@arcticair.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arctic Air Solutions. All Rights Reserved.</p>
          <button onClick={scrollToTop} className="scroll-top" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--primary);
          color: var(--white);
          padding: 80px 0 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-logo {
          margin-bottom: 25px;
        }

        .logo-arctic {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 2px;
        }

        .logo-air {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 400;
          color: var(--white);
          letter-spacing: 4px;
        }

        .logo-solutions {
          font-size: 10px;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 3px;
          margin-top: 2px;
          display: block;
        }

        .footer-desc {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 25px;
          font-size: 14px;
          line-height: 1.8;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: var(--transition);
        }

        .social-link:hover {
          background-color: var(--accent);
          transform: translateY(-3px);
        }

        .footer-links h3, .footer-contact h3 {
          color: var(--white);
          font-size: 20px;
          margin-bottom: 25px;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-links h3::after, .footer-contact h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 30px;
          height: 2px;
          background-color: var(--accent);
        }

        .footer-links ul li {
          margin-bottom: 15px;
        }

        .footer-links ul li a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }

        .footer-links ul li a:hover {
          color: var(--accent);
          padding-left: 5px;
        }

        .footer-contact p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
          margin-bottom: 15px;
          line-height: 1.8;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footer-bottom p {
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
        }

        .scroll-top {
          background-color: var(--accent);
          color: var(--white);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .scroll-top:hover {
          background-color: var(--accent-dark);
          transform: translateY(-5px);
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
