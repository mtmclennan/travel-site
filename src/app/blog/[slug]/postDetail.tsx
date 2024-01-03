"use client";

import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../_components/posts/PostContent";
import { getAllPosts, getBySlug } from "../../_lib/post-utils";
import { Post } from "../../_types/interfaces";

type PostDetailPageProps = {
  post: Post;
};

function PostDetail({ post }: PostDetailPageProps) {
  return (
    <Fragment>
      <Head>
        <title>{post ? post.title : ""}</title>
        <meta name="description" content={post ? post.description : ""} />
      </Head>
      {post ? <PostContent post={post} /> : ""}
    </Fragment>
  );
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;

  const postData = await getBySlug(slug);

  return {
    props: {
      post: postData.data,
    },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const posts = await getAllPosts();

  const slugs = posts.data.map((post: Post) => post.slug);

  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetail;
