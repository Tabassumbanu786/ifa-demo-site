import React from "react";
import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";

const ifaDetails = {
  phone: "+91 9876543210",
  email: "advisor@example.com",
  location: "Mumbai, India",
};

export default function ContactPage() {
  return (
    <Layout>
      <ContactSection ifaData={ifaDetails} />
    </Layout>
  );
}
