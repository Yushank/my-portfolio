import { Container } from "@/components/container";
import { Metadata } from "next";

import { promises as fs } from "fs";
import path from "path";

import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";

export const metadata: Metadata = {
  title: "All blogs - Yushank Kashyap",
  description: "All my general wisdom and thoughts",
};

export default async function SingleBlogsPage() {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "src/data/", "jwt-authentication-basics.mdx"),
    "utf-8",
  );

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-[200vh] p:4 md:pt-12 md:pb-10">
        <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
          Single blogs
        </h1>

        <div className="prose">{content}</div>
      </Container>
    </div>
  );
}
