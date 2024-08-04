import React from "react";
import { Metadata } from "next";
import Cook from "./Cook";

export const metadata: Metadata = {
  title: "Cookies | Arvacay",
  description: "Cookies - How this site uses cookies",
  robots: { index: false, follow: false },
};

const page = () => {
  return <Cook />;
};

export default page;
