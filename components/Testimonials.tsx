"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "John Smith",
    city: "Dallas",
    text: "Arctic Air Solutions saved the day! Our AC went out on a 100-degree day, and they were here within 2 hours. Professional, fast, and reasonably priced.",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    city: "Fort Worth",
    text: "Great experience from start to finish. The technician was very knowledgeable and explained everything clearly. Highly recommend their duct cleaning service.",
    rating: 5
  },
  {
    name: "Michael Chen",
    city: "Plano",
    text: "Honest and reliable. I've used them for both my home and my business. Their upfront pricing is refreshing compared to other companies I've used.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials bg-light">
      <div className="container">
        <div className="section-title">
          <h2>What Our Clients Say</h2>
          <p>Rated 4.9/5 based on 200+ Google Reviews</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="review-card"
            >
              <div className="quote-icon"><Quote size={40} opacity={0.1} /></div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
              <div className="reviewer">
                <div className="reviewer-info">
                  <span className="reviewer-name">{review.name}</span>
                  <span className="reviewer-city">{review.city}, TX</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-light {
          background-color: var(--light-gray);
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .review-card {
          background-color: var(--white);
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .quote-icon {
          position: absolute;
          top: 30px;
          right: 30px;
          color: var(--primary);
        }

        .stars {
          display: flex;
          gap: 5px;
          margin-bottom: 20px;
        }

        .review-text {
          font-style: italic;
          color: var(--text-dark);
          margin-bottom: 30px;
          font-size: 16px;
          line-height: 1.8;
        }

        .reviewer {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .reviewer-info {
          display: flex;
          flex-direction: column;
        }

        .reviewer-name {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          font-size: 16px;
        }

        .reviewer-city {
          color: var(--text-light);
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
