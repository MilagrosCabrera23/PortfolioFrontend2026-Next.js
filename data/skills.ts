import { SkillCategory, PhilosophyPoint, SkillHero } from "@/types/skills";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiFastapi, SiPython, SiDjango, SiPostgresql, SiMysql, SiSupabase, SiGit, SiGithub, SiPostman, SiDocker, SiCloudinary, SiJira
} from "react-icons/si";

import { FaCode, FaMobileAlt, FaRocket, FaUniversalAccess } from "react-icons/fa";

export const skillsHero: SkillHero = {
    title: "Stack Tecnológico",
    description: "Mi caja de herramientas para transformar ideas en productos digitales reales."
};

export const skills: SkillCategory[] = [
    {
        category: "Frontend",
        skills: [
            { name: "React", icon: SiReact, label: "React" },
            { name: "Next.js", icon: SiNextdotjs, label: "Next.js" },
            { name: "Tailwind CSS", icon: SiTailwindcss, label: "Tailwind CSS" },
            { name: "TypeScript", icon: SiTypescript, label: "TypeScript" },
            { name: "JavaScript", icon: SiJavascript, label: "JavaScript" },
            { name: "HTML5", icon: SiHtml5, label: "HTML5" },
            { name: "CSS3", icon: SiCss3, label: "CSS3" },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "FastAPI", icon: SiFastapi, label: "FastAPI" },
            { name: "Python", icon: SiPython, label: "Python" },
            { name: "Django", icon: SiDjango, label: "Django" },
            { name: "PostgreSQL", icon: SiPostgresql, label: "PostgreSQL" },
            { name: "MySQL", icon: SiMysql, label: "MySQL" },
            { name: "Supabase", icon: SiSupabase, label: "Supabase" },
        ],
    },
    {
        category: "Herramientas & Cloud",
        skills: [
            { name: "Git", icon: SiGit, label: "Git" },
            { name: "GitHub", icon: SiGithub, label: "GitHub" },
            { name: "Postman", icon: SiPostman, label: "Postman" },
            { name: "Docker", icon: SiDocker, label: "Docker" },
            { name: "Cloudinary", icon: SiCloudinary, label: "Cloudinary" },
            { name: "Scrum", icon: SiJira, label: "Scrum" },
        ],
    },
]

export const philosophyPoints: PhilosophyPoint[] = [
    {
        title: "Clean Code",
        description: "Código legible es código mantenible. Priorizo la claridad sobre la complejidad innecesaria.",
        icon: FaCode,
        color: "#4A90E2",
    },
    {
        title: "Responsive Design",
        description: "No solo construyo funcionalidades, diseño experiencias. El usuario final es la prioridad.",
        icon: FaMobileAlt,
        color: "#50E3C2",
    },
    {
        title: "Performance Optimization",
        description: "Aplicaciones rápidas y eficientes son mi objetivo. La optimización es parte integral del desarrollo.",
        icon: FaRocket,
        color: "#F5A623",
    },
    {
        title: "Accessibility First",
        description: "Diseño para todos. La accesibilidad no es una opción, es una responsabilidad.",
        icon: FaUniversalAccess,
        color: "#9013FE",
    }
];