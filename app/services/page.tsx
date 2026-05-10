import React from "react";
import Services from "@/components/Services";
import PromoBanner from "@/components/PromoBanner";

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <div className="container" style={{ padding: '60px 20px 20px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Our HVAC Services</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '18px', maxWidth: '800px' }}>
          From emergency repairs to precision installations, Arctic Air Solutions provides a full range of heating, cooling, and air quality services.
        </p>
      </div>
      <Services />
      <PromoBanner />
    </main>
  );
}
