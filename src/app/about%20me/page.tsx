import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "~/components/ui/card";

export default async function Page() {
  return (
    <main className="grid min-h-full flex-1 grid-cols-1 overflow-auto">
      <Card className="border-none">
        <CardContent>
          <CardTitle className="pb-4">About Me</CardTitle>
          <CardDescription>
            If I were to ask my colleagues to describe me in a few words, it
            would be friendly, loyal, and independent. I am at a point in my
            career where I am going to specialize. Therefore, I want to focus
            more on front-end, UX, and Gamification. Think, for example, of
            implementing an achievement system within your platform.
          </CardDescription>
        </CardContent>
      </Card>
      <Card className="border-none">
        <CardContent className="flex flex-col gap-2">
          <CardTitle className="pb-4">Experience</CardTitle>
          <Card>
            <CardHeader>
              <CardTitle>Software engineer</CardTitle>
              <CardDescription>jan. 2024 - now</CardDescription>
              <CardDescription>Starlims · Fulltime</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fullstack Developer</CardTitle>
              <CardDescription>nov. 2022 - okt. 2023</CardDescription>
              <CardDescription>MyWheels · Fulltime</CardDescription>
            </CardHeader>
            <CardContent>
              <CardDescription>
                At MyWheels, I was mainly responsible for converting the old
                mono-lite PHP (Symfony) code to Node.js with GraphQL.
                Additionally, I also led a CRM implementation.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frontend Developer</CardTitle>
              <CardDescription>jun. 2020 - okt. 2022</CardDescription>
              <CardDescription>StudyWorks B.V. · Fulltime</CardDescription>
            </CardHeader>
            <CardContent>
              <CardDescription>
                At Studyworks, I started as the sole front-ender. As more people
                joined, I quickly became the &ldquo;lead&ldquo; frontend. For
                instance, I developed the entire CI/CD environment in AWS,
                created a CRM system, and taught classes on React.js.
              </CardDescription>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </main>
  );
}
