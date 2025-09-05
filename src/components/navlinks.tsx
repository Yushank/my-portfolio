import Link from "next/link";
import { title } from "process";
import React from "react";
import { Container } from "./container";

export const NavLinks = () => {
  const internalNavLinks = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const externalNavLinks1 = [
    { title: "Github", href: "https://github.com/Yushank" },
    { title: "Twitter", href: "https://x.com/YushankKashyap" },
    { title: "Linkedin", href: "https://www.linkedin.com/in/yushank-kashyap/" },
    { title: "Email", href: "mailto:yushank2001@gmail.com", external: true },
  ];

  const externalNavLinks2 = [
    { title: "Resume", href: "/assets/resume.pdf", external: true },
  ];
  return (
    <Container>
      <div className="mx-w-2xl flex w-full flex-col items-start justify-center pt-4 pb-16">
        <hr className="mb-8 w-full border-1 border-gray-200 dark:border-gray-800" />
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
          {/* Internal nav link */}
          <div className="flex flex-col gap-4">
            {internalNavLinks.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                className="text-secondary hover:text-primary text-sm"
              >
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          {/* External nav link */}
          <div className="flex flex-col gap-4">
            {externalNavLinks1.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-secondary hover:text-primary text-sm"
              >
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          {/* External nav link 2 */}
          <div className="flex flex-col gap-4">
            {externalNavLinks2.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-secondary hover:text-primary text-sm"
              >
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
