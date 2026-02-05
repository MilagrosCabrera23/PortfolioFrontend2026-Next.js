import {IconType} from 'react-icons';

interface socialLinkBtnProps {
    href: string;
    icon: IconType;
    label: string;
}

export default function SocialLink({ href, icon: Icon, label }: socialLinkBtnProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-12 h-12 flex items-center justify-center rounded-lg">
            <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                <Icon className="w-9 h-9"/>
            </svg>
        </a>
    )
}