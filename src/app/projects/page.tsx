"use server";

import { Card, CardHeader, CardTitle } from "~/components/ui/card";

import ProjectNavigation from "./projectsnavigation";
import { getProjectsFromGithub } from "~/app/actions/getProjectsFromGithub";
import ProjectComponent from "./project";

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
      <div className="grid grid-cols-1 gap-4 overflow-auto sm:grid-cols-2">
        {projects?.map((project) => (
          <ProjectComponent key={project.name} {...project} />
        ))}
      </div>
    </main>
  );
}
