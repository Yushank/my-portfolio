import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type FrontMatter = {
  title: string;
  description: string;
  date: string;
  image: string;
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data/", `${slug}.mdx`),
      "utf-8",
    );

    // console.log("singleBlog in getSingleBlog:", singleBlog);

    if (!singleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<{ title: string }>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return { content, frontmatter };
  } catch (error) {
    console.error(`Error reading blog file for slug "${slug}":`, error);
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "src/data")); //gets all mdx files from directory

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      //iterate each file
      const slug = file.replace(".mdx", ""); //remove .mdx from it to get only name as slug
      const frontmatter = await getBlogFrontMatterBySlug(slug); //pass that name/slug to getBlogFrontMatterBySlug function to get frontmatter
      return {
        slug,
        ...frontmatter,
      }; //return slug and frontmatter to blog/page.tsx file
    }),
  );

  return allBlogs;
};

const getBlogFrontMatterBySlug = async (slug: string) => {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "src/data", `${slug}.mdx`),
    "utf-8",
  );
  //find that slug name file

  if (!singleBlog) {
    return null;
  }
  //if not return null

  const frontmatter = await compileMDX<FrontMatter>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });
  //if file then extract frontmatter from there and return

  return frontmatter;
};
