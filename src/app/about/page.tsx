import { Container } from "@/components/container";
import { getAboutMe } from "@/utils/mdx";
import { Dot } from "lucide-react";

export default async function AboutPage() {
  const aboutMeContent = await getAboutMe();
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container classname="min-h-screen p-4 md:pt-12 md:pb-10">
        <h1 className="text-primary mx-6 text-3xl font-bold tracking-tight md:text-5xl">
          About me
        </h1>
        <div className="prose text-primary mx-6 max-w-none pt-16">
          {aboutMeContent?.content}
        </div>
        <div className="text-primary mx-6 pt-10">
          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-4 pt-10">
            <li className="flex">
              <Dot />
              Javascript
            </li>
            <li className="flex">
              <Dot />
              Typescript
            </li>
            <li className="flex">
              <Dot />
              React
            </li>
            <li className="flex">
              <Dot />
              Node.js
            </li>
            <li className="flex">
              <Dot />
              Postgress
            </li>
            <li className="flex">
              <Dot />
              Redux
            </li>
            <li className="flex">
              <Dot />
              Websocket
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
