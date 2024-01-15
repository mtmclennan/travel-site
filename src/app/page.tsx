import React from "react";
import type { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "ARVACAY: Travel Tips",
  description: "ARVACAY: Your gateway to travel",
};

const page = () => {
  return <Home />;
};

export default page;
