import React from "react";
import type { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "ARVACAY: Travel Tips",
  description:
    "Explore Arvacay for expert travel planning tips, road trip advice, budget-friendly travel hacks, and top destination guides. Make your adventures unforgettable and travel smarter with Arvacay!",
};

const page = () => {
  return <Home />;
};

export default page;
