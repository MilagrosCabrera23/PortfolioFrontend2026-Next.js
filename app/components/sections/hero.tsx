'use client';

import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { heroData } from '@/data/hero';

export default function Hero() {
  return (
    <section id="/" className="max-w-7xl w-full flex items-center justify-center  overflow-hidden">

      <div className=" w-full mx-auto  sm:px-6 lg:px-8 text-center space-y-7">


        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-(--color-surface) border border-[var(--color-border) text-(--color-text) text-base shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2">
              <span className="animate-ping inline-flex h-full w-full rounded-full bg-(--color-accent) opacity-75"></span>
              <span className="inline-flex rounded-full h-2 w-2 bg-(--color-accent)"></span>
            </span>
            {heroData.availability}
          </span>
        </div>

        <h1 className="space-y-4 animate-fade-in-up animation-delay-100">
          <span className="block text-3xl sm:text-4xl md:text-5xl font-bold text-[(--color-text)] tracking-tighter">
            {heroData.intro}
          </span>
          <span className="block text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter">
            <span className="gradient-text drop-shadow-lg  ">
              {heroData.name}
            </span>
          </span>
        </h1>

        <div className="animate-fade-in-up animation-delay-200">
          <p className="text-2xl sm:text-3xl md:text-3xl font-semibold text-(--color-text-secondary)">
            {heroData.role}
          </p>
        </div>

        <p className="animate-fade-in-up animation-delay-300 text-lg font-medium text-white sm:text-2xl mx-auto leading-relaxed  drop-shadow-[0_0_10px_rgba(56,189,248,0.6)] tracking-wider" >
          {heroData.description}
        </p>

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