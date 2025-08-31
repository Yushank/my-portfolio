import Image from "next/image";
import React from "react";

type Props = {
  imgSrc?: string;
  alt?: string;
  title: string;
  description: string;
  tech: string[];
};

const ProjectCard = ({ imgSrc, alt, title, description, tech }: Props) => {
  return (
    <div className="group relative mb-4 w-full rounded-xl border border-slate-200 hover:scale-[1.04] hover:shadow-lg dark:border-slate-700">
      <div className="relative flex flex-col items-start rounded p-4 dark:border-neutral-800">
        <h4 className="text-xl font-bold text-neutral-900 dark:bg-neutral-100">
          {title}
        </h4>
      </div>
      <div className="flex flex-col items-center">
        {imgSrc && (
          <Image
            className="mt-4"
            src={imgSrc}
            alt={alt ?? title}
            width={250}
            height={250}
          />
        )}
      </div>
      <div className="flex flex-col items-start p-4">
        <p className="pt-4 leading-6 text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
        <div className="flex flex-wrap pt-4 md:flex-row">
          {tech.map((item, i) => (
            <p
              className="mr-2 mb-2 rounded-md bg-gray-50 px-1 text-xs leading-5 text-neutral-700 italic dark:border dark:border-zinc-700 dark:bg-transparent dark:text-neutral-300"
              key={i}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
