"use client";
import { contactoData } from "@/data/contacto";
import FormContact from "@/app/components/ui/formContact";

export default function Contacto() {
    const { hero } = contactoData;

    return (
        <section id="contact" className="max-w-7xl mx-auto py-20 px-4 overflow-hidden">
            <div className="contact-hero mb-6">
                <h2 className="text-(--color-primary) text-4xl md:text-5xl font-bold text-center">
                    {hero.title}
                </h2>
                <p className="text-center text-(--color-text-secondary) text-lg mx-auto mt-4 max-w-2xl">
                    {hero.description}
                </p>
            </div>

            <div className="flex justify-center items-start gap-12 ">

                <div className="w-full max-w-lg bg-white/5 border border-white/10 p-8 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">{hero.subtitle}</h3>
                    <FormContact /> 
                </div>
            </div>
        </section>
    );
}