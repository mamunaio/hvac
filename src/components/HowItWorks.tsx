"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Call Us",
    desc: "Contact us 24/7. Our friendly dispatchers will listen to your needs and get you on the schedule."
  },
  {
    num: "02",
    title: "Appointment",
    desc: "Our certified technician arrives on time, diagnoses the issue, and provides a clear estimate."
  },
  {
    num: "03",
    title: "Problem Solved",
    desc: "We perform the repair or installation efficiently, leaving your space clean and comfortable."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Getting your HVAC system back on track is as easy as 1-2-3.</p>
        </div>

        <div className="steps-container">
          <div className="connecting-line" />
          <div className="steps-grid">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="step-item"
              >
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .steps-container {
          position: relative;
          padding: 40px 0;
        }

        .connecting-line {
          position: absolute;
          top: 80px;
          left: 0;
          width: 100%;
          height: 2px;
          background: repeating-linear-gradient(
            to right,
            var(--accent),
            var(--accent) 10px,
            transparent 10px,
            transparent 20px
          );
          z-index: 1;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .step-item {
          text-align: center;
          background-color: var(--white);
        }

        .step-num {
          width: 80px;
          height: 80px;
          background-color: var(--accent);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 700;
          margin: 0 auto 30px;
          border: 10px solid var(--white);
          box-shadow: 0 0 0 2px var(--accent);
        }

        .step-item h3 {
          font-size: 28px;
          margin-bottom: 15px;
        }

        .step-item p {
          color: var(--text-light);
          padding: 0 20px;
        }

        @media (max-width: 768px) {
          .connecting-line {
            display: none;
          }

          .steps-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
