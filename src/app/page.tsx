import React from "react";
import type { Metadata } from "next";
import Home from "./Home";

export const metadata: Metadata = {
  title: "EDGEINMIND: Mastering Stock Market Mindset for Success",
  description:
    "EDGEINMIND: Your gateway to gaining an upper hand in the market. Harness the power of mindset, refine your approach, and achieve trading excellence.",
};

const page = () => {
  return <Home />;
};

export default page;
