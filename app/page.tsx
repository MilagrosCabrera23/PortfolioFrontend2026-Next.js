import Hero from "@/app/components/sections/hero";
import About from "@/app/components/sections/about";
// import Skills from "@/app/components/sections/skills";
//import Projects from "@/app/components/sections/projects";
// import Contact from "@/app/components/sections/contacto";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen w-full x-auto justify-center items-center relative overflow-hidden">
      <Hero />
      <About />
      {/* <Skills /> */}
        {/*<Projects />
        {/*<Contact />*/}
    </main>
  );
}
