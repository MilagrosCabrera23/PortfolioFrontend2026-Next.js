import {IconType} from 'react-icons';

interface socialLinkBtnProps {
    href: string;
    icon: IconType;
    label: string;
}

export default function SocialLink({ href, icon: Icon, label }: socialLinkBtnProps) {
    return (
        
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-12 h-12 flex items-center justify-center rounded-lg  text-(--color-secondary)hover:text-white hover:border-(--color-primary)hover:bg-(--color-primary)/10 transition-all duration-300 group">

            <svg className="w-11 h-11 fill-current" viewBox="0 0 24 24">
                <Icon className="w-10 h-10"/>
            </svg>
        </a>
    )
}