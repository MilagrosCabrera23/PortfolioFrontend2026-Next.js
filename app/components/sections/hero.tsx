'use client';

import Link from 'next/link';
import Button from '@/app/components/ui/Button'; 
import { heroData } from '@/data/hero';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-16 overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-surface/20" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute t-0 w-full h-125 rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-[20%] -left-[10%] w-full  h-125 rounded-full opacity-15 blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
        />
      </div>


      <div
        className="opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--text) 1px, transparent 1px),
            linear-gradient(90deg, var(--text) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* --- CONTENIDO --- */}
      <div className=" max-w-5xl w-full  mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">

        {/* 1. Badge de Disponibilidad */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--color-surface) border border-(--color-border) text-(--color-text) text-base shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--color-accent) opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-(--color-accent)"></span>
            </span>
            {heroData.availability}
          </span>
        </div>

        {/* 2. Título Principal */}
        <h1 className="space-y-4 animate-fade-in-up animation-delay-100">
          <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-(--color-text) tracking-tighter">
            {heroData.intro}
          </span>
          <span className="block text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter">
            {/* Gradiente en el texto */}
            <span className="gradient-text drop-shadow-lg  ">
              {heroData.name}
            </span>
          </span>
        </h1>

        {/* 3. Subtítulo (Rol) */}
        <div className="animate-fade-in-up animation-delay-200">
          <p className="text-2xl sm:text-3xl md:text-3xl font-semibold text-(--color-text-secondary)">
            {heroData.role}
          </p>
        </div>

        {/* 4. Descripción */}
        <p className="animate-fade-in-up animation-delay-300 text-lg font-medium text-white sm:text-2xl mx-auto leading-relaxed  drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] tracking-wider" >
          {heroData.description}  
        </p>

        {/* 5. Botones (CTAs) */}
        <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href={heroData.ctas.primary.href}>
            <Button
              variant="primary"
              size="lg"
              rightIcon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              }
            >
              {heroData.ctas.primary.label}
            </Button>
          </Link>

          <Link href={heroData.ctas.secondary.href}>
            <Button
              variant="outline"
              size="lg"
            >
              {heroData.ctas.secondary.label}
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}