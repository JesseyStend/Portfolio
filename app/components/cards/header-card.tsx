import Image from "next/image";
import img from "@/app/assets/headshot.jpeg"

export default function HeaderCard() {
  return (
    <header className="flex w-full items-center gap-8">
      <Image
        className="rounded-full"
        src={img}
        alt={"Headshot"}
        width={128}
        height={128}
      />
      <div>
        <h1 className="text-3xl font-extrabold">Jessey Stend</h1>
        <h2 className="text-2xl font-medium">Frontend developer</h2>
      </div>
    </header>
  );
}
