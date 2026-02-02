'use client';

import SectionHeader from '../ui/header';
import { aboutData } from '@/data/about';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="relative px-16 py-20 overflow-hidden">
     
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader 
          variant="neon"
          title={aboutData.title} 
          className='text-balance'
          subtitle={aboutData.subtitle}
          description={aboutData.headerDescription}
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* --- TEXTO PRIMERO (Izquierda) --- */}
          <div className="md:col-span-7 space-y-8 text-left">
            
            <div className="space-y-5 text-balance leading-relaxed -tracking-tighter">
              {aboutData.description.map((paragraph, index) => (
                <p 
                    key={index} 
                    className={`
                        text-xl leading-relaxed  font-medium drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]}
                        ${index === 0 ? "text-lg font-medium text(--color-text)" : ""} 
                    `}
                >
                    {/* El primer párrafo (index 0) sale destacado en blanco y más grande */}
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
       
          {/* --- IMAGEN  (Derecha) --- */}
          <div className="md:col-span-5 relative group flex justify-center mb-25">
            
        
            <div className="absolute inset-0 bg-linear-to-tr from-(--color-primary) to-(--color-accent) rounded-2xl blur-[60px] opacity-20 group-hover:opacity-40 transition-duration-500" />
            
            {/* Contenedor de la imagen */}
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-none  shadow-2xl group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
               <Image
                  src={aboutData.profileImage}
                  alt="Profile Photo"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover aspect-auto"
               />
            </div>  
          </div>

        </div>
      </div>
    </section>
  );
}