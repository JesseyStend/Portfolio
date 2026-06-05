import Image from "next/image";
import img from "@/app/assets/headshot.jpeg"

const links = [
  {
    label: "Email",
    href: "mailto:jessey.stend@proton.me",
    icon: (
      <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l8 5.1 8-5.1V7H4Zm16 2.8-8 5.1-8-5.1V17h16V9.8Z" />
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/JesseyStend",
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jessey-stend-496493151/",
    icon: (
      <path d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98ZM3 9.25h4V21H3V9.25Zm6.5 0h3.83v1.61h.05c.53-1.01 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.43c0-1.3-.02-2.96-1.8-2.96-1.81 0-2.09 1.41-2.09 2.87V21h-4V9.25Z" />
    ),
  },
];

export default function HeaderCard() {
  return (
    <header className="flex w-full items-center gap-8">
      <Image
        className="rounded-full size-24 md:size-36"
        src={img}
        alt={"Headshot"}
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold">Jessey Stend</h1>
        <h2 className="text-xl md:text-2xl font-medium">Full-stack Developer</h2>
        <ul className="flex gap-4 pt-1">
          {links.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                className="text-ink-dim hover:text-accent transition-colors"
                href={href}
                aria-label={label}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <svg
                  className="size-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  {icon}
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
