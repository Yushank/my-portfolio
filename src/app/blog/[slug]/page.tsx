import { Container } from "@/components/container";
import { Metadata } from "next";

import { promises as fs } from "fs";
import path from "path";

import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "All blogs - Yushank Kashyap",
  description: "All my general wisdom and thoughts",
};

export default async function SingleBlogsPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = await params.slug;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  console.log("frontmatter:", frontmatter);

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-[200vh] p:4 md:pt-12 md:pb-10">
        <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
          Single blogs
        </h1>

        <div className="prose mx-2">{content}</div>
      </Container>
    </div>
  );
}
