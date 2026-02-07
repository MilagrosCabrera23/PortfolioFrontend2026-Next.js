import { projectsHero, projectsData } from "@/data/projects";
import Button from "@/app/components/ui/Button";
import ProjectCard from "@/app/components/ui/cardProject";
import { FaArrowRight } from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" className="py-24 mt-12">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 relative">

                <div className="projects-hero">
                    <h2 className="text-(--color-primary) text-4xl md:text-4xl sm:text-3xl font-bold text-center">{projectsHero.title}</h2>
                    <p className="text-center text-(--color-text-secondary) text-lg mx-auto mb-3">
                        {projectsHero.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>


            </div>



        </section >

    );
};
