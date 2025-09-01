import { getBlogs } from "@/utils/mdx";
import React from "react";
import { Container } from "./container";
import Link from "next/link";

export const LandingBlogs = async () => {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        Developing a new habit of writing and sharing my thoughts
      </p>

      <div className="flex flex-col gap-4 py-10">
        {allBlogs.map((blog, idx) => (
          <Link key={blog.title} href={`/blog/${blog.slug}`}>
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-base font-bold tracking-tight">
                {blog?.title}
              </h2>
              <p className="text-secondary text-sm md:text-sm">{blog?.date}</p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
              {truncate(blog?.description || "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
