import React from "react";
import { Metadata } from "next";
import Cookies from "./cookies";

export const metadata: Metadata = {
  title: "Cookies | Arvacay",
  description: "Cookies - How this site uses cookies",
};

const page = () => {
  return <Cookies />;
};

export default page;
