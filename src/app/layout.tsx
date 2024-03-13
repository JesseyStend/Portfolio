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

import { Home, CodeXml, SquareUser } from "lucide-react";

import NavBadge from "~/components/nav-badge";
import { ThemeProvider } from "~/components/theme-provider";
import DarkModeToggle from "~/components/ui/dark-mode-toggle";

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
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="container flex max-h-screen flex-col flex-nowrap">
              <Card className="flex-none border-none">
                <div className="flex items-center">
                  <div className="p-4">
                    <Avatar className="float-left h-20 w-20">
                      <AvatarImage src="https://github.com/JesseyStend.png" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardHeader className="flex-1">
                    <CardDescription>Fullstack Developer</CardDescription>
                    <CardTitle>Jessey Stend</CardTitle>
                  </CardHeader>
                  <div className="p-4">
                    <DarkModeToggle />
                  </div>
                </div>

                <CardContent className="flex justify-between gap-4">
                  <NavBadge value="/">
                    <Home className="mr-2 h-4 w-4 sm:h-6 sm:w-6" />
                    Home
                  </NavBadge>
                  <NavBadge value="/projects">
                    <CodeXml className="mr-2 h-4 w-4 sm:h-6 sm:w-6" />
                    Projects
                  </NavBadge>
                  <NavBadge value="/about%20me">
                    <SquareUser className="mr-2 h-4 w-4 sm:h-6 sm:w-6" />
                    About me
                  </NavBadge>
                </CardContent>
              </Card>
              {children}
            </div>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
