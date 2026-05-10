"use client";

import React, { useState } from "react";
import { Mail, Phone, Clock, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your request has been sent. We will contact you shortly.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2 className="contact-title">Request My Free Quote</h2>
            <p className="contact-desc">
              Fill out the form below and one of our HVAC experts will get back to you with a free, no-obligation estimate.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
                <div className="info-text">
                  <span>Call Us Anytime</span>
                  <strong>(555) 123-4567</strong>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={24} /></div>
                <div className="info-text">
                  <span>Email Support</span>
                  <strong>service@arcticair.com</strong>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Clock size={24} /></div>
                <div className="info-text">
                  <span>Business Hours</span>
                  <strong>Mon–Sat: 7am–7pm</strong>
                  <strong>Emergency: 24/7</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select 
                  required 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option value="">Select a Service</option>
                  <option value="ac-repair">AC Repair</option>
                  <option value="heating-repair">Heating Repair</option>
                  <option value="installation">New Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>How can we help?</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-btn">
                Request My Free Quote <Send size={18} style={{marginLeft: '10px'}} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background-color: var(--light-gray);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          background-color: var(--white);
          padding: 80px;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
        }

        .contact-title {
          font-size: 42px;
          margin-bottom: 20px;
        }

        .contact-desc {
          color: var(--text-light);
          margin-bottom: 40px;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-item {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background-color: rgba(10, 22, 40, 0.05);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-text {
          display: flex;
          flex-direction: column;
        }

        .info-text span {
          text-transform: uppercase;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-light);
          letter-spacing: 1px;
        }

        .info-text strong {
          font-size: 20px;
          color: var(--primary);
        }

        .contact-form-container {
          background-color: var(--light-gray);
          padding: 40px;
          border-radius: 8px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        label {
          display: block;
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 8px;
          color: var(--primary);
        }

        input, select, textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-family: var(--font-body);
          font-size: 16px;
          outline: none;
          transition: var(--transition);
        }

        input:focus, select:focus, textarea:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(232, 67, 10, 0.1);
        }

        .form-btn {
          width: 100%;
          margin-top: 20px;
        }

        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr;
            padding: 40px;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
