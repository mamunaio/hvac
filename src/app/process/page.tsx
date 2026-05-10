import React from "react";
import HowItWorks from "@/components/HowItWorks";
import PromoBanner from "@/components/PromoBanner";

export default function ProcessPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <div className="container" style={{ padding: '60px 20px 20px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Our Work Process</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '18px', maxWidth: '800px' }}>
          We believe in transparency and efficiency. Here is exactly what you can expect when you choose Arctic Air Solutions for your HVAC needs.
        </p>
      </div>
      <HowItWorks />
      <PromoBanner />
    </main>
  );
}
