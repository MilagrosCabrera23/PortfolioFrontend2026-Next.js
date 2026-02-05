import { IconType } from "react-icons";

export interface AboutInfo {
    title:string;
    subtitle:string;
    location:string;
    description:string[];
    profileImage:string;
    socialLinks: SocialLink[];
}

export interface SocialLink {
   platform: string;
    url: string;
    icon: IconType;
}

