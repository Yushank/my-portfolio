import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All blogs - Yushank Kashyap",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-screen p:4 md:pt-12 md:pb-10">
        <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
          All Blogs
        </h1>
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, idx) => (
            <Link key={idx} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog?.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm">
                  {blog?.date}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog?.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

//itterate over each blog gotten from allBlogs function and render it while
// wrapping in link wuth slug (file name gotten from allBlog function as well) to redirect to that blog
