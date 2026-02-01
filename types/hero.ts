export interface HeroData {
    intro: string;
    name: string;
    role: string;
    description: string;
    availability: string;
   ctas:{
    primary: CTAHero;
    secondary: CTAHero;
   }
}
export interface CTAHero{
    label: string;
    href: string;
}