"use server";

export type Project = {
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
  private: boolean;
  homepage?: string;
};

export async function getProjectsFromGithub() {
  const response = (await (
    await fetch("https://api.github.com/users/JesseyStend/repos", {
      next: { revalidate: 3600 },
    })
  ).json()) as Project[];

  return response;
}
