import { IconType } from 'react-icons';

export interface  SkillHero{
    title: string;
    description: string;
}
export interface SkillData {
    name: string;
    icon: IconType;
    label:string;
}

export interface SkillCategory {
    category: string;
    skills: SkillData[];
}

export interface PhilosophyPoint {
    title: string;
    description: string;
    icon: IconType;
    color:string;
}
