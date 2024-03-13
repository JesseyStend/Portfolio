import Link from "next/link";
import { Project } from "../actions/getProjectsFromGithub";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { SiGithub } from "@icons-pack/react-simple-icons";

type ProjectProps = Project & {
  className?: string;
};

const Project: React.FunctionComponent<ProjectProps> = (project) => {
  return (
    <Card className={cn("flex flex-col", project.className)}>
      <CardHeader className="flex-1 overflow-clip">
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-none gap-4">
        {project.homepage && (
          <Link href={project.homepage} className="flex-none">
            View
          </Link>
        )}
        <Link href={project.html_url} className="flex-none">
          <SiGithub className="fill-foreground h-5 w-5" />
        </Link>
        <CardDescription className="flex-1 text-right">
          {project.topics.filter((topic) => topic !== "highlighted").join(", ")}
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default Project;
