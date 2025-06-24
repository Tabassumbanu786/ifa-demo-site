import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ServicesSection from "@/components/ServicesList";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const ifaData = {
  name: "Jane Smith",
  experience: 12,
};

const HomePage = () => {
  return (
    <Layout>
      <HeroSection ifaData={ifaData} />
      <ServicesSection ifaData={ifaData} />
      <AboutSection ifaData={ifaData} />
      <ContactSection ifaData={{ phone: '9876543210', email: 'abc@example.com', location: 'Mumbai' }} />
    </Layout>
  );
};

export default HomePage;
