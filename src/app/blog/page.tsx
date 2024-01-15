import React from "react";
import type { Metadata } from "next";

import { getAllPosts } from "../_lib/post-utils";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Blog | ARVACAY",
  description: "ARVACAY: Your gateway to travel",
};

const page = async () => {
  const posts = await getAllPosts();

  return <Blog posts={posts} />;
};

export default page;
