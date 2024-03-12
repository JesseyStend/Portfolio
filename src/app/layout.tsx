import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import HomeIcon from "~/components/icons/home";
import CodeIcon from "~/components/icons/code";
import PersonIcon from "~/components/icons/person";
import NavBadge from "~/components/navbadge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Jessey Stend's Portfolio",
  description: "A portfolio of Jessey Stend's work and projects.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} flex max-h-screen flex-col flex-nowrap`}
      >
        <TRPCReactProvider>
          <Card className="flex-none border-none">
            <div className="flex items-center">
              <div className="p-4">
                <Avatar className="float-left h-20 w-20">
                  <AvatarImage src="https://github.com/JesseyStend.png" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
              </div>
              <CardHeader>
                <CardDescription>Fullstack Developer</CardDescription>
                <CardTitle>Jessey Stend</CardTitle>
              </CardHeader>
            </div>

            <CardContent className="flex justify-between gap-4">
              <NavBadge value="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Home
              </NavBadge>
              <NavBadge value="/projects">
                <CodeIcon className="mr-2 h-4 w-4" />
                Projects
              </NavBadge>
              <NavBadge value="/about%20me">
                <PersonIcon className="mr-2 h-4 w-4" />
                About me
              </NavBadge>
            </CardContent>
          </Card>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
