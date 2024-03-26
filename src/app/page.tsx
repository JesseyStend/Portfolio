import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import {
  SiCsharp,
  SiTailwindcss,
  SiNextdotjs,
  SiReact,
} from "@icons-pack/react-simple-icons";
import { getProjectsFromGithub } from "~/app/actions/getProjectsFromGithub";
import ProjectComponent from "./projects/project";

const getProjects = async () => {
  let response = await getProjectsFromGithub();

  response = response.filter((project) =>
    project.topics.includes("highlighted"),
  );

  return response;
};

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="grid flex-1 grid-cols-1 gap-2 rounded-lg">
      <CardHeader className="pt-0">
        <CardDescription>
          I&apos;m a software engineer with a passion for web development. My
          background is game development, but I&apos;ve been working with web
          for the last 5 years and absolutely love the fast pase of new tech.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 py-0 sm:grid-cols-4">
        <CardTitle className=" col-span-full">Skills</CardTitle>
        <Card className="flex items-center justify-center bg-cyan-500 py-6 text-white">
          <SiReact className="h-8 w-8 flex-none" />
          <CardTitle className="m-0 flex-none pl-2">React.js</CardTitle>
        </Card>
        <Card className="flex items-center justify-center bg-slate-800 py-6 text-white">
          <SiNextdotjs className="h-8 w-8 flex-none" />
          <CardTitle className="m-0 flex-none pl-2">Next.js</CardTitle>
        </Card>
        <Card className="flex items-center justify-center bg-purple-800 py-6 text-white">
          <SiCsharp className="h-8 w-8 flex-none" />
          <CardTitle className="m-0 flex-none pl-2">.NET</CardTitle>
        </Card>
        <Card className="flex items-center justify-center bg-blue-500 py-6 text-white">
          <SiTailwindcss className="h-8 w-8 flex-none" />
          <CardTitle className="m-0 flex-none pl-2">Tailwind</CardTitle>
        </Card>
      </CardContent>
      <div>
        <CardHeader className="block">
          <CardTitle>Highlighted projects</CardTitle>
        </CardHeader>
        <CardFooter>
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <ProjectComponent
                    {...project}
                    className="mx-auto aspect-video max-w-[600px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardFooter>
      </div>
    </main>
  );
}
