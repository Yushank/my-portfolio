import { Container } from "@/components/container";
import { LandingBlogs } from "@/components/landing-blogs";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-screen p-4 md:pt-12 md:pb-10">
        <h3>Hi, my name is</h3>
        <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
          Yushank Kashyap
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          A Computer Science graduate who loves building web apps and exploring
          new technologies to sharpen my skills.
        </p>
        <Projects />
        <LandingBlogs />
        {/* <NavLinks /> */}
      </Container>
    </div>
  );
}
