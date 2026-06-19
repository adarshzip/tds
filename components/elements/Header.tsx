"use client";

import { useState, useEffect } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars as faBarsSolid, faTimes as faTimesSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === '/';
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => setAtTop(window.scrollY === 0);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const headerBg = (isHome && atTop) ? 'bg-transparent' : 'bg-usc-red';
    const headerPosition = (isHome && atTop)
        ? 'absolute top-0 left-0 w-full h-16'
        : 'sticky top-0 h-16';
    const transitionClass = isHome ? 'transition-all duration-500' : '';

    const navLink = (href: string, label: string) => {
        const active = pathname === href;
        return (
            <Link
                href={href}
                onClick={closeMenu}
                className={`transition duration-150 ease-in text-lg focus:outline-none ${active ? 'text-usc-yellow font-semibold underline underline-offset-4' : 'text-white hover:text-usc-yellow'}`}
            >
                {label}
            </Link>
        );
    };

    return (
        <header className={`${headerBg} flex items-center justify-between px-6 z-50 ${headerPosition} ${transitionClass}`}>
            {/* Brand + Nav group */}
            <div className="flex items-center gap-6">
                {/* Brand */}
                <Link href="/" onClick={closeMenu} className="flex items-baseline gap-0 font-caslon tracking-tighter leading-none focus:outline-none">
                    <span className="text-3xl text-usc-yellow hover:text-yellow-300 transition-colors">USC</span>
                    <span className="text-3xl text-white hover:text-gray-200 transition-colors">Debate</span>
                </Link>

                {/* Divider */}
                <span className="hidden sm:block h-5 w-px bg-white/40" aria-hidden="true" />

                {/* Desktop nav links */}
                <nav className="hidden sm:flex items-center gap-6">
                    {navLink('/', 'Home')}
                    {navLink('/recruiting', 'Recruiting')}
                </nav>
            </div>

            {/* Desktop: Instagram */}
            <Link
                href="https://www.instagram.com/usctrojandebate/"
                aria-label="Follow us on Instagram"
                onClick={closeMenu}
                className="hidden sm:block text-lg text-white hover:text-usc-yellow transition duration-150 ease-in focus:outline-none"
            >
                <FontAwesomeIcon icon={faInstagram} />
            </Link>

            {/* Mobile: hamburger */}
            <button
                className="sm:hidden text-white hover:text-usc-yellow transition-colors focus:outline-none"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faTimesSolid : faBarsSolid} className="text-xl" />
            </button>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-usc-red shadow-lg z-50 sm:hidden">
                    <nav className="flex flex-col py-4">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className={`px-6 py-3 hover:bg-red-800 transition-colors focus:outline-none ${pathname === '/' ? 'text-usc-yellow font-semibold' : 'text-white hover:text-usc-yellow'}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/recruiting"
                            onClick={closeMenu}
                            className={`px-6 py-3 hover:bg-red-800 transition-colors focus:outline-none ${pathname === '/recruiting' ? 'text-usc-yellow font-semibold' : 'text-white hover:text-usc-yellow'}`}
                        >
                            Recruiting
                        </Link>
                        <div className="border-t border-red-800 mt-2 pt-2">
                            <Link
                                href="https://www.instagram.com/usctrojandebate/"
                                onClick={closeMenu}
                                aria-label="Follow us on Instagram"
                                className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors flex items-center gap-2 focus:outline-none"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                                Follow us on Instagram
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
