'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLink from '@/app/components/ui/navbar';
import { navItems } from '@/data/navbar';
import Button from '@/app/components/ui/Button';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${isScrolled
                    ? 'bg-[(--bg-background/95)] backdrop-blur-md shadow-lg border-b border-[(--color-border)]'
                    : 'bg-transparent'
                }
      `}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="flex items-center justify-between h-16 md:h-20" >
                    < Link
                        href="/"
                        className="flex items-center space-x-2 text-[(--color-text)] font-bold text-xl hover:text-[(--color-primary)] transition-colors"
                    >
                        <span className="text-2xl" > {'</>'} </span>
                        < span className="hidden sm:inline" > Milagros.dev </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-1" >
                        {
                            navItems.map((item) => (
                                <NavLink key={item.href} href={item.href} >
                                    {item.label}
                                </NavLink>
                            ))
                        }
                    </div>


                    <div className="hidden md:flex items-center space-x-4" >
                        < Button variant="primary" size="md"
                            onClick={() => window.open('/cv.pdf', '_blank')}
                        >
                            Descargar CV
                        </Button>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-[(--color-text)] hover:text-[(--color-primary)] transition-colors"
                        aria-label="Toggle menu"
                    >

                        {
                            isMobileMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )
                        }
                    </button>
                </div>

                {/* --- MENÚ DESPLEGABLE (Móvil) --- */}
                <div
                    className={
                        `
            md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-xl border-t border-white/10
            ${isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'}
          `}
                >
                    <div className="flex flex-col space-y-2 pt-2 border-t border-[(--color-border)]" >
                        {
                            navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)} // Cierra el menú al tocar
                                    className="block w-full"
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        <div className="pt-4 flex flex-col space-y-3" >
                            <Button
                                variant="primary"
                                size="sm" 
                                onClick={() => window.open('/cv.pdf', '_blank')}
                            >
                                Descargar CV
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}