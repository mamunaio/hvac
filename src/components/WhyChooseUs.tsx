"use client";

import React from "react";
import { Zap, Users, Tag, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <Zap size={40} />,
    title: "Fast Response",
    desc: "We understand that HVAC issues can't wait. Our team is ready to respond 24/7."
  },
  {
    icon: <Users size={40} />,
    title: "Certified Techs",
    desc: "All our technicians are highly trained, certified, and background-checked."
  },
  {
    icon: <Tag size={40} />,
    title: "Upfront Pricing",
    desc: "No hidden fees or surprises. We provide clear, honest estimates before work begins."
  },
  {
    icon: <CheckCircle size={40} />,
    title: "Guaranteed",
    desc: "We stand behind our work with a 100% satisfaction guarantee on every job."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="why-us-bg" />
      <div className="container relative">
        <div className="section-title light">
          <h2 className="text-white">Why Choose Arctic Air?</h2>
          <p className="text-white-dim">We've built our reputation on reliability, quality workmanship, and exceptional customer service.</p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="reason-item"
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="text-white">{reason.title}</h3>
              <p className="text-white-dim">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-us {
          position: relative;
          background-color: var(--primary);
          overflow: hidden;
        }

        .why-us-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(45deg, rgba(232, 67, 10, 0.05) 25%, transparent 25%, transparent 50%, rgba(232, 67, 10, 0.05) 50%, rgba(232, 67, 10, 0.05) 75%, transparent 75%, transparent);
          background-size: 100px 100px;
          opacity: 0.3;
        }

        .relative {
          position: relative;
          z-index: 10;
        }

        .text-white {
          color: var(--white);
        }

        .text-white-dim {
          color: rgba(255, 255, 255, 0.7);
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }

        .reason-item {
          text-align: center;
          padding: 20px;
        }

        .reason-icon {
          color: var(--accent);
          margin-bottom: 20px;
          display: inline-block;
          padding: 20px;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .reason-item h3 {
          font-size: 24px;
          margin-bottom: 15px;
        }

        .reason-item p {
          font-size: 16px;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
