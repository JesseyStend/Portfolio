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
        <div className="flex flex-col gap-4">
          <div className="sticky top-0 z-10 py-2 bg-canvas flex after:content-[''] after:h-px after:flex-1 after:bg-line-soft items-center-safe gap-4 uppercase font-medium text-accent text-sm">
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
            I&apos;m a full-stack developer based in Noord-Holland, currently
            building a multi-region storefront and a shared UI library for a
            small product team. I started out in game development, which is
            where I picked up the habit of caring how something{" "}
            <span className="text-accent font-bold">feels</span> to use, not
            just whether it works.
          </p>
            <p>
              I do my best work in smaller teams, where you own things
              end-to-end and a good idea doesn&apos;t need three meetings to
              happen.
            </p>
          </section>
        </div>
        <div className="flex flex-col gap-4">
          <div className="sticky top-0 z-10 py-2 bg-canvas flex after:content-[''] after:h-px after:flex-1 after:bg-line-soft items-center-safe gap-4 uppercase font-medium text-accent text-sm">
            What I do
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
                pricing-engine management tool in .NET with Blazor.
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
                .NET
              </span>
            </div>
          </article>
          <article className="flex flex-col gap-2 text-ink-dim">
            <div className="font-light">2024 — 2025</div>
            <h3 className="font-bold">
              Game Developer <span className="font-light">· IJsfontein</span>
            </h3>
            <div>
              <p>
                A detour back into games — built playful, educational
                experiences at a serious-games studio in Amsterdam. Turns out
                the habit never really left.
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
                Tailwind CSS
              </span>
            </div>
          </article>
          <article className="flex flex-col gap-2 text-ink-dim">
            <div className="font-light">2022 — 2024</div>
            <h3 className="font-bold">
              Full-stack Developer{" "}
              <span className="font-light">· MyWheels</span>
            </h3>
            <div>
              <p>
                Worked across a React frontend and Node.js services on a
                consumer car-sharing platform. Refactored an old PHP (Symfony)
                monolith into a GraphQL Node.js monolith, and led a CRM
                implementation along the way.
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
          <article className="flex flex-col gap-2 text-ink-dim">
            <div className="font-light">2020 — 2022</div>
            <h3 className="font-bold">
              Full-stack Developer{" "}
              <span className="font-light">· StudyWorks</span>
            </h3>
            <div>
              <p>
                Joined as the only front-ender, left as the frontend lead.
                Built the CI/CD environment in AWS, developed a CRM system,
                and taught React.js to anyone who&apos;d listen.
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
                AWS
              </span>
            </div>
          </article>
          <article className="flex flex-col gap-2 text-ink-dim">
            <div className="font-light">2019 — 2020</div>
            <h3 className="font-bold">
              Game Developer (intern){" "}
              <span className="font-light">· Dutch5 & Dutch Game Studio</span>
            </h3>
            <div>
              <p>
                Where the games habit started — first writing C# in Den Haag,
                then helping build a marketing platform where brands could
                assemble their own games.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-teal">
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                TypeScript
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                Node.js
              </span>
              <span className="rounded-full bg-teal-bg py-0.5 px-2 ring ring-teal-line">
                C#
              </span>
            </div>
          </article>
          </section>
        </div>
      </main>
      <footer className="content border-t border-line-soft mt-4 py-6 text-sm text-ink-faint">
        Currently in Noord-Holland ·{" "}
        <a
          className="text-accent font-bold underline"
          href="mailto:jessey.stend@proton.me"
        >
          jessey.stend@proton.me
        </a>
      </footer>
    </>
  );
}
