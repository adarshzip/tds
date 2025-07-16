"use client";

import { useState, useEffect } from 'react';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars as faBarsSolid, faTimes as faTimesSolid, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProgramsOpen, setIsProgramsOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';
    // Change headerVisible to always default to true
    const [headerVisible, setHeaderVisible] = useState(true);
    const [atTop, setAtTop] = useState(true);

    // Remove the useEffect that sets up listeners to reveal the header on scroll/interact

    // Track if at top of page for transparent header on homepage
    useEffect(() => {
        if (!headerVisible) return;
        const handleScroll = () => setAtTop(window.scrollY === 0);
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // set initial
        return () => window.removeEventListener('scroll', handleScroll);
    }, [headerVisible, pathname]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const togglePrograms = () => {
        setIsProgramsOpen(!isProgramsOpen);
    };

    const headerBg = (isHome && atTop && headerVisible) ? 'bg-transparent' : 'bg-usc-red';
    let headerPosition = '';
    if (headerVisible) {
        if (isHome && atTop) {
            headerPosition = 'absolute top-0 left-0 w-full h-16';
        } else {
            headerPosition = 'sticky top-0 h-16';
        }
    } else {
        headerPosition = 'absolute top-0 left-0 w-full h-0 -translate-y-full pointer-events-none';
    }
    // Only use transition when revealing the header on the homepage
    const transitionClass = isHome ? 'transition-all duration-500' : '';
    return(
        <header className={`${headerBg} flex items-center pl-4 font-light basis-full justify-between z-50 ${headerPosition} ${headerVisible ? 'translate-y-0' : ''} ${transitionClass}`}>
            {headerVisible && <>
                <nav className='flex justify-start flex-row items-center px-4 space-y-4 sm:space-y-0'>
                    <div className='font-caslon tracking-tighter tracking pt-1'>
                        <Link className='pr-0 text-3xl text-usc-yellow align-middle hover:text-yellow-300 transition-colors focus:outline-none' href='/' onClick={closeMenu}>
                            USC
                        </Link>
                        <Link className="pr-6 text-3xl text-white align-middle hover:text-gray-200 transition-colors focus:outline-none" href='/' onClick={closeMenu}>
                            Debate
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex space-x-4">
                        {/* About Dropdown - now controlled by state */}
                        <div
                          className="relative pr-4"
                          onMouseEnter={() => setIsAboutDropdownOpen(true)}
                          onMouseLeave={() => setIsAboutDropdownOpen(false)}
                        >
                            <Link href="/about" className="flex items-center text-lg text-white hover:text-usc-yellow focus:outline-none transition duration-150 ease-in" onClick={closeMenu}>
                                About
                                <FontAwesomeIcon icon={faChevronDown} className="ml-1 text-xs" />
                            </Link>
                            <div className={`absolute left-0 top-full w-40 rounded shadow-lg bg-usc-red transition-opacity z-50 ${isAboutDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                <Link href="/about/team" className="block px-4 py-2 text-white hover:bg-usc-yellow hover:text-black rounded-t transition-colors" onClick={() => { setIsAboutDropdownOpen(false); closeMenu(); }}>Team</Link>
                                <Link href="/about/archives" className="block px-4 py-2 text-white hover:bg-usc-yellow hover:text-black rounded-b transition-colors" onClick={() => { setIsAboutDropdownOpen(false); closeMenu(); }}>Archives</Link>
                            </div>
                        </div>
                        <Link className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow focus:outline-none" href="/prospects" onClick={closeMenu}>
                            Prospects
                        </Link>
                        <Link href="/programs" className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow focus:outline-none" onClick={closeMenu}>
                            Programs
                        </Link>
                        <Link className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow focus:outline-none" href="/outreach" onClick={closeMenu}>
                            Outreach
                        </Link>
                        <Link className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow focus:outline-none" href="/donate" onClick={closeMenu}>
                            Donate
                        </Link>
                        <Link className="transition duration-150 ease-in text-lg text-white hover:text-usc-yellow focus:outline-none" href="/contact" onClick={closeMenu}>
                            Contact
                        </Link>
                    </div>
                </nav>

                {/* Desktop Social Links */}
                <nav className="hidden sm:flex flex-row items-center justify-end pr-8 space-y-4 flex-nowrap sm:space-y-0">
                    <Link 
                        className="transition duration-150 ease-in pr-4 text-lg text-white hover:text-usc-yellow focus:outline-none" 
                        href="https://www.instagram.com/usctrojandebate/"
                        aria-label="Follow us on Instagram"
                        onClick={closeMenu}
                    > 
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden pr-4 text-white hover:text-usc-yellow transition-colors focus:outline-none"
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
                            {/* About with indented subpages for Mobile */}
                            <div>
                              <Link 
                                  href="/about" 
                                  className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors focus:outline-none block"
                                  onClick={closeMenu}
                              >
                                  About
                              </Link>
                              <div className="ml-6 bg-red-900/80 rounded-b-md">
                                <Link href="/about/team" className="block px-6 py-2 text-white hover:bg-usc-yellow hover:text-black transition-colors" onClick={closeMenu}>Team</Link>
                                <Link href="/about/archives" className="block px-6 py-2 text-white hover:bg-usc-yellow hover:text-black transition-colors" onClick={closeMenu}>Archives</Link>
                              </div>
                            </div>
                            <Link 
                                href="/prospects" 
                                className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors focus:outline-none"
                                onClick={closeMenu}
                            >
                                Prospects
                            </Link>
                            <Link 
                                href="/programs" 
                                className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors focus:outline-none"
                                onClick={closeMenu}
                            >
                                Programs
                            </Link>
                            <Link 
                                href="/outreach" 
                                className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors focus:outline-none"
                                onClick={closeMenu}
                            >
                                Outreach
                            </Link>
                            <Link 
                                href="/donate" 
                                className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors focus:outline-none"
                                onClick={closeMenu}
                            >
                                Donate
                            </Link>
                            <Link 
                                href="/contact" 
                                className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors focus:outline-none"
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                            <div className="border-t border-red-800 mt-2 pt-2">
                                <Link 
                                    href="https://www.instagram.com/usctrojandebate/" 
                                    className="px-6 py-3 text-white hover:text-usc-yellow hover:bg-red-800 transition-colors flex items-center gap-2 focus:outline-none"
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
            </>}
        </header>
    )
}