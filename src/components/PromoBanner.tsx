"use client";

import React from "react";
import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <section className="promo-banner">
      <div className="container">
        <motion.div 
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="promo-content"
        >
          <div className="promo-text">
            <h2>$50 OFF Your First Service</h2>
            <p>Call today to claim your discount on any repair or maintenance service!</p>
          </div>
          <div className="promo-action">
            <a href="tel:5551234567" className="btn btn-secondary promo-btn">Call Today: (555) 123-4567</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .promo-banner {
          background-color: var(--accent);
          padding: 60px 0;
          color: var(--white);
        }

        .promo-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .promo-text h2 {
          font-size: 48px;
          color: var(--white);
          margin-bottom: 10px;
        }

        .promo-text p {
          font-size: 20px;
          opacity: 0.9;
        }

        .promo-btn {
          white-space: nowrap;
          border-width: 3px;
        }

        @media (max-width: 768px) {
          .promo-content {
            flex-direction: column;
            text-align: center;
          }
          
          .promo-text h2 {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default PromoBanner;
