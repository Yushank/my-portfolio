import { Container } from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = await params.slug;
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
  const slug = await params.slug;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  console.log("frontmatter:", frontmatter);

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container classname="min-h-screen p-4 md:pt-12 md:pb-10">
        <div className="prose mx-6 max-w-none">{content}</div>
      </Container>
    </div>
  );
}
