import { Container } from "@/components/container";
import Projects from "@/components/projects";

export default async function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container classname="min-h-screen p-4 md:pt-12 md:pb-10">
        <h1 className="text-primary text-3xl font-bold tracking-tight md:text-5xl">
          Projects
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I design and build full-stack web applications to grow my technical
          skills and gain hands-on experience. My projects showcase a mix of
          frontend and backend development, problem-solving, and exploration of
          modern web technologies.
        </p>
        <Projects />
      </Container>
    </div>
  );
}
