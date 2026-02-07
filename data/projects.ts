import { ProjectsData,ProjectsHero } from "@/types/project";

export const projectsHero: ProjectsHero = {
    title: "Mis Proyectos",
    description: "Algunos de mis proyectos realizados en este último tiempo."
};
export const projectsData: ProjectsData[] = [
    {
        id: 1,
        title: "Thinktopia - Gestión Académica",
        description: "Plataforma integral para gestionar y registrar actividades en instituciones educativas. Incluye documentación técnica detallada y control de versiones.",
        projectUrl: "https://github.com/Academic-Developers/Thinktopia-Plataforma-de-actividades-Academicas",
        tags: ["Angular", "Bootstrap","Django", "Git", "Scrum"],
    },
    {
        id: 2,
        title: "Restaurante Gourmet - Landing Page",
        description: "Landing page para un restaurante gourmet,cuenta con sistema de reservas en tiempo real y gestión de contenidos dinámica.",
        projectUrl: "https://github.com/MilagrosCabrera23/Landing-Restarante-Frontend.git",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Cloudinary"],
    },
    {
        id: 3,
        title: "Thinktopia - Análisis de Datos",
        description: "Módulo analítico para el procesamiento de métricas académicas y visualización de desempeño estudiantil mediante lógica matemática.",
        projectUrl: "https://github.com/Academic-Developers/Thinktopia-Analisis-de-Datos-Academicos.git",
        tags: ["Python", "Data Analysis", "Math", "Pandas"]
    }
];