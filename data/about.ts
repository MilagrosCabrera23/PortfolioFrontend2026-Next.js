import { AboutInfo } from "@/types/about";
import { FaLinkedin, FaEnvelope, FaGithub, FaGlobe} from "react-icons/fa6"

export const aboutData: AboutInfo = {
    title: "Sobre Mi",
    subtitle: "Full Stack Developer | Frontend Focused",
    location: "Cordoba, Argentina",
    profileImage: "/profile.png",
    description: [
        "Hola, soy Milagros (Magui) Cabrera,una desarrolladora Full Stack con un enfoque especial en el Frontend. Me apasiona construir interfaces que no solo funcionen, sino que se sientan bien al usarlas. ",

        "Me encuentro cursando el último año de la Tecnicatura Superior en Desarrollo de Software en el ISPC.",

        "Actualmente estoy buscando unirme a un equipo donde pueda aportar mi proactividad, seguir aprendiendo y contribuir al desarrollo de productos digitales de alto impacto.",
    ],
    socialLinks: [
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/milagros-cabrera-dev",
            icon: FaLinkedin,
        },
        {
            platform: "GitHub",
            url: "https://github.com/milagrosmagalycabrera",
            icon: FaGithub,
        },
        {
            platform: "Email",
            url: "mailto:milagrosmagalycabrera@gmail.com",
            icon: FaEnvelope,
        }
    ]
};