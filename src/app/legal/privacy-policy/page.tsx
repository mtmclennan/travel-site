import React from "react";
import { Metadata } from "next";
import PrivacyPolicy from "./PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Arvacay",
  description:
    "Explore Arvacay's Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our commitment to security, cookie usage, third-party services, and more. Stay informed about our policies for a secure online experience. Contact us for privacy-related inquiries.",
};

const page = () => {
  return <PrivacyPolicy />;
};

export default page;
