import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ServiceArea from "@/components/ServiceArea";
import PromoBanner from "@/components/PromoBanner";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <ServiceArea />
      <PromoBanner />
      <ContactForm />
    </main>
  );
}
