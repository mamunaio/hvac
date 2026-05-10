import React from "react";
import Testimonials from "@/components/Testimonials";

export default function TestimonialsPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <div className="container" style={{ padding: '60px 20px 20px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Customer Reviews</h1>
        <p style={{ color: 'var(--text-light)', fontSize: '18px', maxWidth: '800px' }}>
          Don't just take our word for it. Read what our satisfied customers in Dallas and Fort Worth have to say about our service.
        </p>
      </div>
      <Testimonials />
    </main>
  );
}
