import React from "react";
import { Metadata } from "next";
import Disclaimers from "./Disclaimers";

export const metadata: Metadata = {
  title: "Disclaimer | Arvacay",
  description: "Cookies - How this site uses cookies",
  robots: { index: false, follow: false },
};

const page = () => {
  return <Disclaimers />;
};

export default page;
