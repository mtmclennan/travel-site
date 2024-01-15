import React from "react";
import About from "./About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Arvacay",
  description: "About Arvacay",
};

const page = () => {
  return <About />;
};

export default page;
