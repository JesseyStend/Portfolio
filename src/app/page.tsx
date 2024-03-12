import React from "react";
import NextJsIcon from "~/components/icons/nextjs";
import ReactIcon from "~/components/icons/react";
import TailwindIcon from "~/components/icons/tailwind";
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
import { getProjectsFromGithub } from "~/app/actions/getProjectsFromGithub";
import Link from "next/link";
import GithubLogo from "~/components/icons/github";

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
    <main className="grid min-h-full flex-1 grid-cols-1  p-4 pt-0">
      <Card className="overflow-auto">
        <CardHeader>
          <CardDescription>
            I&apos;m a software engineer with a passion for web development. My
            background is game-development, but I&apos;ve been working with web
            development for the last 5 years.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <CardTitle className=" col-span-full">Skills</CardTitle>
          <Card className="flex items-center justify-center gap-2 bg-cyan-600 py-6">
            <ReactIcon className="h-8 w-8 flex-none" />
            <CardTitle className="m-0 flex-none">React.js</CardTitle>
          </Card>
          <Card className="bg-secondary flex items-center justify-center gap-2 py-6">
            <NextJsIcon className="h-8 w-8 flex-none" />
            <CardTitle className="m-0 flex-none">Next.js</CardTitle>
          </Card>
          <Card className="bg-primary flex items-center justify-center gap-2 py-6">
            <CardTitle className="m-0 flex-none">.NET</CardTitle>
          </Card>
          <Card className="flex items-center justify-center gap-2 bg-blue-600 py-6">
            <TailwindIcon className="h-8 w-8 flex-none" />
            <CardTitle className="m-0 flex-none">Tailwind</CardTitle>
          </Card>
        </CardContent>
        <CardContent className="block">
          <CardTitle>Highlighted projects</CardTitle>
        </CardContent>
        <CardFooter>
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card key={project.name} className=" relative aspect-video">
                    <CardHeader className=" overflow-clip">
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="absolute bottom-0 flex w-full gap-4">
                      {project.homepage && (
                        <Link href={project.homepage} className="flex-none">
                          View
                        </Link>
                      )}
                      <Link href={project.html_url} className="flex-none">
                        <GithubLogo className="fill-foreground h-5 w-5" />
                      </Link>
                      <CardDescription className=" flex-1 text-right">
                        {project.topics
                          .filter((topic) => topic !== "highlighted")
                          .join(", ")}
                      </CardDescription>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardFooter>
      </Card>
    </main>
  );
}
