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
      setIsScrolled(window.scrollY > 20);
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
    <header 
      className={`navbar ${isScrolled ? "scrolled" : ""} ${!isHome ? "solid" : ""}`}
    >
      <div className="container nav-container">
        <div className="logo">
          <Link href="/">
            <span className="logo-arctic">ARCTIC</span>
            <div className="logo-bottom">
              <span className="logo-air">AIR</span>
              <span className="logo-solutions">SOLUTIONS</span>
            </div>
          </Link>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={`nav-link ${isActive ? "active" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="tel:5551234567" className="btn-call hidden-mobile">
            <div className="phone-icon-wrapper">
              <Phone size={16} fill="currentColor" />
            </div>
            <span>(555) 123-4567</span>
          </a>
          <button 
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
          padding: 30px 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background-color: transparent;
        }

        .navbar.solid, .navbar.scrolled {
          padding: 15px 0;
          background-color: rgba(10, 22, 40, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
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
          text-decoration: none;
        }

        .logo-arctic {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 3px;
          transition: var(--transition);
        }

        .logo-bottom {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: -2px;
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
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .nav-list {
          display: flex;
          gap: 35px;
          align-items: center;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-weight: 500;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8) !important;
          font-size: 13px;
          letter-spacing: 1.5px;
          position: relative;
          padding: 8px 0;
          transition: all 0.3s ease;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--white) !important;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: var(--accent);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
        }

        .nav-link:hover::after, .nav-link.active::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .btn-call {
          display: flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, var(--accent), var(--accent-dark));
          color: var(--white);
          padding: 12px 24px;
          border-radius: 50px;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 15px;
          box-shadow: 0 4px 15px rgba(232, 67, 10, 0.2);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-call:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(232, 67, 10, 0.4);
          filter: brightness(1.1);
        }

        .phone-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.2);
          padding: 6px;
          border-radius: 50%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--white);
          cursor: pointer;
          padding: 5px;
          transition: var(--transition);
        }

        .menu-toggle:hover {
          color: var(--accent);
        }

        @media (max-width: 992px) {
          .navbar {
            padding: 20px 0;
          }
          
          .navbar.scrolled {
            padding: 12px 0;
          }

          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            height: 100vh;
            background-color: var(--primary);
            padding: 100px 40px;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: -10px 0 30px rgba(0,0,0,0.5);
            z-index: 999;
          }

          .nav-menu.open {
            right: 0;
          }

          .nav-list {
            flex-direction: column;
            gap: 30px;
            align-items: flex-start;
          }

          .nav-link {
            font-size: 20px;
          }

          .menu-toggle {
            display: block;
            position: relative;
            z-index: 1001;
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
