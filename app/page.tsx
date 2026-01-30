import {Hero} from "@/app/components/sections/hero";
import {About} from "@/app/components/sections/about";
import {Skills} from "@/app/components/sections/skills";
import {Projects} from "@/app/components/sections/projects";
import {Contact} from "@/app/components/sections/contacto";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 ">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
