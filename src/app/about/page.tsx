import React from "react";
import About from "./About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Arvacay",
  description:
    "Discover Arvacay, your ultimate travel planning companion! Get road trip tips, budget-friendly travel advice, and top accommodation recommendations. Explore the world with confidence and make every journey unforgettable",
};

const page = () => {
  return <About />;
};

export default page;
