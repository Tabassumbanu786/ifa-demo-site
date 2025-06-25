// pages/resources.js
import React from "react";
import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import ResourcesSection from "@/components/ResourcesSection";

const FinanceNews = dynamic(() => import("@/components/FinanceNews"), { ssr: false });

export default function ResourcesPage() {
  return (
    <Layout>
      <ResourcesSection />
      <FinanceNews />
    </Layout>
  );
}
