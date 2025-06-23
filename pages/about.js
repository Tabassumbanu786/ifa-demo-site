// pages/about.js
import React from "react";
import Layout from "@/components/Layout"; // adjust path if needed
import AboutSection from "@/components/AboutSection";

const dummyIFA = {
  name: "Ravi Shah",
  experience: 10,
  arn: "ARN-123456",
  hobby: "cricket and reading about financial strategies",
};

export default function AboutPage() {
  return (
    <Layout>
      <AboutSection ifaData={dummyIFA} />
    </Layout>
  );
}
