"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const cities = [
  "Dallas", "Fort Worth", "Plano", "Arlington", "Irving", "Garland", 
  "Frisco", "McKinney", "Grand Prairie", "Denton", "Mesquite", "Carrollton"
];

const ServiceArea = () => {
  return (
    <section className="service-area">
      <div className="container">
        <div className="area-flex">
          <div className="area-content">
            <h2 className="area-title">Proudly Serving Dallas & Surrounding Areas</h2>
            <p className="area-desc">
              From emergency repairs to scheduled maintenance, we provide top-tier HVAC services to residential and commercial clients across the DFW metroplex.
            </p>
            <div className="cities-grid">
              {cities.map((city, idx) => (
                <div key={idx} className="city-tag">
                  <MapPin size={14} className="text-accent" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="area-map-placeholder">
            <div className="map-inner">
               <div className="map-marker" />
               <p>Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .service-area {
          background-color: var(--white);
        }

        .area-flex {
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .area-content {
          flex: 1;
        }

        .area-title {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .area-desc {
          color: var(--text-light);
          margin-bottom: 40px;
          font-size: 18px;
        }

        .cities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .city-tag {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--light-gray);
          padding: 10px 15px;
          border-radius: 4px;
          font-weight: 500;
          font-size: 14px;
        }

        .area-map-placeholder {
          flex: 1;
          background-color: #eee;
          aspect-ratio: 16/10;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
        }

        .map-inner {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder_LCa.png');
          background-size: cover;
          opacity: 0.5;
        }

        .map-marker {
          width: 20px;
          height: 20px;
          background-color: var(--accent);
          border-radius: 50%;
          border: 4px solid var(--white);
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
          margin-bottom: 10px;
        }

        @media (max-width: 992px) {
          .area-flex {
            flex-direction: column;
          }
          
          .cities-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default ServiceArea;
