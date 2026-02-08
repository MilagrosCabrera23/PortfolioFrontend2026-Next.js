import Image from "next/image"; 
import SocialLinkBtn from "@/app/components/ui/socialLinkBtn";
import { footerData } from "@/data/footer";


export default function Footer() {
    return (
        <footer className="max-w-7xl flex flex-col justify-center mx-auto lg:px-8 ">
            <div className="h-20 md:h-24 flex  items-center justify-between px-4 gap-6 md:flex-row">
                     <Image src={footerData.image} alt="Logo" className="h-full w-auto object-contain" width={125} height={122} />
                <div>
                    <p className="text-(--color-text-secondary) text-lg text-center  tracking-wide">{footerData.description}</p>
                </div>
                <div className="space-x-2 flex items-center justify-center">
                    {footerData.socialLinksFooter.map((link) => (
                        <SocialLinkBtn
                            key={link.platform} 
                            label={link.platform}
                            href={link.url}
                            icon={link.icon}
                        />
                    ))}
                </div>
            </div>
        </footer>
    );
}