import React from "react";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceArea from "@/components/ServiceArea";

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <div className="container" style={{ padding: '60px 20px 20px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>About Arctic Air Solutions</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '18px', maxWidth: '800px' }}>
          For over 20 years, we have been the most trusted name in HVAC across the Dallas area. Our commitment to upfront pricing and 24/7 reliability sets us apart.
        </p>
      </div>
      <WhyChooseUs />
      <ServiceArea />
    </main>
  );
}
