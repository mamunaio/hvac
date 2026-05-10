"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Reviews", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""} ${!isHome ? "solid" : ""}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="/">
            <span className="logo-arctic">ARCTIC</span>
            <span className="logo-air">AIR</span>
            <span className="logo-solutions">SOLUTIONS</span>
          </a>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="tel:5551234567" className="btn-call hidden-mobile">
            <Phone size={18} fill="currentColor" />
            <span>(555) 123-4567</span>
          </a>
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 25px 0;
          transition: var(--transition);
          background-color: transparent;
        }

        .navbar.solid, .navbar.scrolled {
          background-color: var(--primary);
          padding: 15px 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-arctic {
          font-family: var(--font-heading);
          font-size: 24px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 2px;
        }

        .logo-air {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 400;
          color: var(--white);
          letter-spacing: 4px;
        }

        .logo-solutions {
          font-size: 8px;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 3px;
          margin-top: 2px;
        }

        .nav-list {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          color: #FFFFFF !important;
          font-size: 14px;
          letter-spacing: 1px;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent);
          transition: var(--transition);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .btn-call {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: var(--accent);
          color: var(--white);
          padding: 10px 20px;
          border-radius: 4px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 16px;
        }

        .btn-call:hover {
          background-color: var(--accent-dark);
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--white);
          cursor: pointer;
        }

        @media (max-width: 992px) {
          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--primary);
            padding: 20px;
            display: none;
            flex-direction: column;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-menu.open {
            display: flex;
          }

          .nav-list {
            flex-direction: column;
            gap: 20px;
          }

          .menu-toggle {
            display: block;
          }

          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
