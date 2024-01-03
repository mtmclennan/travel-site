import React from "react";
import About from "./About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | EDGEINMIND",
  description: "About Edgeinmind company",
};

const page = () => {
  return <About />;
};

export default page;
