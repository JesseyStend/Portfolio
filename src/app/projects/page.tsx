"use server";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import ProjectNavigation from "./projectsnavigation";
import GithubLogo from "~/components/icons/github";
import { getProjectsFromGithub } from "~/app/actions/getProjectsFromGithub";

const getProjects = async (searchParams: Record<string, string>) => {
  let response = await getProjectsFromGithub();

  response = response.filter((project) =>
    !project.private && searchParams.topic
      ? project.topics.includes(searchParams.topic.toLowerCase())
      : true,
  );

  return response;
};

export default async function Page(props: {
  params: Record<string, string>;
  searchParams: Record<string, string>;
}) {
  const projects = await getProjects(props.searchParams);
  const { topic } = props.searchParams;

  return (
    <main className="flex min-h-full flex-1 flex-col p-4 pt-0">
      <div className="w-full flex-none pb-4">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <ProjectNavigation currentTopic={topic} />
        </Card>
      </div>
      <div className="flex flex-1 flex-col gap-4 overflow-auto">
        {projects?.map((project) => (
          <Card key={project.name}>
            <CardHeader className=" overflow-clip">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-4">
              {project.homepage && (
                <Link href={project.homepage} className="flex-none">
                  View
                </Link>
              )}
              <Link href={project.html_url} className="flex-none">
                <GithubLogo className="fill-foreground h-5 w-5" />
              </Link>
              <CardDescription className=" flex-1 text-right">
                {project.topics.join(", ")}
              </CardDescription>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
