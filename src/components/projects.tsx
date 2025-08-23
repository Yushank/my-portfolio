"use client";

import React from "react";
import ProjectCard from "./projectCard";
import { motion, Variants } from "motion/react";

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, filter: "blue(10px)", y: 10 },
    show: {
      opacity: 1,
      filter: "bluer(0px)",
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="py-10">
      <h2 className="mt-8 mb-4 text-2xl font-bold text-black md:text-4xl dark:text-white">
        Projects
      </h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="group relative"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              imgSrc: "/assets/lets-track.png",
              alt: "lets-track project",
              title: "Lets-track",
              description:
                "AI-powered meal tracker where users log meals via chat, and the system breaks down nutritional values for any custom or standard food",
              tech: ["Gemma", "React", "Websocket", "PSQL", "Next"],
            },
            {
              imgSrc: "/assets/guild.png",
              alt: "guild project",
              title: "Guild",
              description:
                "A simple Kanban-style task management app where users create columns, add cards, and seamlessly move or delete tasks for better organization.",
              tech: ["React", "Websocket", "Redux", "PSQL", "Next"],
            },
            {
              imgSrc: "/assets/auth-system-backend.png",
              alt: "auth-system: backend project",
              title: "Auth-system",
              description:
                "A backend-based authentication system with signup, login, JWT-based access and refresh tokens, auto token refresh via Axios interceptors, protected routes, and role-based authorization for admin and user access.",
              tech: ["Hono", "JWT", "PSQL", "Express", "Node"],
            },
          ].map((project, i) => (
            <motion.div key={i} variants={item}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
