import { Container } from "@/components/container";
import { Metadata } from "next";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const awaited = await params; //awaited params to fix await params error
  const slug = awaited.slug;
  const frontmatter = await getBlogFrontMatterBySlug(slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export default async function SingleBlogsPage({
  params,
}: {
  params: { slug: string };
}) {
  const awaited = await params; //awaited params to fix await params error
  const slug = awaited.slug;
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
