"use client";

import { useState } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars as faBarsSolid, faTimes as faTimesSolid, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const togglePrograms = () => {
        setIsProgramsOpen(!isProgramsOpen);
    };

    return(
        <header className='bg-usc-red flex items-center h-16 pl-4 font-light basis-full justify-between relative'>
            <nav className='flex justify-start flex-row items-center px-4 space-y-4 sm:space-y-0'>
                <div className='font-caslon tracking-tighter tracking pt-1'>
                    <Link className='pr-0 text-3xl text-usc-yellow align-middle hover:text-yellow-300 transition-colors' href='/' onClick={closeMenu}>
                        USC
                    </Link>
                    <Link className="pr-6 text-3xl text-white align-middle hover:text-gray-200 transition-colors" href='/' onClick={closeMenu}>
                        Debate
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex space-x-4">
                    <Link href="/about" className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow" onClick={closeMenu}>
                        About
                    </Link>
                    <Link className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow" href="/prospects" onClick={closeMenu}>
                        Prospects
                    </Link>
                    
                    {/* Programs Dropdown */}
                    <div className="relative group">
                        <button 
                            className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow flex items-center gap-1"
                            onClick={togglePrograms}
                        >
                            Programs
                            <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                        </button>
                        <div className="absolute top-full left-0 bg-usc-red shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
                            <Link 
                                href="/digital-debate" 
                                className="block px-4 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                                onClick={closeMenu}
                            >
                                Digital Debate
                            </Link>
                            <Link 
                                href="/high-school" 
                                className="block px-4 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                                onClick={closeMenu}
                            >
                                High School Programs
                            </Link>
                            <Link 
                                href="/public-debate" 
                                className="block px-4 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                                onClick={closeMenu}
                            >
                                Public Debate
                            </Link>
                        </div>
                    </div>
                    
                    <Link className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow" href="/outreach" onClick={closeMenu}>
                        Outreach
                    </Link>
                    <Link className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow" href="/resources" onClick={closeMenu}>
                        Resources
                    </Link>
                    <Link className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow" href="/donate" onClick={closeMenu}>
                        Donate
                    </Link>
                    <Link className="transition duration-150 ease-in text-lg text-white hover:text-usc-yellow" href="/contact" onClick={closeMenu}>
                        Contact
                    </Link>
                </div>
            </nav>

            {/* Desktop Social Links */}
            <nav className="hidden sm:flex flex-row items-center justify-end pr-8 space-y-4 flex-nowrap sm:space-y-0">
                <Link 
                    className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow" 
                    href="https://www.instagram.com/usctrojandebate/"
                    aria-label="Follow us on Instagram"
                    onClick={closeMenu}
                > 
                    <FontAwesomeIcon icon={faInstagram} />
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="sm:hidden pr-4 text-white hover:text-usc-yellow transition-colors"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
            >
                <FontAwesomeIcon icon={isMenuOpen ? faTimesSolid : faBarsSolid} className="text-xl" />
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-usc-red shadow-lg z-50 sm:hidden">
                    <nav className="flex flex-col py-4">
                        <Link 
                            href="/about" 
                            className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                            onClick={closeMenu}
                        >
                            About
                        </Link>
                        <Link 
                            href="/prospects" 
                            className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                            onClick={closeMenu}
                        >
                            Prospects
                        </Link>
                        
                        {/* Programs Section */}
                        <div className="border-t border-red-800">
                            <div className="px-6 py-3 text-white font-semibold">
                                Programs
                            </div>
                            <Link 
                                href="/digital-debate" 
                                className="px-8 py-2 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors block"
                                onClick={closeMenu}
                            >
                                Digital Debate
                            </Link>
                            <Link 
                                href="/high-school" 
                                className="px-8 py-2 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors block"
                                onClick={closeMenu}
                            >
                                High School Programs
                            </Link>
                            <Link 
                                href="/public-debate" 
                                className="px-8 py-2 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors block"
                                onClick={closeMenu}
                            >
                                Public Debate
                            </Link>
                        </div>
                        
                        <Link 
                            href="/outreach" 
                            className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                            onClick={closeMenu}
                        >
                            Outreach
                        </Link>
                        <Link 
                            href="/resources" 
                            className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                            onClick={closeMenu}
                        >
                            Resources
                        </Link>
                        <Link 
                            href="/donate" 
                            className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                            onClick={closeMenu}
                        >
                            Donate
                        </Link>
                        <Link 
                            href="/contact" 
                            className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                        <div className="border-t border-red-800 mt-2 pt-2">
                            <Link 
                                href="https://www.instagram.com/usctrojandebate/" 
                                className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors flex items-center gap-2"
                                onClick={closeMenu}
                                aria-label="Follow us on Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                                Follow us on Instagram
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}