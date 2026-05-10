"use client";

import React from "react";
import { Wind, Snowflake, Flame, Droplets, Thermometer, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Snowflake size={40} />,
    title: "AC Installation & Replacement",
    desc: "Stay cool with our energy-efficient air conditioning systems tailored for your home."
  },
  {
    icon: <Flame size={40} />,
    title: "Heating System Repair",
    desc: "Expert diagnosis and repair for all types of heating systems to keep you warm."
  },
  {
    icon: <Thermometer size={40} />,
    title: "Furnace Installation",
    desc: "Professional furnace setup and replacement for reliable winter warmth."
  },
  {
    icon: <Droplets size={40} />,
    title: "Duct Cleaning & Sealing",
    desc: "Improve airflow and air quality with our professional duct services."
  },
  {
    icon: <Wind size={40} />,
    title: "Indoor Air Quality",
    desc: "Breathe easier with advanced air purification and filtration systems."
  },
  {
    icon: <ShieldAlert size={40} />,
    title: "Emergency HVAC Repair",
    desc: "Available 24/7 for urgent heating or cooling failures. We're here when you need us."
  }
];

const Services = () => {
  return (
    <section id="services" className="services bg-light">
      <div className="container">
        <div className="section-title">
          <h2>Our Expert Services</h2>
          <p>We provide full-service heating, cooling, and air quality solutions for residential and commercial properties.</p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="service-card"
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-light {
          background-color: var(--light-gray);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .service-card {
          background-color: var(--white);
          padding: 40px;
          border-radius: 8px;
          transition: var(--transition);
          border-bottom: 4px solid transparent;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border-bottom-color: var(--accent);
        }

        .service-icon {
          color: var(--accent);
          margin-bottom: 25px;
        }

        .service-card h3 {
          font-size: 24px;
          margin-bottom: 15px;
        }

        .service-card p {
          color: var(--text-light);
          margin-bottom: 25px;
          flex-grow: 1;
        }

        .service-link {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .service-link:hover {
          color: var(--accent);
          padding-left: 5px;
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
