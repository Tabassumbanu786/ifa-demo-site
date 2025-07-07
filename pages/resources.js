// pages/resources.js
import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import ResourcesSection from "@/components/ResourcesSection";
import SipCalculator from "@/components/SipCalculator";
import EmiCalculator from "@/components/EmiCalculator";



export default function ResourcesPage() {
  return (
    <Layout>
      <ResourcesSection />
    </Layout>
  );
}
