import Image from "next/image";
import HeaderCard from "./components/cards/header-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeaderCard />
      <main className="content py-4 flex flex-col gap-4">
        <section className=" text-ink-dim">
          <p>
            I make websites. I used to make games. I&apos;m still not convinced
            they&apos;re that different — it&apos;s all
            <span className="text-accent font-bold">
              {" "}
              building things that feel good to use.
            </span>
          </p>
        </section>
        <div className="flex after:content-[''] after:h-px after:flex-1 after:bg-line-soft items-center-safe gap-4 uppercase font-medium text-accent text-sm">
          Who am i
        </div>
        <section
          id="about"
          className="reveal in flex flex-col space-y-2 text-ink-dim"
        >
          <p>
            <span className=" text-base font-medium">
              I like taking things apart to see if I can make them a little
              better.
            </span>{" "}
            Sometimes that&apos;s a codebase. Sometimes it&apos;s a 2009
            Kawasaki, or a garage door system that already worked, but where I
            wanted to do some automation.
          </p>
          <p>
            I&apos;m a frontend developer based in Noord-Holland, currently
            building a multi-region storefront and a shared UI library for a
            small product team. I started out in game development, which is
            where I picked up the habit of caring how something{" "}
            <span className="text-accent font-bold">feels</span> to use, not
            just whether it works.
          </p>
          <p>
            I do my best work in smaller teams, where you own things end-to-end
            and a good idea doesn&apos;t need three meetings to happen.
          </p>
        </section>
        <div className="flex after:content-[''] after:h-px after:flex-1 after:bg-line-soft items-center-safe gap-4 uppercase font-medium text-accent text-sm">
          Who I do
        </div>
        <section id="experience" className="flex flex-col gap-4">
          <h2 className="sr-only">Experience</h2>
          <article className="flex flex-col gap-2 text-ink-dim">
            <div className="font-light">2025 — Now</div>
            <h3 className="font-bold">
              Full-stack Developer{" "}
              <span className="font-light">· Sonic Equipment</span>
            </h3>
            <div>
              <p>
                Building a Next.js{" "}
                <Link
                  className="text-accent font-bold underline"
                  href="https://www.sonic-equipment.com"
                >
                  storefront
                </Link>{" "}
                across 12 locales, plus a shared Storybook UI library. Built the
                pricing-engine management tool in dotnet with blazor.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-teal">
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                Next.js
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                TypeScript
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                Storybook
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                Cypress
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                Dotnet
              </span>
            </div>
          </article>
          <article className="flex flex-col gap-2 text-ink-dim">
            <div className="font-light">2024 — 2025</div>
            <h3 className="font-bold">
              Full-stack Developer{" "}
              <span className="font-light">· MyWheels</span>
            </h3>
            <div>
              <p>
                Worked across a React frontend and Node.js services on a
                consumer car-sharing platform. Refactored old mono-lite php
                (Symfony) into a GraphQl node mono-lite.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-teal">
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                React.js
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                TypeScript
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                GraphQL
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                Kubernetes
              </span>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
