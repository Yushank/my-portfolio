import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All blogs - Yushank Kashyap",
  description: "All my general wisdom and thoughts",
};

export default function BlogsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-[200vh] p:4 md:pt-12 md:pb-10">
        <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
          All Blogs
        </h1>
      </Container>
    </div>
  );
}
