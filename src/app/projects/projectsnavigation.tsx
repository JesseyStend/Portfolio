"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useRouter } from "next/navigation";

interface ProjectNavigationProps {
  currentTopic?: string;
}

const ProjectNavigation: React.FunctionComponent<ProjectNavigationProps> = (
  props,
) => {
  const currentTopic = props?.currentTopic;
  const router = useRouter();

  const changeTopic = (topic: string) => {
    if (topic === currentTopic) {
      router.replace(`/projects`);
      return;
    }

    router.replace(`/projects?topic=${topic}`);
  };

  return (
    <CardContent className="w-full">
      <Card className="flex w-full divide-x overflow-clip">
        <Button
          onClick={() => changeTopic("Web")}
          variant="ghost"
          className={cn(
            "flex-1 rounded-none focus:bg-none",
            currentTopic === "Web" && "bg-border focus:bg-none",
          )}
        >
          Web
        </Button>
        <Button
          onClick={() => changeTopic("Design")}
          variant="ghost"
          className={cn(
            "flex-1 rounded-none focus:bg-none",
            currentTopic === "Design" && "bg-border",
          )}
        >
          Design
        </Button>
        <Button
          onClick={() => changeTopic("Game")}
          variant="ghost"
          className={cn(
            "flex-1 rounded-none focus:bg-none",
            currentTopic === "Game" && "bg-border",
          )}
        >
          Game
        </Button>
      </Card>
    </CardContent>
  );
};

export default ProjectNavigation;
