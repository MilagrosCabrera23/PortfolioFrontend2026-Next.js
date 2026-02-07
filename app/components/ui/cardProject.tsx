// src/components/ui/ProjectCard.tsx
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/app/components/ui/card";
import Button from "@/app/components/ui/Button";
import { projectsData } from "@/data/projects";


interface ProjectCardProps {
  project: (typeof projectsData)[number];    

}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="px-6 group flex flex-col h-auto w-full overflow-hidden bg-(--color-surface) border-(--color-border) hover:border-(--color-primary)transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      <CardHeader >
      <CardTitle className="mt-2 text-xl font-bold bg-linear-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text group-hover:text-(--color-primary) transition-colors">
            {project.title}
        </CardTitle>
    <CardDescription className="text-(--color-text-secondary) text-balance text-sm tracking-wide">
            {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="grow">
        <div className="flex flex-wrap gap-1">
            {project.tags.map((tags:string) => (
                <Button key={tags} variant="ghost"   size="sm" className="">
                    {tags}
                </Button>
            ))}
        </div>
        <div className="mt-4">    
          <a  href={project.projectUrl} target="_blank" rel="noreferrer"> 
          <Button  variant="outline" size="sm" className="w-full">
            Ver Detalles 
         </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}