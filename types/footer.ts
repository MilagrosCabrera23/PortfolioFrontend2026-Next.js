import { IconType } from "react-icons";

export interface FooterData {
    image: string;
    description: string;
    socialLinksFooter: {
        platform: string;
        url: string;
        icon: IconType;
    }[];
}