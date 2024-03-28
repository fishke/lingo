import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  const flags = [
    { src: "/hr.svg", alt: "Croatian" },
    { src: "/es.svg", alt: "Spanish" },
    { src: "/fr.svg", alt: "French" },
    { src: "/it.svg", alt: "Italian" },
    { src: "/jp.svg", alt: "Japanese" },
  ];
  return (
    <footer className="hidden w-full h-20 p-2 border-t-2 lg:block border-slate-200">
      <div className="flex items-center h-full mx-auto max-w-screen-lg justify-evenly">
        {flags.map((flag) => (
          <Button size="lg" variant="ghost" className="w-full" key={flag.alt}>
            <Image
              src={flag.src}
              alt={flag.alt}
              height={32}
              width={40}
              className="mr-4 rounded-md"
            />
            {flag.alt}
          </Button>
        ))}
      </div>
    </footer>
  );
}
