import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import ServicesSection from "@/components/ServicesList";

const ifaData = {
  name: "Jane Smith",
  experience: 12,
};

const HomePage = () => {
  return (
    <Layout>
      <HeroSection ifaData={ifaData} />
      <ServicesSection ifaData={ifaData} />
    </Layout>
  );
};

export default HomePage;
