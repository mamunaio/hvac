"use client";

import React from "react";
import { ShieldCheck, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="container hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Stay Cool in Summer.<br />
            <span className="text-accent">Stay Warm in Winter.</span>
          </h1>
          <p className="hero-subtitle">
            Trusted HVAC Services in Dallas, TX — Available 24/7 for all your heating and cooling needs.
          </p>
          <div className="hero-btns">
            <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
            <a href="tel:5551234567" className="btn btn-secondary">Call Now: (555) 123-4567</a>
          </div>
          
          <div className="hero-trust">
            <div className="trust-item">
              <ShieldCheck size={24} className="text-accent" />
              <span>Licensed & Insured</span>
            </div>
            <div className="trust-item">
              <Clock size={24} className="text-accent" />
              <span>20+ Years Experience</span>
            </div>
            <div className="trust-item">
              <Star size={24} className="text-accent" />
              <span>5-Star Rated</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 120px;
          background-image: url('https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
          color: var(--white);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, var(--primary) 30%, transparent 100%);
          opacity: 0.9;
        }

        .hero-container {
          position: relative;
          z-index: 10;
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-title {
          font-size: 72px;
          color: var(--white);
          margin-bottom: 20px;
          line-height: 1.1;
        }

        .text-accent {
          color: var(--accent);
        }

        .hero-subtitle {
          font-size: 20px;
          margin-bottom: 40px;
          max-width: 600px;
          opacity: 0.9;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .hero-trust {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero {
            text-align: center;
            justify-content: center;
            background-image: linear-gradient(rgba(10, 22, 40, 0.8), rgba(10, 22, 40, 0.8)), url('https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');
          }
          
          .hero-overlay {
            background: var(--primary);
            opacity: 0.8;
          }

          .hero-title {
            font-size: 48px;
          }

          .hero-btns {
            flex-direction: column;
            align-items: center;
          }

          .hero-trust {
            justify-content: center;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
