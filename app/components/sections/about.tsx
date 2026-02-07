"use client";

import Image from "next/image";
import SocialLinkBtn from "@/app/components/ui/socialLinkBtn";
import { aboutData } from "@/data/about";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function About() {
  return (
    <section id="about" className="py-24 bg-(--bg-background)overflow-hidden">
      <div className="max-7-xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="flex items-center justify-center">
            <Image src={aboutData.profileImage} alt="Profile Image Milagros" width={400} height={400} className="object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl sm:text-3xl font-bold text-center">{aboutData.title}</h2>
            <h3 className="text-center font-bold text-(--color-primary) ">{aboutData.subtitle}</h3>

            <div className="space-y-3 text-(--color-text-secondary) leading-relaxed text-lg tracking-tighter">
              {aboutData.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="flex items-center justify-evenly">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-(--color-primary)" />
                <span>{aboutData.location}</span>
              </div>

              <div className="space-x-2 flex items-center">
                {aboutData.socialLinks.map((link) => (
                  <SocialLinkBtn
                    key={link.platform}
                    label={link.platform}
                    href={link.url}
                    icon={link.icon}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}